/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Maximize2, Sparkles, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface GalleryProps {
  onBookClick?: () => void;
}

export default function Gallery({ onBookClick }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { t } = useLanguage();

  const categories = ['All', 'Bridal Couture', 'Hair Styling', 'Skin Rituals', 'Nails & Spa'];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      url: '/Elegant bridal.png',
      title: 'Flawless Bridal Eye Makeup & Base',
      category: 'Bridal Couture',
    },
    {
      id: 'g-2',
      url: '/Traditional bridal.png',
      title: 'Bridal Lehenga Draping & Styling',
      category: 'Bridal Couture',
    },
    {
      id: 'g-3',
      url: '/Glamorous beauty.png',
      title: 'Glossy Silk-Smoothing Hair Transformation',
      category: 'Hair Styling',
    },
    {
      id: 'g-4',
      url: '/Bridal elegance.png',
      title: 'Intricate Wedding Bun with Fresh Flowers',
      category: 'Hair Styling',
    },
    {
      id: 'g-5',
      url: '/Relaxing facial.png',
      title: 'Deep Hydration Aroma Therapy Facial',
      category: 'Skin Rituals',
    },
    {
      id: 'g-6',
      url: '/Facial roller.png',
      title: 'Premium Jade-Roller Skin Infusion',
      category: 'Skin Rituals',
    },
    {
      id: 'g-7',
      url: '/Elegant hand.png',
      title: 'Precision Gel Polish & Shaping',
      category: 'Nails & Spa',
    },
    {
      id: 'g-8',
      url: '/Relaxing spa.png',
      title: 'Detox Rose-Petal Foot Spa & Scrub',
      category: 'Nails & Spa',
    },
    {
      id: 'g-9',
      url: '/Bridal mehndi.png',
      title: 'Exquisite Intricate Bridal Henna',
      category: 'Bridal Couture',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 bg-[#FFF8F5] text-[#1A1414] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-10 left-[-5%] w-96 h-96 rounded-full bg-[#F7CAC9]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-semibold block">
            {t('gallery.title')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
            {t('gallery.subtitle')}
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-lg mx-auto">
            {t('gallery.desc')}
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-[#1A1414] shadow-[0_4px_12px_rgba(183,110,121,0.15)] font-semibold'
                  : 'bg-white border border-[#B76E79]/10 text-[#1A1414]/70 hover:border-[#B76E79]/30 hover:text-[#1A1414]'
              }`}
            >
              {t(`gal.cat.${cat}`) || cat}
            </button>
          ))}
        </div>

        {/* Bento/Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const itemTitle = t(`gal.${item.id}`) || item.title;
            const itemCat = t(`gal.cat.${item.category}`) || item.category;

            return (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#B76E79]/10 bg-[#1A1414] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Overlay with subtle rose-gold/dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414]/90 via-[#1A1414]/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

                <img
                  src={item.url}
                  alt={itemTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Hover actions & content overlay */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-left">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#F7CAC9] font-semibold mb-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {itemCat}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-light text-white leading-snug">
                    {itemTitle}
                  </h3>
                  
                  {/* Maximize Icon */}
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#B76E79] hover:border-transparent cursor-pointer"
                    title="Expand View"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Elegant Modal Lightbox for Image Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-[#1A1414]/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-150"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-[#B76E79]/20 bg-[#1A1414] animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-[#B76E79] hover:border-transparent hover:text-white transition-all duration-300 z-30 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox content */}
              <div className="flex flex-col md:flex-row h-full md:max-h-[80vh]">
                {/* Photo Section */}
                <div className="flex-grow max-h-[50vh] md:max-h-[80vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.url}
                    alt={t(`gal.${selectedImage.id}`) || selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details Sidebar */}
                <div className="p-6 md:p-8 md:w-80 bg-[#1A1414] text-[#FCEBE6] border-t md:border-t-0 md:border-l border-[#B76E79]/10 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full border border-[#B76E79]/30 bg-[#B76E79]/10">
                      <Sparkles className="w-3 h-3 text-[#F7CAC9]" />
                      <span className="text-[9px] uppercase tracking-wider text-[#F7CAC9]">
                        {t(`gal.cat.${selectedImage.category}`) || selectedImage.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-light leading-tight text-white">
                      {t(`gal.${selectedImage.id}`) || selectedImage.title}
                    </h3>
                    <div className="h-[1px] w-12 bg-gradient-to-r from-[#B76E79] to-[#F7CAC9]" />
                    <p className="text-xs text-[#FCEBE6]/60 leading-relaxed font-light">
                      {t('about.desc1')}
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => {
                        setSelectedImage(null);
                        if (onBookClick) onBookClick();
                      }}
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-xs font-semibold uppercase tracking-widest text-[#1A1414] shadow-md hover:shadow-xl hover:shadow-[#B76E79]/20 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                      {t('nav.bookNow')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

