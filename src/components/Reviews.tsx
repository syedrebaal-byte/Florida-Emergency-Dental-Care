import React from 'react';
import { PATIENT_REVIEWS } from '../data/dentalData';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-teal-800 font-semibold mb-2">
            Verified Patient Experiences
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Trusted by Generations of Orlando Families & Travelers
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            When sudden dental pain strikes, our patients appreciate being treated promptly with compassion, clinical skill, and zero judgment. Here is what real patients share about their emergency appointments.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-200/90 bg-[#FBFBFA] p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{review.author}</div>
                    <div className="text-xs text-slate-500">{review.location}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-teal-800 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                    <span>Verified</span>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-2">
                  <span>{review.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent clinical note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Reviews reflect genuine patient clinical experiences at our Orlando facility. Individual biological responses and procedural outcomes may vary based on dental diagnostic conditions.
        </div>
      </div>
    </section>
  );
};
