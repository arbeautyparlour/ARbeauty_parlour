/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ShieldCheck, Heart, Award, Star, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

interface HomeFeaturedServicesProps {
  onSelectService: (serviceName: string) => void;
  onViewAll: () => void;
}

export function HomeFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Pristine Sanitization',
      description: 'We follow medical-grade sanitization standards. Every tool and chair is fully sterilized before use.',
    },
    {
      icon: Award,
      title: 'Expert Touch',
      description: 'Led by certified expert Aaliya Shaikh, ensuring years of craft and premium care for your skin & hair.',
    },
    {
      icon: Heart,
      title: 'Bespoke Consultations',
      description: 'No generic packages. We study your hair and skin type to craft a ritual that is uniquely yours.',
    },
    {
      icon: Sparkles,
      title: 'Top Brand Products',
      description: 'Only 100% genuine luxury products touch your skin to guarantee a safe, long-lasting glow.',
    },
  ];

  return (
    <section className="py-16 bg-[#FFF8F5] border-t border-[#B76E79]/10 relative overflow-hidden">
      {/* Soft circular glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-[-10%] w-80 h-80 rounded-full bg-[#B76E79]/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-80 h-80 rounded-full bg-[#F7CAC9]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-semibold block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
            Uncompromising <span className="italic font-normal text-[#B76E79]">Standards</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-lg mx-auto">
            Experience Amravati's leading self-care sanctuary, where modern trends blend perfectly with premium hygiene and pure organic products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#B76E79]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-gradient-to-br from-[#B76E79]/5 to-[#F7CAC9]/10 group-hover:from-[#B76E79]/10 group-hover:to-[#F7CAC9]/20 transition-all duration-300" />
                
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8F5] border border-[#B76E79]/20 flex items-center justify-center text-[#B76E79] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-base sm:text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturedServices({ onSelectService, onViewAll }: HomeFeaturedServicesProps) {
  const featured = [
    {
      name: 'Bridal Makeup',
      price: '4000+',
      category: 'Bridal Couture',
      description: 'High-definition couture look with long-lasting water-resistant setting and personalized hair draping.',
      img: '/Bridal Couture.jpg',
    },
    {
      name: 'Aroma Therapy Facial',
      price: '600',
      category: 'Signature Facials',
      description: 'Therapeutic essential oil massage and steam treatment for deep layer restoration and natural glow.',
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Layer Cut',
      price: '250',
      category: 'Signature Hair Cuts',
      description: 'Elegant face-framing structural layers styled with pro blowdry and deep hydration leave-in shield.',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section className="py-16 bg-[#FFF8F5] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 right-[-10%] w-96 h-96 bg-[#B76E79]/10 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div className="text-left space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-semibold block">
              Signature Treatments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
              Featured <span className="italic font-normal text-[#B76E79]">Rituals</span>
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="group flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#B76E79] hover:text-[#1A1414] transition-colors duration-200 cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-[#B76E79]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full text-left"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#1A1414]">
                <img
                  src={item.img}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest bg-[#1A1414]/80 text-[#F7CAC9] border border-[#B76E79]/30 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-lg font-semibold text-gray-900">{item.name}</h3>
                    <span className="font-mono text-sm font-bold text-[#B76E79]">₹{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B76E79]/10">
                  <button
                    onClick={() => onSelectService(item.name)}
                    className="w-full py-2.5 rounded-2xl bg-[#FFF8F5] border border-[#B76E79]/30 text-xs font-semibold uppercase tracking-wider text-[#B76E79] hover:bg-gradient-to-r hover:from-[#B76E79] hover:to-[#F7CAC9] hover:text-[#1A1414] hover:border-transparent transition-all duration-300 cursor-pointer text-center"
                  >
                    Quick Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonials({ onBookClick }: { onBookClick: () => void }) {
  const reviews = [
    {
      name: 'Jaweriya Khan',
      role: 'Bridal Makeup',
      quote: 'Aaliya ne mere special day par bohot hi beautiful Bridal Makeup kiya! Base bilkul skin-like and radiant tha, and dupatta draping was absolutely perfect.',
      stars: 5,
    },
    {
      name: 'Anam Shaikh',
      role: 'Body Spa',
      quote: 'Unka Full Body Spa session was pure bliss. Purani thakan bilkul door ho gayi, and the hygiene standards are top-notch. Highly relaxing experience!',
      stars: 5,
    },
    {
      name: 'Laiba Kausar',
      role: 'Hair Spa',
      quote: 'Hair Spa ke baad mere dry hairs soft aur smooth ho gaye hain. Signature treatment se hair fall control ho gaya. Must try at AR Parlour!',
      stars: 5,
    },
    {
      name: 'Sakshi Yadav',
      role: 'Facial',
      quote: 'Aroma Therapy Facial treatment se skin instant soft aur glowy ho gayi. Aaliya unke detailed evaluation se best suited products use karti hain.',
      stars: 5,
    },
    {
      name: 'Leena Datta',
      role: 'Manicure & Pedicure',
      quote: 'Very professional and clean manicure & pedicure service. Cozy ambiance and gentle massage and care are excellent. I highly recommend it!',
      stars: 5,
    },
  ];

  return (
    <section className="py-16 bg-[#1A1414] text-[#FCEBE6] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-[-10%] w-96 h-96 rounded-full bg-[#B76E79]/15 blur-[100px]" />
        <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 rounded-full bg-[#F7CAC9]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#F7CAC9] font-semibold block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white">
            What Our <span className="italic font-normal text-[#F7CAC9]">Guests Say</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#B76E79]/40 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(rev.stars)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-[#F7CAC9] text-[#F7CAC9]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#FCEBE6]/80 leading-relaxed font-light italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">{rev.name}</h4>
                  <p className="text-[10px] text-[#FCEBE6]/40 uppercase tracking-wider">{rev.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-[#1A1414] font-bold text-xs flex items-center justify-center">
                  {rev.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Premium CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#B76E79]/10 to-[#F7CAC9]/5 border border-[#B76E79]/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-light text-white">Ready for your custom transformation?</h3>
            <p className="text-xs text-[#FCEBE6]/60 font-light max-w-lg">
              Book a personalized appointment with expert Aaliya Shaikh today. Receive instant confirmation & priority support on WhatsApp.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-xs font-semibold uppercase tracking-widest text-[#1A1414] shadow-md hover:shadow-2xl transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 cursor-pointer"
          >
            Reserve Slot Now
          </button>
        </div>
      </div>
    </section>
  );
}

export function HomeLocation({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <section className="py-16 bg-[#FFF8F5] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Quick Info */}
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-semibold block">
                Find Our Sanctuary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
                Location & <span className="italic font-normal text-[#B76E79]">Timings</span>
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-md">
              Located in Jamil Colony, Amravati, our serene beauty studio offers perfect privacy, premium comfort, and absolute luxury care for both daily grooming and bridal requirements.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#B76E79]/20 flex items-center justify-center text-[#B76E79] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium">Address</h4>
                  <p className="text-xs sm:text-sm text-gray-900 font-medium">Jamil Colony, Amravati, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#B76E79]/20 flex items-center justify-center text-[#B76E79] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium">Studio Hours</h4>
                  <p className="text-xs sm:text-sm text-gray-900 font-medium">Mon - Sun: 11:00 AM - 08:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#B76E79]/20 flex items-center justify-center text-[#B76E79] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium">Phone / WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-gray-900 font-medium">+91 9518973092</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#B76E79] hover:text-[#1A1414] transition-colors cursor-pointer"
              >
                <span>Full Directions & Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="relative group rounded-3xl overflow-hidden border border-[#B76E79]/20 shadow-lg aspect-[16/10] bg-[#1A1414]">
            <iframe
              title="AR Beauty Parlour Location Map"
              src="https://maps.google.com/maps?q=20.9432206,77.7419456(AR%20Beauty%20Parlour)&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=20.9432206,77.7419456"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 bg-[#1A1414]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-[#FCEBE6] backdrop-blur-[1px]"
            >
              Get Directions ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
