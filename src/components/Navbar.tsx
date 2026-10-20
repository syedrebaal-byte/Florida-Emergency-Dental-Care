import React, { useState } from 'react';
import { Phone, Menu, X, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        {/* Top Emergency Dispatch Bar */}
        <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400"></span>
              <span className="font-medium text-slate-200">24/7 Orlando Emergency Dental Availability</span>
              <span className="hidden md:inline text-slate-500">·</span>
              <span className="hidden md:inline text-slate-400">Serving Dr. Phillips, Windermere, & Theme Parks</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="hidden sm:inline">Urgent Direct Line:</span>
              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="font-mono font-bold text-teal-400 hover:text-teal-300 transition-colors"
              >
                (407) 876-0290
              </a>
            </div>
          </div>
        </div>

        {/* 3-Zone Top Bar Contract */}
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-display font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-teal-800 transition-colors flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              FD
            </div>
            <span>Florida Emergency Dental</span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Emergency Services
            </a>
            <a href="#triage" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Pain Triage
            </a>
            <a href="#doctors" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Our Doctors
            </a>
            <a href="#tourists" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Disney & Tourists
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Contact & Hours
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-teal-200" />
              <span>Book Urgent Visit</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.cleanPhone}`}
              className="inline-flex sm:hidden items-center justify-center w-9 h-9 rounded-lg bg-teal-700 text-white shadow-sm"
              aria-label="Call Emergency Dentist"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Emergency Services
              </a>
              <a
                href="#triage"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Pain Triage Tool
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Meet Dr. Oswick & Dr. Kashlak
              </a>
              <a
                href="#tourists"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Disney & Theme Park Guests
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Patient Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Location & Office Hours
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-lg bg-teal-700 text-white font-semibold text-xs text-center shadow-sm"
              >
                Request Urgent Appointment
              </button>
              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="w-full py-2.5 rounded-lg bg-slate-900 text-teal-400 font-semibold text-xs text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (407) 876-0290 Now</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
