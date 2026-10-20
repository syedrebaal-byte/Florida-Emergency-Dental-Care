import React from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand & Doctor Credentials Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                FD
              </div>
              <span>Florida Emergency Dental Care</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Established in Orlando in 1987 by Dr. Anthony F. Oswick, D.M.D. & Dr. Maria A. Kashlak, D.M.D. Providing compassionate 24/7 emergency pain relief, root canal therapy, tooth extractions, and restorative dentistry.
            </p>
            <div className="flex items-center gap-2 text-teal-400 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Florida State Dental Board Licensed · ADA Member</span>
            </div>
          </div>

          {/* Emergency Procedures Navigation */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Emergency Procedures
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Severe Toothache Relief</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Same-Day Root Canals</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Extractions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Broken & Knocked-Out Teeth</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lost Crown & Bridge Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dental Abscess Drainage</a></li>
            </ul>
          </div>

          {/* Clinic & Tourist Guides */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Patient Information
            </div>
            <ul className="space-y-2">
              <li><a href="#triage" className="hover:text-white transition-colors">Interactive Pain Triage</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Dr. Anthony Oswick Bio</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Dr. Maria Kashlak Bio</a></li>
              <li><a href="#tourists" className="hover:text-white transition-colors">Disney & Theme Park Care</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Verified Patient Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Urgent Contact & Address */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              Practice Address
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address}<br />
                  {CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.cleanPhone}`} className="font-mono text-teal-300 hover:text-white font-bold">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Located near Dr. Phillips / Windermere, 10 minutes from Universal & Disney.
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
            <strong>Medical & Emergency Disclaimer:</strong> The clinical information and triage suggestions provided on this website are intended solely for educational purposes and do not substitute for in-person medical evaluation, dental examination, or professional clinical diagnosis. If you are suffering from acute trauma with breathing difficulties, swelling closing the airway, high fever with altered consciousness, or uncontrollable hemorrhage, please call 911 or go directly to the nearest hospital emergency department immediately.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] pt-4 border-t border-slate-900">
            <div>
              © 1987–{new Date().getFullYear()} {CLINIC_INFO.name} ({CLINIC_INFO.legalName}). All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-200 transition-colors">HIPAA Compliance</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-200 transition-colors">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
