import React from 'react';
import { DOCTORS } from '../data/dentalData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Stethoscope } from 'lucide-react';
import { clinicImages } from '../assets/images';

export const DoctorBio: React.FC = () => {
  return (
    <section id="doctors" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-teal-800 font-semibold mb-2">
            Verified Clinical Leadership
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Meet Dr. Anthony Oswick & Dr. Maria Kashlak
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            With over 37 years of clinical excellence in Orlando, our dentists combine elite Ivy-league and state-of-the-art training with deep personal empathy. You are in safe, gentle, and highly experienced hands.
          </p>
        </div>

        {/* Lead Doctor Feature: Dr. Anthony F. Oswick, D.M.D. */}
        <div className="rounded-2xl border border-slate-200/90 bg-[#FBFBFA] p-8 md:p-12 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={clinicImages.doctor}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = clinicImages.fallbackDoctor;
                  }}
                  alt="Dr. Anthony F. Oswick D.M.D. Orlando Emergency Dentist"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-white text-xs font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Licensed in FL & 12 US Jurisdictions</span>
                </div>
              </div>
            </div>

            {/* Doctor Credentials & Bio */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">
                  Senior Emergency Clinician & Practice Founder
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Dr. Anthony F. Oswick, D.M.D.</h3>
                <div className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-teal-700" />
                  <span>Temple University School of Dentistry (Class of 1985)</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dr. Anthony Oswick has dedicated nearly four decades to advancing gentle, high-precision emergency dentistry in Central Florida. After receiving his D.M.D. degree from the prestigious Temple University School of Dentistry in 1985, Dr. Oswick established his Orlando practice in 1987.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Board-certified in Florida and twelve additional state jurisdictions, Dr. Oswick is renowned among patients and medical peers for rapid emergency pain intervention, atraumatic extractions, and complex implant reconstructions. His patient-first philosophy ensures you are never rushed or subjected to unnecessary treatment.
              </p>

              {/* Verified Accreditations */}
              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                  Verified Professional Credentials
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Practicing in Orlando since 1987</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>American Dental Association (ADA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Florida Dental Association (FDA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Advanced Cardiac Life Support (ACLS)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Doctor & Practice Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dr. Maria Kashlak card */}
          <div className="rounded-2xl border border-slate-200/90 p-8 bg-white shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">Partner Clinician</div>
                  <h4 className="text-xl font-bold text-slate-900">Dr. Maria A. Kashlak, D.M.D.</h4>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dr. Maria Kashlak brings specialized expertise in urgent endodontics (root canal therapy), aesthetic tooth restorations, and dental anxiety management. She provides compassionate care that puts patients at ease even during high-stress dental emergencies.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Licensed Florida Doctor of Dental Medicine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Central Florida District Dental Association</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Specialties: Same-day pain relief, aesthetic bonding, gentle endodontics
            </div>
          </div>

          {/* Clinical Commitment Card */}
          <div className="rounded-2xl border border-slate-200/90 p-8 bg-white shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-800">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Practice Commitment</div>
                  <h4 className="text-xl font-bold text-slate-900">Our Patient-First Promise</h4>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                When you visit during an emergency, our doctors will listen carefully, take only necessary diagnostics, explain all treatment options with transparent upfront fees, and prioritize pain relief before any procedure is started.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Transparent fee discussions before treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Never pressured into unnecessary treatments</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Immediate emergency care for adults, seniors, teenagers, and families
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
