/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { Calendar, Clock, User, Phone, FileText, CheckCircle, Sparkles, X } from 'lucide-react';
import { BookingFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BookingProps {
  selectedService: string;
  onClearSelectedService: () => void;
}

export default function Booking({ selectedService, onClearSelectedService }: BookingProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    services: [],
    date: '',
    time: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeAmpm, setActiveAmpm] = useState<'AM' | 'PM'>('PM');

  // Sync selectedService prop with local form state
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => {
        if (prev.services.includes(selectedService)) {
          return prev; // already added
        }
        return { ...prev, services: [...prev.services, selectedService] };
      });
      // Clear selected service in parent so it can be re-selected if needed
      onClearSelectedService();
      
      // Scroll to booking section
      const element = document.getElementById('booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedService, onClearSelectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      setFormData((prev) => ({ ...prev, time: '' }));
      return;
    }
    const [hourStr, minStr] = value.split(':');
    let hour = parseInt(hourStr, 10);
    const newAmpm = hour >= 12 ? 'PM' : 'AM';
    setActiveAmpm(newAmpm);
    setFormData((prev) => ({ ...prev, time: value }));
    if (errors.time) {
      setErrors((prev) => ({ ...prev, time: undefined }));
    }
  };

  const handleAmpmChange = (newAmpm: 'AM' | 'PM') => {
    setActiveAmpm(newAmpm);
    
    // If no time is set, let's set a default hour for that period (e.g. 10:00 for AM, 14:00 for PM)
    if (!formData.time) {
      const defaultTime = newAmpm === 'PM' ? '14:00' : '10:00';
      setFormData((prev) => ({ ...prev, time: defaultTime }));
      if (errors.time) {
        setErrors((prev) => ({ ...prev, time: undefined }));
      }
      return;
    }

    const [hourStr, minStr] = formData.time.split(':');
    let hour = parseInt(hourStr, 10);
    
    if (newAmpm === 'PM' && hour < 12) {
      hour += 12;
    } else if (newAmpm === 'AM' && hour >= 12) {
      hour -= 12;
    }
    
    const formattedHour = hour.toString().padStart(2, '0');
    setFormData((prev) => ({ ...prev, time: `${formattedHour}:${minStr}` }));
  };

  const handleAddService = (serviceName: string) => {
    if (!serviceName) return;
    setFormData((prev) => {
      if (prev.services.includes(serviceName)) return prev;
      return { ...prev, services: [...prev.services, serviceName] };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handleRemoveService = (serviceName: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s !== serviceName),
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Full Name is required' : 'पूरा नाम आवश्यक है';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'en' ? 'WhatsApp Number is required' : 'व्हाट्सएप नंबर आवश्यक है';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = language === 'en' ? 'Please enter a valid phone number' : 'कृपया एक मान्य फ़ोन नंबर दर्ज करें';
    }
    if (formData.services.length === 0) {
      newErrors.services = language === 'en' ? 'Please select at least one service' : 'कृपया कम से कम एक सेवा चुनें';
    }
    if (!formData.date) {
      newErrors.date = language === 'en' ? 'Preferred Date is required' : 'पसंदीदा तारीख आवश्यक है';
    }
    if (!formData.time) {
      newErrors.time = language === 'en' ? 'Preferred Time is required' : 'पसंदीदा समय आवश्यक है';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatTimeTo12Hour = (timeString: string): string => {
    if (!timeString) return '';
    try {
      const [hourStr, minStr] = timeString.split(':');
      let hour = parseInt(hourStr, 10);
      const minute = minStr;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      hour = hour ? hour : 12; // '0' becomes '12'
      const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
      return `${formattedHour}:${minute} ${ampm}`;
    } catch (e) {
      return timeString;
    }
  };

  const formatRawDate = (dateString: string): string => {
    if (!dateString) return '';
    try {
      const [year, month, day] = dateString.split('-');
      if (year && month && day) {
        return `${day}-${month}-${year}`;
      }
      return dateString;
    } catch (e) {
      return dateString;
    }
  };

  const findServicePrice = (serviceName: string): string => {
    for (const category of servicesData) {
      const found = category.services.find((s) => s.name === serviceName);
      if (found) {
        return `₹${found.price}${found.isStartingPrice ? '+' : ''}`;
      }
    }
    return 'TBD';
  };

  const findServicePriceObj = (serviceName: string) => {
    for (const category of servicesData) {
      const found = category.services.find((s) => s.name === serviceName);
      if (found) return found;
    }
    return null;
  };

  const calculateTotal = () => {
    let sum = 0;
    let hasPlus = false;
    formData.services.forEach((sName) => {
      const serviceObj = findServicePriceObj(sName);
      if (serviceObj) {
        sum += serviceObj.price;
        if (serviceObj.isStartingPrice) {
          hasPlus = true;
        }
      }
    });
    return `₹${sum}${hasPlus ? '+' : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Get formatted details
    const formattedTime = formatTimeTo12Hour(formData.time);
    const formattedDate = formatRawDate(formData.date);
    
    // Format list of services
    const servicesListText = formData.services
      .map((sName) => `- ${sName} (${findServicePrice(sName)})`)
      .join('\n');

    const totalEstimate = calculateTotal();

    // Build WhatsApp Deep Link with all details
    const targetPhone = '919511240238';
    const message = `Hi AR Beauty Parlour!
Name: ${formData.name}
Mobile: ${formData.phone}
Selected Services:
${servicesListText}

Estimated Total: ${totalEstimate}
Date: ${formattedDate}
Time: ${formattedTime}
Note: ${formData.notes || 'None'}`;

    // Properly encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Trigger Success feedback
    setIsSuccess(true);
    onClearSelectedService();

    // Reset success banner after 6 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  return (
    <section
      id="booking"
      className="py-24 sm:py-32 bg-[#1A1414] text-[#FCEBE6] relative overflow-hidden"
    >
      {/* Background radial soft lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-[#B76E79]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-25%] right-[-25%] w-[65vw] h-[65vw] bg-[#F7CAC9]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#F7CAC9] font-semibold block">
            {language === 'en' ? 'Reservation' : 'आरक्षण'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
            {language === 'en' ? (
              <>Book Your <span className="italic font-normal text-[#F7CAC9]">Appointment</span></>
            ) : (
              <>अपना <span className="italic font-normal text-[#F7CAC9]">अपॉइंटमेंट</span> बुक करें</>
            )}
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
          <p className="text-xs sm:text-sm text-[#FCEBE6]/70 font-light max-w-lg mx-auto">
            {t('booking.desc')}
          </p>
        </div>

        {/* Success Alert Banner */}
        {isSuccess && (
          <div className="mb-8 p-5 rounded-2xl bg-[#B76E79]/10 border border-[#B76E79]/40 flex items-start space-x-3 text-left max-w-2xl mx-auto transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-[#F7CAC9] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">
                {language === 'en' ? 'WhatsApp Client Triggered!' : 'व्हाट्सएप खुल गया है!'}
              </p>
              <p className="text-xs text-[#FCEBE6]/70 mt-1 leading-relaxed">
                {language === 'en' 
                  ? "If WhatsApp didn't open automatically, please check your popup blockers. Your pre-filled reservation sheet has been transferred successfully to +91 95112 40238."
                  : "यदि व्हाट्सएप अपने आप नहीं खुला है, तो कृपया पॉपअप ब्लॉकर की जांच करें। आपकी विवरण पर्ची +91 95112 40238 पर सफलतापूर्वक स्थानांतरित कर दी गई है।"
                }
              </p>
            </div>
          </div>
        )}

        {/* Booking Form Grid Card (Glassmorphic) */}
        <div className="bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative">
          {/* Subtle design hairline accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#B76E79] to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-[#F7CAC9] font-medium">
                  {t('booking.nameLabel')}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#FCEBE6]/40">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={language === 'en' ? 'Enter your name' : 'अपना नाम दर्ज करें'}
                    className={`w-full pl-10 pr-4 py-3 bg-[#1A1414]/40 border rounded-xl text-sm text-white placeholder-[#FCEBE6]/30 focus:outline-none focus:ring-1 focus:ring-[#B76E79] focus:bg-[#1A1414]/80 transition-all ${
                      errors.name ? 'border-red-400' : 'border-[#B76E79]/20 hover:border-[#B76E79]/40'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-400 font-light">{errors.name}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-[#F7CAC9] font-medium">
                  {t('booking.phoneLabel')}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#FCEBE6]/40">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9511240238"
                    className={`w-full pl-10 pr-4 py-3 bg-[#1A1414]/40 border rounded-xl text-sm text-white placeholder-[#FCEBE6]/30 focus:outline-none focus:ring-1 focus:ring-[#B76E79] focus:bg-[#1A1414]/80 transition-all ${
                      errors.phone ? 'border-red-400' : 'border-[#B76E79]/20 hover:border-[#B76E79]/40'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 font-light">{errors.phone}</p>}
              </div>

              {/* Service Selector Group (Multi-select style) */}
              <div className="space-y-4 md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="block text-xs uppercase tracking-widest text-[#F7CAC9] font-medium">
                    {t('booking.selectLabel')}
                  </label>
                  {formData.services.length > 0 && (
                    <span className="text-xs text-[#FCEBE6]/50">
                      {formData.services.length} {language === 'en' ? 'service(s) selected' : 'सेवा(एँ) चयनित'}
                    </span>
                  )}
                </div>

                {/* Selected services list (Pills/Badges) */}
                <div className="flex flex-wrap gap-2.5 p-4 bg-[#1A1414]/40 border border-[#B76E79]/20 rounded-2xl min-h-[60px] items-center">
                  {formData.services.length === 0 ? (
                    <p className="text-xs text-[#FCEBE6]/40 italic">
                      {language === 'en' 
                        ? 'No treatments selected yet. Pick one from the Rate Card above or add using the list below.'
                        : 'अभी तक कोई सेवा चुनी नहीं गई है। ऊपर रेट कार्ड से चुनें या नीचे सूची से जोड़ें।'
                      }
                    </p>
                  ) : (
                    formData.services.map((sName) => {
                      const translatedSvc = t(`svc.${sName}`) || sName;
                      return (
                        <span
                          key={sName}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#B76E79]/15 border border-[#B76E79]/30 text-xs text-white shadow-sm"
                        >
                          <span>{translatedSvc}</span>
                          <span className="text-[#F7CAC9] font-mono text-[11px]">({findServicePrice(sName)})</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveService(sName)}
                            className="ml-1 text-[#F7CAC9]/70 hover:text-white transition-colors p-0.5 rounded-full hover:bg-white/10"
                            aria-label={`Remove ${sName}`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      );
                    })
                  )}
                </div>

                {/* Estimated Total Card */}
                {formData.services.length > 0 && (
                  <div className="flex items-center justify-between p-4 bg-[#B76E79]/5 border border-[#B76E79]/15 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#F7CAC9]" />
                      <span className="text-xs uppercase tracking-wider text-[#FCEBE6]/70">
                        {language === 'en' ? 'Estimated Total:' : 'अनुमानित कुल:'}
                      </span>
                    </div>
                    <span className="font-mono text-sm sm:text-base font-bold text-[#F7CAC9] bg-[#1A1414]/60 px-3.5 py-1.5 rounded-xl border border-[#B76E79]/20 shadow-inner">
                      {calculateTotal()}
                    </span>
                  </div>
                )}

                {/* Add Service Selector */}
                <div className="space-y-1.5">
                  <p className="text-[11px] text-[#FCEBE6]/50">
                    {language === 'en' 
                      ? `Add ${formData.services.length > 0 ? 'another' : 'a'} service to your booking:`
                      : `अपनी बुकिंग में ${formData.services.length > 0 ? 'एक और' : 'एक'} सेवा जोड़ें:`
                    }
                  </p>
                  <div className="relative">
                    <select
                      name="add_service"
                      value=""
                      onChange={(e) => {
                        handleAddService(e.target.value);
                        e.target.value = ''; // reset immediately
                      }}
                      className={`w-full px-4 py-3 bg-[#1A1414]/80 border rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79] appearance-none cursor-pointer ${
                        errors.services ? 'border-red-400' : 'border-[#B76E79]/20 hover:border-[#B76E79]/40'
                      }`}
                    >
                      <option value="" className="bg-[#1A1414] text-white/50">
                        {language === 'en' ? '+ Choose ritual to add...' : '+ जोड़ने के लिए सेवा चुनें...'}
                      </option>
                      {servicesData.map((category) => {
                        const catLabel = t(`cat.${category.id}`) || category.title;
                        return (
                          <optgroup
                            key={category.id}
                            label={catLabel}
                            className="bg-[#1A1414] text-[#F7CAC9] font-serif py-2"
                          >
                            {category.services
                              .filter((item) => !formData.services.includes(item.name))
                              .map((item) => {
                                const sName = t(`svc.${item.name}`) || item.name;
                                return (
                                  <option
                                    key={item.id}
                                    value={item.name}
                                    className="bg-[#1A1414] text-[#FCEBE6] font-sans py-1 text-sm"
                                  >
                                    {sName} (₹{item.price}{item.isStartingPrice ? '+' : ''})
                                  </option>
                                );
                              })}
                          </optgroup>
                        );
                      })}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#FCEBE6]/50">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {errors.services && <p className="text-xs text-red-400 font-light">{errors.services}</p>}
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-[#F7CAC9] font-medium">
                  {t('booking.dateLabel')}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#FCEBE6]/40">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-[#1A1414]/40 border rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79] focus:bg-[#1A1414]/80 transition-all ${
                      errors.date ? 'border-red-400' : 'border-[#B76E79]/20 hover:border-[#B76E79]/40'
                    }`}
                  />
                </div>
                {errors.date && <p className="text-xs text-red-400 font-light">{errors.date}</p>}
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-[#F7CAC9] font-medium">
                  {t('booking.timeLabel')}
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#FCEBE6]/40">
                      <Clock className="w-4 h-4" />
                    </span>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleTimeChange}
                      className={`w-full pl-10 pr-4 py-3 bg-[#1A1414]/40 border rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79] focus:bg-[#1A1414]/80 transition-all ${
                        errors.time ? 'border-red-400' : 'border-[#B76E79]/20 hover:border-[#B76E79]/40'
                      }`}
                    />
                  </div>
                  {/* Highlighted AM/PM Toggles */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAmpmChange('AM')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all duration-150 cursor-pointer text-center ${
                        activeAmpm === 'AM'
                          ? 'bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-[#1A1414] border-transparent shadow-[0_0_15px_rgba(183,110,121,0.25)]'
                          : 'bg-[#1A1414]/40 border-[#B76E79]/10 text-[#FCEBE6]/60 hover:border-[#B76E79]/30 hover:text-white'
                      }`}
                    >
                      {language === 'en' ? 'AM (Morning)' : 'AM (सुबह)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAmpmChange('PM')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all duration-150 cursor-pointer text-center ${
                        activeAmpm === 'PM'
                          ? 'bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-[#1A1414] border-transparent shadow-[0_0_15px_rgba(183,110,121,0.25)]'
                          : 'bg-[#1A1414]/40 border-[#B76E79]/10 text-[#FCEBE6]/60 hover:border-[#B76E79]/30 hover:text-white'
                      }`}
                    >
                      {language === 'en' ? 'PM (Afternoon)' : 'PM (दोपहर)'}
                    </button>
                  </div>
                </div>
                {errors.time && <p className="text-xs text-red-400 font-light">{errors.time}</p>}
              </div>

              {/* Additional Notes */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-[#F7CAC9] font-medium">
                  {t('booking.notesLabel')}
                </label>
                <div className="relative">
                  <span className="absolute top-3.5 left-3.5 text-[#FCEBE6]/40">
                    <FileText className="w-4 h-4" />
                  </span>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder={language === 'en' 
                      ? 'Describe any skin sensitivities, specific styling goals, or general notes...'
                      : 'त्वचा की संवेदनशीलता, विशेष स्टाइलिंग लक्ष्यों या सामान्य विवरण लिखें...'
                    }
                    className="w-full pl-10 pr-4 py-3 bg-[#1A1414]/40 border border-[#B76E79]/20 rounded-xl text-sm text-white placeholder-[#FCEBE6]/30 focus:outline-none focus:ring-1 focus:ring-[#B76E79] focus:bg-[#1A1414]/80 hover:border-[#B76E79]/40 transition-all resize-none"
                  />
                </div>
              </div>

            </div>

            {/* Custom styled WhatsApp Booking button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:scale-[1.02] transform transition-all duration-300 cursor-pointer"
              >
                {/* Custom SVG WhatsApp Logo */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                <span>{t('booking.submitBtn')}</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

