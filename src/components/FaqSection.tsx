import React, { useState } from 'react';
import { FAQS } from '../data/dentalData';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const categories = ['All', 'Emergency Protocol', 'Insurance & Fees', 'Location & Hours', 'Tourists & Travel'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-teal-800 font-semibold mb-2">
            Patient Support & Answers
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Have questions about emergency dental visits, same-day scheduling, insurance coverage, or our Orlando location? Everything you need to know is outlined below.
          </p>
        </div>

        {/* Interactive Category Filter Tabs (functional segmented buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-200/60 rounded-xl max-w-xl mx-auto mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-700' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have an urgent symptom not listed here?</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Our clinical coordinator is ready to answer questions and schedule your same-day evaluation.
              </p>
            </div>
          </div>
          <a
            href={`tel:${CLINIC_INFO.cleanPhone}`}
            className="px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call (407) 876-0290</span>
          </a>
        </div>
      </div>
    </section>
  );
};
