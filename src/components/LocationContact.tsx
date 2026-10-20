import React from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { clinicImages } from '../assets/images';

interface LocationContactProps {
  onOpenBooking: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenBooking }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CLINIC_INFO.name} ${CLINIC_INFO.address} ${CLINIC_INFO.city} ${CLINIC_INFO.state} ${CLINIC_INFO.zip}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Clinic Contact & Hours Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-teal-800 font-semibold mb-2">
                Orlando Practice Location & Access
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 mb-4">
                Visit Our Central Florida Clinic
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Conveniently situated on South Apopka-Vineland Road between Sand Lake Road and Conroy-Windermere Road. Dedicated private surface parking is located steps from our lobby entrance.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone card */}
              <div className="p-5 rounded-xl border border-slate-200/90 bg-[#FBFBFA]">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  24/7 Urgent Telephone
                </div>
                <a
                  href={`tel:${CLINIC_INFO.cleanPhone}`}
                  className="text-lg font-bold text-slate-900 font-mono hover:text-teal-800 transition-colors block mt-1"
                >
                  {CLINIC_INFO.phone}
                </a>
                <div className="text-xs text-emerald-700 font-medium mt-1">Live doctor on-call triage</div>
              </div>

              {/* Hours card */}
              <div className="p-5 rounded-xl border border-slate-200/90 bg-[#FBFBFA]">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Emergency Scheduling
                </div>
                <div className="text-base font-bold text-slate-900 mt-1">
                  24 Hours / 7 Days
                </div>
                <div className="text-xs text-slate-500 mt-1">Same-day appointments & walk-ins</div>
              </div>

              {/* Physical Address card */}
              <div className="p-5 rounded-xl border border-slate-200/90 bg-[#FBFBFA] sm:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-3">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Physical Practice Address
                    </div>
                    <div className="text-base font-bold text-slate-900 mt-1">
                      {CLINIC_INFO.address}
                    </div>
                    <div className="text-sm text-slate-600">
                      {CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip} (Dr. Phillips / Windermere area)
                    </div>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-medium text-xs whitespace-nowrap shadow-sm transition-colors mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Proximity Checklist */}
            <div className="p-5 rounded-xl border border-teal-100 bg-teal-50/50">
              <div className="text-xs font-semibold text-teal-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Central Florida Geographic Proximity</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div>· Universal Orlando: <strong>10 minutes</strong></div>
                <div>· Disney Springs: <strong>12 minutes</strong></div>
                <div>· Windermere / Bay Hill: <strong>4 minutes</strong></div>
                <div>· SeaWorld Orlando: <strong>14 minutes</strong></div>
                <div>· Convention Center: <strong>12 minutes</strong></div>
                <div>· Orlando Airport (MCO): <strong>22 minutes</strong></div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-teal-800 text-white font-semibold text-sm transition-colors shadow-md text-center"
              >
                Schedule Same-Day Appointment
              </button>
            </div>
          </div>

          {/* Right Column: Visual Map / Facility Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xl bg-slate-50">
              {/* Map header preview */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs text-teal-400 font-semibold">Orlando Emergency Dental Hub</div>
                  <div className="text-sm font-bold text-white">6068 S Apopka-Vineland Rd</div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-300 hover:text-white flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Interactive Stylized Simulated Map Container */}
              <div className="relative w-full h-[320px] bg-slate-100 flex items-center justify-center overflow-hidden">
                {/* Visual architectural clinic detail */}
                <img
                  src={clinicImages.procedure}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = clinicImages.fallbackProcedure;
                  }}
                  alt="Precision dental laboratory and restorative facility in Orlando"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />

                {/* Central pin banner */}
                <div className="relative z-10 text-center p-6 max-w-sm rounded-xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg ring-4 ring-teal-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Florida Emergency Dental Care</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    6068 S Apopka-Vineland Rd, Orlando, FL 32819
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs transition-colors"
                    >
                      Navigate in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Footer info */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Free Surface Parking</span>
                <span>·</span>
                <span>Wheelchair Accessible</span>
                <span>·</span>
                <span>Ground-Floor Entry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
