import React, { useState } from 'react';
import { SERVICES } from '../data/dentalData';
import { DentalService } from '../types/dental';
import { Zap, Activity, ShieldAlert, Sparkles, HeartPulse, Compass, ArrowRight, X, Check, Clock } from 'lucide-react';
import { clinicImages } from '../assets/images';

interface ServicesBentoProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-teal-700" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-700" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-teal-700" />;
      case 'Compass': return <Compass className="w-5 h-5 text-teal-700" />;
      default: return <Activity className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-teal-800 font-semibold mb-2">
            Clinical Services & Urgent Procedures
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Comprehensive Emergency & Restorative Dentistry
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            From stopping excruciating midnight pulpitis to recementing lost crowns and handling traumatic dental injuries, our practice is equipped with modern digital radiography and precision dental technology for prompt relief.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 5;
            const number = `0${index + 1}`;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-7 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-teal-50/30' : ''
                }`}
              >
                <div>
                  {/* Card Header: Editorial Index + Icon + Urgency */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-slate-400">{number}.</span>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100/80 flex items-center justify-center">
                        {getServiceIcon(service.iconName)}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-teal-700" />
                      <span className="font-medium text-teal-800">{service.urgency}</span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Highlight symptoms preview */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                    {service.symptoms.slice(0, 2).map((symptom, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-900 flex items-center gap-1 transition-colors"
                  >
                    <span>View Clinical Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-teal-800 text-white font-medium text-xs transition-colors whitespace-nowrap"
                  >
                    Book Treatment
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting imagery showcase banner */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 text-white grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
              Gentle Chairside Protocol
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Have Dental Anxiety? We Provide Calm, Compassionate Comfort.
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
              Dental pain is stressful enough without feeling nervous in the treatment chair. Dr. Anthony Oswick and Dr. Maria Kashlak prioritize your physical and emotional comfort with gentle anesthesia, step-by-step explanations, noise-cancelling headphones, and ceiling views.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-teal-400" />
                No Judgment Care
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-teal-400" />
                Pain-Free Local Anesthesia
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-teal-400" />
                Nitrous Oxide Available
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src={clinicImages.operatory}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = clinicImages.fallbackOperatory;
              }}
              alt="Serene Orlando dental operatory suite"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Clinical Protocol Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[11px] font-semibold text-teal-800 uppercase tracking-wider">
                  Clinical Procedure Overview
                </span>
                <h3 className="text-xl font-bold text-slate-900">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600">
              <div>
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">About The Treatment</h4>
                <p className="leading-relaxed">{selectedService.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Common Indicative Symptoms</h4>
                <ul className="space-y-1.5">
                  {selectedService.symptoms.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">What You Can Expect During Your Visit</h4>
                <ol className="space-y-1.5">
                  {selectedService.procedureSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-xs font-bold text-teal-800 shrink-0 mt-0.5">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Home Recovery & Post-Op Guidelines</h4>
                <ul className="space-y-1.5 text-xs text-slate-500">
                  {selectedService.recoveryTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-700 font-bold">·</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500">Questions? Call (407) 876-0290</span>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenBooking(title);
                }}
                className="px-5 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                Request Appointment for This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
