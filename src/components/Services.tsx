/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { t } = useLanguage();

  // Filter groups
  const filterTabs = [
    { label: t('services.filterAll'), id: 'all' },
    { label: t('services.filterSkin'), id: 'skin' },
    { label: t('services.filterHair'), id: 'hair' },
    { label: t('services.filterBridal'), id: 'bridal' },
  ];

  // Map database categories to tab groups
  const isCategoryInTab = (categoryId: string, tabId: string) => {
    if (tabId === 'all') return true;
    if (tabId === 'skin') {
      return ['brow-lip', 'waxing', 'bleach-glow', 'signature-facials', 'deep-cleanups', 'body-treatments'].includes(categoryId);
    }
    if (tabId === 'hair') {
      return ['hair-cuts', 'hair-therapy', 'hair-colour'].includes(categoryId);
    }
    if (tabId === 'bridal') {
      return ['bridal-makeup'].includes(categoryId);
    }
    return false;
  };

  const filteredCategories = servicesData.filter((cat) =>
    isCategoryInTab(cat.id, selectedCategory)
  );

  return (
    <section
      id="services"
      className="py-12 sm:py-16 bg-[#FFF8F5] text-[#1A1414] relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <div className="absolute top-1/3 left-[-5%] w-96 h-96 rounded-full bg-[#B76E79]/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-[-5%] w-[400px] h-[400px] rounded-full bg-[#F7CAC9]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-semibold block">
            {t('services.filterAll') === 'All' || t('services.filterAll') === 'सभी' ? 'The Rate Card' : 'द रेट कार्ड'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
            {t('services.title')}
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-lg mx-auto">
            {t('services.subtext')}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-start sm:justify-center mb-10 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex space-x-2 bg-[#1A1414]/5 p-1.5 rounded-full border border-[#B76E79]/10 mx-auto sm:mx-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#1A1414] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">
          {filteredCategories.map((category) => {
            const catTitle = t(`cat.${category.id}`) || category.title;
            const catTagline = t(`tag.${category.id}`) || category.tagline;

            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-3xl border border-[#B76E79]/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col h-full text-left"
              >
                {/* Ribbon-style luxury colored header */}
                <div className="bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] px-5 sm:px-6 py-4 sm:py-5 relative">
                  {/* Subtle shine overlay */}
                  <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base sm:text-lg lg:text-xl font-medium tracking-wide text-[#1A1414]">
                      {catTitle}
                    </h3>
                    <div className="p-1.5 rounded-full bg-white/20 border border-white/30">
                      <Sparkles className="w-3.5 h-3.5 text-[#1A1414]" />
                    </div>
                  </div>
                </div>

                {/* Tagline under category title */}
                <div className="bg-[#FFF8F5] px-5 sm:px-6 py-2 border-b border-[#B76E79]/5">
                  <p className="font-serif italic text-xs text-[#B76E79] font-light">
                    "{catTagline}"
                  </p>
                </div>

                {/* Service List Items */}
                <div className="p-5 sm:p-6 lg:p-8 flex-grow space-y-4 sm:space-y-5">
                  {category.services.map((item) => {
                    const svcName = t(`svc.${item.name}`) || item.name;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between space-x-3 group/item border-b border-dashed border-[#B76E79]/5 pb-3 sm:pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex-grow min-w-0">
                          <span className="font-sans text-xs sm:text-sm md:text-base font-medium text-gray-800 group-hover/item:text-[#B76E79] transition-colors duration-200 block leading-snug break-words">
                            {svcName}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                          {/* Price indicator with instant rendering */}
                          <span className="font-mono text-xs sm:text-sm font-semibold text-gray-900 bg-[#FFF8F5] px-2 sm:px-3 py-1 rounded-lg border border-[#B76E79]/10 shadow-sm whitespace-nowrap">
                            ₹{item.price}
                            {item.isStartingPrice && <span className="text-[10px] text-gray-500 ml-0.5">+</span>}
                          </span>

                          {/* Select/Book Icon button with comfortable touch target */}
                          <button
                            onClick={() => onSelectService(item.name)}
                            className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-gradient-to-r hover:from-[#B76E79] hover:to-[#F7CAC9] hover:text-[#1A1414] text-[#B76E79] border border-[#B76E79]/20 hover:border-transparent transition-all duration-300 shadow-sm hover:scale-110 flex items-center justify-center cursor-pointer flex-shrink-0"
                            title={`Select ${svcName}`}
                          >
                            <ChevronRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Note / Subtext for category */}
                {category.note && (
                  <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 text-[11px] text-gray-500 italic text-left">
                    * {t('services.filterAll') === 'All' || t('services.filterAll') === 'सभी' ? 'Note:' : 'नोट:'} {category.note}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic call to action */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 mb-4 animate-pulse">
            {t('services.selectHelp')}
          </p>
          <div className="inline-flex h-[1px] w-12 bg-[#B76E79]/30" />
        </div>
      </div>
    </section>
  );
}

