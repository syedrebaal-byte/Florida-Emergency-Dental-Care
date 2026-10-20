import React from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { Compass, Car, FileText, CheckCircle2, Phone } from 'lucide-react';
import { clinicImages } from '../assets/images';

interface TouristCareProps {
  onOpenBooking: () => void;
}

export const TouristCare: React.FC<TouristCareProps> = ({ onOpenBooking }) => {
  return (
    <section id="tourists" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Exterior of Florida Practice */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={clinicImages.exterior}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = clinicImages.fallbackExterior;
                }}
                alt="Florida Emergency Dental Care Pavilion near Disney and Universal Orlando"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white">
                <div className="text-xs font-semibold text-teal-400 mb-1">Central Florida Location</div>
                <div className="text-sm font-bold">6068 S Apopka-Vineland Rd, Orlando, FL</div>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                  <span>Direct ride from Disney & Universal hotels</span>
                  <span>·</span>
                  <span className="text-teal-300">Free Parking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tourist Care Value Proposition */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs uppercase tracking-widest text-teal-800 font-semibold">
              Visiting Orlando on Vacation or Business?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900">
              Don’t Let Severe Tooth Pain Ruin Your Orlando Trip
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every week, our team treats visitors from around the globe who encounter unexpected toothaches, broken veneers, lost crowns, or pool accidents while enjoying Walt Disney World, Universal Orlando, or attending events at the Convention Center.
            </p>

            {/* Travel-Friendly Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mt-0.5 text-teal-800">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Minutes from All Major Orlando Attractions</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Just 10 minutes from Universal Studios, 12 minutes from Disney Springs and the Magic Kingdom area, and 4 minutes from Dr. Phillips / Windermere.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mt-0.5 text-teal-800">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Itemized Travel & Out-of-State Insurance Receipts</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We provide immediate digital invoices coded with standard ADA procedure numbers and digital X-rays so you can submit directly to your hometown dental insurer or travel policy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mt-0.5 text-teal-800">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Coordination with Your Hometown Dentist</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We stabilize your tooth and transfer high-definition digital radiography directly to your primary dentist back home for seamless follow-up care.
                  </p>
                </div>
              </div>
            </div>

            {/* Driving Time Chips */}
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Estimated Transit Times to Our Clinic:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {CLINIC_INFO.landmarks.slice(0, 4).map((l, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200/90 text-center">
                    <div className="font-bold text-slate-900 text-sm">{l.time}</div>
                    <div className="text-slate-500 text-[11px] truncate">{l.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs tracking-wide shadow-md transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Call Concierge Emergency Desk: (407) 876-0290</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors whitespace-nowrap"
              >
                Request Hotel / Same-Day Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
