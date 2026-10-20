import React from 'react';
import { Phone, Calendar, Clock, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';
import { clinicImages } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#FBFBFA] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Tagline */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
              <span>Dr. Anthony F. Oswick, D.M.D.</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Dr. Maria A. Kashlak, D.M.D.</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Orlando, FL (Est. 1987)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-display font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              Immediate Emergency Dental Care in Orlando, FL
            </h1>

            {/* Value Proposition Prose */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Don’t suffer through severe tooth pain, a dental abscess, or a broken crown. Our experienced doctors provide prompt, compassionate emergency treatment, root canals, and tooth restorations with immediate same-day relief for Central Florida residents and Disney / Universal vacationers.
            </p>

            {/* Quick trust checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Same-day pain cessation & local anesthesia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>10–12 minutes from Disney & Universal Resorts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Gentle, anxiety-free chairside protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>PPO insurance accepted & CareCredit financing</span>
              </div>
            </div>

            {/* CTA Action Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm tracking-wide shadow-lg shadow-teal-900/10 transition-all transform active:scale-[0.99] whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Line: (407) 876-0290</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 shadow-sm transition-colors whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-slate-600" />
                <span>Request Same-Day Visit</span>
              </button>
            </div>

            {/* Real address reminder */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>6068 S Apopka-Vineland Rd, Orlando, FL 32819 · Free patient parking on site</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
              <img
                src={clinicImages.hero}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = clinicImages.fallbackHero;
                }}
                alt="Florida Emergency Dental Care modern treatment suite in Orlando"
                className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Verified Clinical Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-teal-400">Board Certified In Florida</div>
                    <div className="text-sm font-bold text-white">Serving Orlando Since 1987</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400">Walk-Ins & Calls</div>
                  <div className="text-xs font-bold text-emerald-400">24/7 Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Trust Strip below hero */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tabular-nums">24 / 7</div>
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide">Emergency Availability</div>
            <p className="text-xs text-slate-500">Live doctor on-call triage for acute conditions</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tabular-nums">37+ Years</div>
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide">Orlando Practice</div>
            <p className="text-xs text-slate-500">Established in 1987 by Dr. Anthony Oswick</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tabular-nums">10–12 Min</div>
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide">From Disney & Universal</div>
            <p className="text-xs text-slate-500">Fast access from all Central Florida theme parks</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tabular-nums">Same-Day</div>
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide">Relief & Restorations</div>
            <p className="text-xs text-slate-500">Immediate local anesthesia & tooth preservation</p>
          </div>
        </div>
      </div>
    </section>
  );
};
