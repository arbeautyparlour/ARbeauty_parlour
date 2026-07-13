/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import logoImg from '../assets/logo.jpg';

export default function ThreeCanvas() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Soft warm ambient glow behind the logo */}
      <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#B76E79]/25 to-[#F7CAC9]/20 rounded-full blur-[80px] animate-pulse duration-3000 pointer-events-none" />
      
      {/* Lightweight, high-performance luxury logo container */}
      <div className="relative w-72 h-72 sm:w-[350px] sm:h-[350px] flex items-center justify-center border border-[#B76E79]/15 rounded-full p-6 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[3px] shadow-2xl">
        {/* Orbital rings */}
        <div className="absolute inset-2 border border-dashed border-[#B76E79]/20 rounded-full animate-spin duration-30000" />
        <div className="absolute inset-4 border border-[#B76E79]/10 rounded-full" />
        
        {/* The beautiful luxurious physical logo image centered with premium framing */}
        <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden border-2 border-[#B76E79]/30 p-2 bg-white shadow-[0_0_35px_rgba(183,110,121,0.25)] hover:scale-[1.03] hover:border-[#F7CAC9] transition-all duration-500">
          <img
            src={logoImg}
            alt="AR Beauty Parlour Premium Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Floating luxury sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/6 left-1/4 w-2 h-2 bg-white rounded-full animate-ping duration-1500" />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#F7CAC9] rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
