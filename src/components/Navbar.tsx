/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Calendar } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.gallery'), id: 'gallery' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
        isScrolled || isMobileMenuOpen
          ? 'py-3 bg-[#1A1414]/95 backdrop-blur-md border-b border-[#B76E79]/20 shadow-lg'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Group with Language Switcher directly next to it */}
          <div className="flex items-center space-x-3 xs:space-x-4">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 sm:space-x-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#B76E79]/30 p-[2px] bg-white overflow-hidden shadow-md shadow-[#B76E79]/10 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={logoImg}
                  alt="AR Beauty Parlour Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col items-start leading-none text-left">
                <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wider text-[#FCEBE6] group-hover:text-[#F7CAC9] transition-colors duration-300">
                  AR BEAUTY
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#B76E79]">
                  Parlour
                </span>
              </div>
            </button>

            {/* Premium Language Toggler right next to brand logo */}
            <div className="flex items-center bg-[#1A1414]/40 border border-[#B76E79]/20 p-[1.5px] rounded-full text-[9px] sm:text-[10px] font-sans tracking-widest font-bold shadow-inner">
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-[#1A1414]'
                    : 'text-[#FCEBE6]/60 hover:text-[#FCEBE6]'
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'hi'
                    ? 'bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-[#1A1414]'
                    : 'text-[#FCEBE6]/60 hover:text-[#FCEBE6]'
                }`}
              >
                HIN
              </button>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-sans text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-[#F7CAC9] font-medium'
                    : 'text-[#FCEBE6]/70 hover:text-[#FCEBE6]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#B76E79] to-[#F7CAC9]" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('booking')}
              className="flex items-center space-x-2 px-5 py-2 rounded-full border border-[#B76E79] text-xs uppercase tracking-widest text-[#FCEBE6] bg-transparent hover:bg-gradient-to-r hover:from-[#B76E79] hover:to-[#F7CAC9] hover:text-[#1A1414] hover:border-transparent hover:shadow-[0_0_15px_rgba(183,110,121,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t('nav.bookNow')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#FCEBE6] hover:text-[#F7CAC9] focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute inset-x-0 top-[100%] bg-[#1A1414]/98 backdrop-blur-md border-t border-b border-[#B76E79]/20 transition-all duration-200 ease-out z-40 overflow-hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 h-auto py-4 visible pointer-events-auto shadow-2xl' : 'opacity-0 -translate-y-2 h-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 shadow-xl flex flex-col justify-start items-stretch">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full py-3 text-left font-serif text-lg tracking-wide border-b border-[#B76E79]/5 transition-colors duration-300 ${
                activeSection === item.id ? 'text-[#F7CAC9] pl-2 font-medium' : 'text-[#FCEBE6]/80 hover:text-[#F7CAC9]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-[#B76E79] to-[#F7CAC9] text-xs font-semibold uppercase tracking-widest text-[#1A1414] hover:shadow-lg transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav.bookAppointment')}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

