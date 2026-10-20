import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Emergency actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${CLINIC_INFO.cleanPhone}`}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs tracking-wide shadow-md active:scale-95 transition-all whitespace-nowrap"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Call 24/7 (407) 876-0290</span>
        </a>

        {/* Urgent Request Button */}
        <button
          onClick={onOpenBooking}
          className="min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs border border-slate-700 active:scale-95 transition-all whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0 text-teal-400" />
          <span>Book Visit</span>
        </button>
      </div>
    </aside>
  );
};
