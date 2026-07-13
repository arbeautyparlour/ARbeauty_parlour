/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onBookClick, onExploreClick }: HeroProps) {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#1A1414] text-[#FCEBE6] pt-16 overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#B76E79]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-[#F7CAC9]/10 rounded-full blur-[120px]" />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FCEBE6 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Typography Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#B76E79]/30 bg-[#B76E79]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#F7CAC9] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F7CAC9] font-medium">
                {t('hero.luxuryExperience')}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
                {language === 'en' ? (
                  <>Where <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] to-[#F7CAC9]">Elegance</span> <br /> Meets <span className="font-normal">True Artistry</span></>
                ) : (
                  <>जहाँ <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] to-[#F7CAC9]">सौंदर्य</span> <br /> कलात्मकता से <span className="font-normal">मिलता है</span></>
                )}
              </h1>

              {/* Gold hairline divider */}
              <div className="h-[1px] w-32 bg-gradient-to-r from-[#B76E79] to-[#F7CAC9]" />

              <p className="max-w-xl font-sans text-sm sm:text-base text-[#FCEBE6]/70 leading-relaxed font-light">
                {t('hero.subtext')}
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-xs font-semibold uppercase tracking-widest text-[#1A1414] hover:shadow-[0_0_25px_rgba(183,110,121,0.5)] transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>{t('hero.bookNow')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={onExploreClick}
                className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-[#B76E79]/40 text-xs font-semibold uppercase tracking-widest text-[#FCEBE6] hover:bg-white/5 hover:border-[#FCEBE6] transition-all duration-300 cursor-pointer"
              >
                <span>{t('hero.exploreServices')}</span>
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-6 sm:gap-8 border-t border-[#B76E79]/10 w-full">
              <div>
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#F7CAC9]">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-[#FCEBE6]/50 mt-1">{t('hero.premiumProducts')}</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#F7CAC9]">4+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#FCEBE6]/50 mt-1">{t('hero.yearsPractice')}</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#F7CAC9]">500+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#FCEBE6]/50 mt-1">{t('hero.happyGuests')}</p>
              </div>
            </div>
          </div>

          {/* Interactive Logo/Design Container */}
          <div className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[550px] w-full relative flex items-center justify-center">
            {/* Soft decorative glow underneath */}
            <div className="absolute w-72 h-72 rounded-full bg-[#B76E79]/10 blur-[80px] pointer-events-none" />
            <ThreeCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}

