/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, language } = useLanguage();

  const trustBadges = [
    {
      icon: Award,
      title: t('about.badge1Title'),
      description: t('about.badge1Desc'),
    },
    {
      icon: ShieldCheck,
      title: t('about.badge2Title'),
      description: t('about.badge2Desc'),
    },
    {
      icon: Heart,
      title: t('about.badge3Title'),
      description: t('about.badge3Desc'),
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-[#FFF8F5] text-[#1A1414] relative overflow-hidden"
    >
      {/* Abstract decorative shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-[-10%] w-96 h-96 rounded-full bg-[#F7CAC9]/30 blur-[90px]" />
        <div className="absolute bottom-1/4 left-[-10%] w-80 h-80 rounded-full bg-[#B76E79]/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column: Story & Intro */}
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-semibold block">
                {t('about.meetFounder')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
                {language === 'en' ? (
                  <>Aaliya Shaikh & <br /><span className="italic font-normal text-[#B76E79]">AR Beauty Parlour</span></>
                ) : (
                  <>आलिया शेख और <br /><span className="italic font-normal text-[#B76E79]">एआर ब्यूटी पार्लर</span></>
                )}
              </h2>
              <div className="h-[1px] w-24 bg-[#B76E79]/40" />
            </div>

            <div className="space-y-5 text-gray-700 font-light text-sm sm:text-base leading-relaxed">
              <p>
                {t('about.desc1')}
              </p>
              <p>
                {t('about.desc2')}
              </p>
              <p className="italic text-[#B76E79] font-serif font-medium">
                {t('about.quote')}
              </p>
            </div>

            {/* Address pill */}
            <div className="inline-flex items-center space-x-2.5 p-3 rounded-2xl bg-white border border-[#B76E79]/10 shadow-sm text-xs text-gray-700">
              <MapPin className="w-4 h-4 text-[#B76E79]" />
              <span>{t('about.addressVal')}</span>
            </div>
          </div>

          {/* Right Column: Visual Trust Grid */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group bg-[#1A1414]">
              {/* Overlay with rich rose gold gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414]/90 via-[#1A1414]/20 to-transparent z-10" />
              {/* High quality beauty treatment photo representation */}
              <img
                src="/parlour.jpeg"
                alt="AR Beauty Luxury Treatment"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#F7CAC9] font-semibold">{t('about.luxurySanctuary')}</span>
                <p className="font-serif text-lg text-white font-light mt-1">{t('about.qualityAmbiance')}</p>
              </div>
            </div>

            {/* Staggered Trust Badges */}
            <div className="grid grid-cols-1 gap-6">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex space-x-4 p-5 rounded-2xl bg-white border border-[#B76E79]/10 shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#FFF8F5] border border-[#B76E79]/20 flex items-center justify-center text-[#B76E79]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-gray-900">{badge.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed font-light">{badge.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

