import React, { useState } from 'react';
import { PAIN_TRIAGE_CASES } from '../data/dentalData';
import { PainTriageCase } from '../types/dental';
import { ThreeDToothViewer } from './ThreeDToothViewer';
import { AlertCircle, Phone, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface PainTriageToolProps {
  onOpenBooking: (symptom?: string) => void;
}

export const PainTriageTool: React.FC<PainTriageToolProps> = ({ onOpenBooking }) => {
  const [activeCaseId, setActiveCaseId] = useState<string>(PAIN_TRIAGE_CASES[0].id);
  const activeCase: PainTriageCase = PAIN_TRIAGE_CASES.find((c) => c.id === activeCaseId) || PAIN_TRIAGE_CASES[0];

  return (
    <section id="triage" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-teal-400 font-semibold mb-2">
            Clinical Triage & First-Aid Protocol
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-4">
            Where Does It Hurt? Immediate Emergency Guidance
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Select your symptom below to see the biological cause, urgent first-aid steps you must take right now, and how our Orlando dentists provide immediate same-day pain cessation.
          </p>
        </div>

        {/* Two-column layout: Symptom List + Interactive 3D Anatomy & Care Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Symptom Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Select Your Current Symptom:
            </span>
            {PAIN_TRIAGE_CASES.map((item) => {
              const isSelected = item.id === activeCaseId;
              const isCritical = item.severity.includes('Critical');

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCaseId(item.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    isSelected
                      ? 'bg-slate-800 border-teal-500 shadow-lg shadow-teal-500/10 ring-1 ring-teal-500/50'
                      : 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.symptom}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-2">
                        <span className={isCritical ? 'text-rose-400 font-medium' : 'text-amber-400 font-medium'}>
                          {item.severity}
                        </span>
                        <span>·</span>
                        <span className="truncate">{item.possibleCause}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>
              );
            })}

            {/* Direct Call Outpost */}
            <div className="mt-6 p-5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Orlando On-Call Dental Desk</div>
                  <div className="text-lg font-bold text-white font-mono">{CLINIC_INFO.phone}</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Acute facial swelling, bleeding, or knocked-out teeth require immediate doctor evaluation. Our lines are monitored 24/7.
              </p>
              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-colors whitespace-nowrap"
              >
                <span>Call Emergency Line Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Model + Clinical Action Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* 3D Model Container */}
            <ThreeDToothViewer activeLayer={activeCase.anatomyFocus} />

            {/* Action Triage Details Card */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 md:p-8 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 block mb-1">
                    Probable Clinical Diagnosis
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{activeCase.possibleCause}</h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-slate-300 font-medium">Recommended: {activeCase.severity}</span>
                </div>
              </div>

              {/* First Aid Instructions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Immediate First-Aid (Right Now)</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    {activeCase.firstAidAction}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-teal-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    <span>How We Stop The Pain Today</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    {activeCase.whatWeDo}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span>Location: </span>
                  <strong className="text-slate-200">6068 S Apopka-Vineland Rd, Orlando, FL 32819</strong>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenBooking(activeCase.symptom)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-colors whitespace-nowrap shadow-md"
                  >
                    Request Same-Day Visit
                  </button>
                  <a
                    href={`tel:${CLINIC_INFO.cleanPhone}`}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors whitespace-nowrap text-center border border-slate-700"
                  >
                    Call (407) 876-0290
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
