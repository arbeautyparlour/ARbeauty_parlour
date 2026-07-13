/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Instagram, Sparkles, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onNavigate: (sectionId: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const handleQuickLink = (id: string) => {
    onNavigate(id);
  };

  return (
    <section
      id="contact"
      className="bg-[#1A1414] text-[#FCEBE6] pt-24 pb-12 relative overflow-hidden border-t border-[#B76E79]/10"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#B76E79]/15 rounded-full blur-[120px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-[#F7CAC9]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main contact section grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 pb-16 border-b border-[#B76E79]/10">
          
          {/* Brand & Address Column (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-8 text-left">
            {/* Logo */}
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B76E79] to-[#F7CAC9] flex items-center justify-center shadow-lg shadow-[#B76E79]/10">
                <Sparkles className="w-4 h-4 text-[#1A1414]" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-serif text-xl font-bold tracking-wider text-white">
                  AR BEAUTY
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B76E79]">
                  Parlour
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FCEBE6]/60 leading-relaxed font-light max-w-md">
              {language === 'en' 
                ? 'Step into a sanctuary where luxury, hygiene, and modern bridal artistry seamlessly unite. Curated by Aaliya Shaikh for those seeking timeless beauty.' 
                : 'एक ऐसे आश्रय स्थल में कदम रखें जहां विलासिता, स्वच्छता और आधुनिक दुल्हन कलात्मकता सहजता से एकजुट होती हैं। कालातीत सुंदरता चाहने वालों के लिए आलिया शेख द्वारा तैयार किया गया।'}
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-4 w-full">
              {/* Address */}
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-8 h-8 rounded-full border border-[#B76E79]/30 bg-[#B76E79]/5 flex items-center justify-center text-[#F7CAC9] flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#B76E79] font-medium">
                    {language === 'en' ? 'Salon Location' : 'पार्लर का स्थान'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FCEBE6]/80 font-light mt-1">
                    {language === 'en' ? 'Jamil Colony, Amravati, Maharashtra, India' : 'जमील कॉलोनी, अमरावती, महाराष्ट्र, भारत'}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-8 h-8 rounded-full border border-[#B76E79]/30 bg-[#B76E79]/5 flex items-center justify-center text-[#F7CAC9] flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#B76E79] font-medium">
                    {language === 'en' ? 'Phone Call' : 'फ़ोन कॉल'}
                  </h4>
                  <a href="tel:+919403473821" className="text-xs sm:text-sm text-[#FCEBE6]/80 hover:text-[#F7CAC9] font-light mt-1 block transition-colors">
                    +91 94034 73821
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-8 h-8 rounded-full border border-[#B76E79]/30 bg-[#B76E79]/5 flex items-center justify-center text-[#F7CAC9] flex-shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#B76E79] font-medium">
                    {language === 'en' ? 'WhatsApp Support' : 'व्हाट्सएप'}
                  </h4>
                  <a href="https://wa.me/919511240238" target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-[#FCEBE6]/80 hover:text-[#F7CAC9] font-light mt-1 block transition-colors">
                    +91 95112 40238
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-8 h-8 rounded-full border border-[#B76E79]/30 bg-[#B76E79]/5 flex items-center justify-center text-[#F7CAC9] flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#B76E79] font-medium">
                    {language === 'en' ? 'Email Inquiries' : 'ईमेल पूछताछ'}
                  </h4>
                  <a href="mailto:arbeautyparlours@gmail.com" className="text-xs sm:text-sm text-[#FCEBE6]/80 hover:text-[#F7CAC9] font-light mt-1 block transition-colors">
                    arbeautyparlours@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-8 h-8 rounded-full border border-[#B76E79]/30 bg-[#B76E79]/5 flex items-center justify-center text-[#F7CAC9] flex-shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#B76E79] font-medium">
                    {language === 'en' ? 'Salon Hours' : 'पार्लर का समय'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FCEBE6]/80 font-light mt-1">
                    {language === 'en' ? 'Monday – Sunday: 11:00 AM – 08:00 PM' : 'सोमवार – रविवार: सुबह 11:00 बजे – रात 08:00 बजे'}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/arbeautyp?igsh=MTlnZHF0ZnAxcnU2Zw=="
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#B76E79] hover:text-[#1A1414] border border-white/10 hover:border-transparent flex items-center justify-center text-[#F7CAC9] transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919511240238"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-white border border-white/10 hover:border-transparent flex items-center justify-center text-[#F7CAC9] transition-all duration-300 transform hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                {/* Inline SVG WhatsApp */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Map Column (Col Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-6 text-left">
            <h4 className="font-serif text-lg font-normal text-[#F7CAC9] relative pb-2 w-full">
              {language === 'en' ? 'Navigations' : 'नेविगेशन'}
              <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#B76E79]" />
            </h4>
            <div className="flex flex-col space-y-3.5 text-sm text-[#FCEBE6]/60 font-light">
              <button onClick={() => handleQuickLink('home')} className="hover:text-[#F7CAC9] text-left transition-colors cursor-pointer">
                {t('nav.home')}
              </button>
              <button onClick={() => handleQuickLink('about')} className="hover:text-[#F7CAC9] text-left transition-colors cursor-pointer">
                {t('nav.about')}
              </button>
              <button onClick={() => handleQuickLink('services')} className="hover:text-[#F7CAC9] text-left transition-colors cursor-pointer">
                {t('nav.services')}
              </button>
              <button onClick={() => handleQuickLink('gallery')} className="hover:text-[#F7CAC9] text-left transition-colors cursor-pointer">
                {t('nav.gallery')}
              </button>
              <button onClick={() => handleQuickLink('booking')} className="hover:text-[#F7CAC9] text-left transition-colors cursor-pointer">
                {t('nav.bookNow')}
              </button>
            </div>
          </div>

          {/* Interactive Google Map Column (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6 text-left w-full">
            <h4 className="font-serif text-lg font-normal text-[#F7CAC9] relative pb-2 w-full">
              {language === 'en' ? 'Our Location' : 'हमारा स्थान'}
              <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#B76E79]" />
            </h4>
            
            {/* Map Frame wrapper */}
            <div className="w-full h-44 rounded-2xl overflow-hidden border border-[#B76E79]/20 shadow-md relative group">
              <iframe
                title="AR Beauty Parlour Location"
                src="https://maps.google.com/maps?q=20.9432206,77.7419456(AR%20Beauty%20Parlour)&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Direct Link Overlay on Hover */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=20.9432206,77.7419456"
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 bg-[#1A1414]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-[#FCEBE6] backdrop-blur-[1px]"
              >
                {language === 'en' ? 'Get Directions ↗' : 'दिशा-निर्देश प्राप्त करें ↗'}
              </a>
            </div>
            <p className="text-[11px] text-[#FCEBE6]/40 leading-normal">
              {language === 'en' 
                ? 'Located at Jamil Colony, Amravati. For specialized bridal counseling or pre-visit setup instructions, call or book ahead.'
                : 'जमील कॉलोनी, अमरावती में स्थित है। विशेष ब्राइडल काउंसलिंग या पूर्व-मुलाकात सेटअप निर्देशों के लिए, कॉल या पहले से बुक करें।'}{' '}
              <a href="https://www.google.com/maps/dir/?api=1&destination=20.9432206,77.7419456" target="_blank" rel="noreferrer" className="text-[#B76E79] hover:text-[#F7CAC9] transition-colors underline font-medium">
                {language === 'en' ? 'Get Directions' : 'दिशा-निर्देश प्राप्त करें'}
              </a>
            </p>
          </div>

        </div>

        {/* Copyright & Sign-off footer block */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#FCEBE6]/40 font-light">
          <p>© {currentYear} AR Beauty Parlour. {language === 'en' ? 'All rights reserved.' : 'सर्वाधिकार सुरक्षित।'}</p>
          <p className="flex items-center space-x-1.5">
            <span>{language === 'en' ? 'Crafted by' : 'द्वारा निर्मित'}</span>
            <span className="font-serif italic font-medium text-[#F7CAC9]">AR Beauty Studio</span>
          </p>
        </div>

      </div>
    </section>
  );
}

