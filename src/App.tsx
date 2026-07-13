/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import { HomeFeatures, HomeFeaturedServices, HomeTestimonials, HomeLocation } from './components/HomeSections';
import logoImg from './assets/logo.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    // Instant scroll to top when changing "pages" for instant feel
    window.scrollTo({ top: 0 });
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setActiveSection('booking');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#1A1414] selection:bg-[#B76E79]/20 selection:text-[#B76E79] flex flex-col justify-between">
      <div>
        {/* Dynamic sticky Navigation Bar */}
        <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

        {/* Render each "page" as separate, decoupled views */}
        <main className="transition-all duration-150">
          {activeSection === 'home' && (
            <div className="flex flex-col">
              <Hero
                onBookClick={() => handleNavigate('booking')}
                onExploreClick={() => handleNavigate('services')}
              />
              <HomeFeatures />
              <HomeFeaturedServices
                onSelectService={handleSelectService}
                onViewAll={() => handleNavigate('services')}
              />
              <HomeTestimonials onBookClick={() => handleNavigate('booking')} />
              <HomeLocation onNavigate={handleNavigate} />
            </div>
          )}

          {activeSection === 'about' && (
            <div className="pt-24 pb-12">
              <About />
            </div>
          )}

          {activeSection === 'services' && (
            <div className="pt-24 pb-12">
              <Services onSelectService={handleSelectService} />
            </div>
          )}

          {activeSection === 'gallery' && (
            <div className="pt-24 pb-12">
              <Gallery onBookClick={() => handleNavigate('booking')} />
            </div>
          )}

          {activeSection === 'booking' && (
            <div className="pt-24 pb-12">
              <Booking
                selectedService={selectedService}
                onClearSelectedService={() => setSelectedService('')}
              />
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="pt-24">
              <Contact onNavigate={handleNavigate} />
            </div>
          )}
        </main>
      </div>

      {/* Persistent mini-footer for copyright & fast links across separate tabs */}
      <footer className="py-8 bg-[#1A1414] text-center text-xs text-[#FCEBE6]/40 border-t border-[#B76E79]/10 flex flex-col items-center justify-center space-y-3">
        <div className="w-10 h-10 rounded-full border border-[#B76E79]/20 p-[1.5px] bg-white overflow-hidden shadow-lg shadow-[#B76E79]/5">
          <img
            src={logoImg}
            alt="AR Beauty Parlour Logo Badge"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p>© {new Date().getFullYear()} AR Beauty Parlour. Managed by Aaliya Shaikh. All rights reserved.</p>
      </footer>
    </div>
  );
}
