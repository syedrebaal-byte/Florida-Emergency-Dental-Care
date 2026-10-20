import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Clock, AlertTriangle, ShieldCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCondition?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedCondition = '',
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    urgency: 'immediate',
    painLevel: 7,
    condition: preselectedCondition || 'Severe Toothache / Abscess',
    isVisitor: false,
    hotelName: '',
    paymentType: 'insurance',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.patientName.trim()) errs.patientName = 'Please provide patient name';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please provide a valid 10-digit phone number';
    if (formData.email && !formData.email.includes('@')) errs.email = 'Please provide a valid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomTicket = `FL-EMG-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <span className="text-[11px] font-semibold text-teal-800 uppercase tracking-wider block">
              Orlando Emergency Dental Triage
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {submitted ? 'Triage Request Confirmed' : 'Request Urgent / Same-Day Visit'}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Triage Intake Reference:
                </span>
                <div className="text-2xl font-bold font-mono text-teal-800 mt-0.5">{ticketId}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 text-sm mb-1">Next Immediate Steps:</div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Our on-call clinical team has received your details for <strong>{formData.patientName}</strong> (Pain Level: {formData.painLevel}/10).
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    We are calling you at <strong>{formData.phone}</strong> to confirm your exact arrival slot.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Clinic Address: <strong>{CLINIC_INFO.address}, Orlando, FL 32819</strong> (Dr. Phillips area).
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-left text-xs text-amber-900 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Urgent Medical Note:</strong> If you are experiencing difficulty breathing, swallowing, or uncontrolled bleeding, please proceed to the nearest hospital emergency department or call 911.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CLINIC_INFO.cleanPhone}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (407) 876-0290 To Expedite</span>
                </a>
                <button
                  onClick={handleReset}
                  className="py-3 px-5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="p-3 rounded-lg bg-teal-50 border border-teal-100 flex items-center gap-2.5 text-xs text-teal-900">
                <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                <span>
                  Same-day slots are reserved for emergency triage. For instant assistance, you can also call <strong>(407) 876-0290</strong>.
                </span>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                />
                {errors.patientName && <span className="text-xs text-rose-500 mt-1 block">{errors.patientName}</span>}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number (Cell) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(407) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                  />
                  {errors.phone && <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                  />
                  {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Condition / Chief Complaint */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Dental Condition / Chief Complaint
                </label>
                <select
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm bg-white"
                >
                  <option value="Severe Toothache / Abscess">Severe Toothache / Abscess</option>
                  <option value="Knocked-Out or Broken Tooth">Knocked-Out or Fractured Tooth</option>
                  <option value="Lost Crown, Veneer, or Bridge">Lost Crown, Veneer, or Bridge</option>
                  <option value="Emergency Extraction / Wisdom Tooth">Emergency Extraction / Wisdom Tooth</option>
                  <option value="Swelling in Gums or Jaw">Swelling in Gums or Jaw</option>
                  <option value="Theme Park / Pool Injury">Theme Park / Tourist Accident</option>
                  <option value="Other Dental Urgent Care">Other Urgent Condition</option>
                </select>
              </div>

              {/* Pain Level Slider (1 - 10) */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  <span>Current Pain Level (1 to 10)</span>
                  <span className={`font-mono text-sm font-bold ${formData.painLevel >= 8 ? 'text-rose-600' : formData.painLevel >= 5 ? 'text-amber-600' : 'text-teal-700'}`}>
                    {formData.painLevel} / 10 {formData.painLevel >= 8 ? '(Severe)' : formData.painLevel >= 5 ? '(Moderate)' : '(Mild)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.painLevel}
                  onChange={(e) => setFormData({ ...formData, painLevel: parseInt(e.target.value) })}
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                  <span>1: Mild Discomfort</span>
                  <span>5: Moderate Ache</span>
                  <span>10: Excruciating / Unbearable</span>
                </div>
              </div>

              {/* Urgency Timing */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Arrival Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'immediate', label: 'Right Now / Today' },
                    { id: 'today_pm', label: 'Later Today' },
                    { id: 'tomorrow', label: 'Tomorrow' },
                  ].map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => setFormData({ ...formData, urgency: option.id })}
                      className={`py-2 px-2 text-xs rounded-lg font-medium border text-center transition-all ${
                        formData.urgency === option.id
                          ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visitor / Tourist Checkbox */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={formData.isVisitor}
                    onChange={(e) => setFormData({ ...formData, isVisitor: e.target.checked })}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <span>I am visiting Orlando (resort, hotel, or theme park guest)</span>
                </label>
                {formData.isVisitor && (
                  <input
                    type="text"
                    placeholder="Hotel / Resort Name (e.g. Disney Grand Floridian, Hilton Bonnet Creek)"
                    value={formData.hotelName}
                    onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                    className="mt-2 w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                )}
              </div>

              {/* Insurance or Self-Pay */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Payment / Insurance Preference
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentType: 'insurance' })}
                    className={`py-2 px-3 rounded-lg border font-medium text-left transition-all ${
                      formData.paymentType === 'insurance'
                        ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Dental Insurance (PPO)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentType: 'self_pay' })}
                    className={`py-2 px-3 rounded-lg border font-medium text-left transition-all ${
                      formData.paymentType === 'self_pay'
                        ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Self-Pay / CareCredit
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.99]"
                >
                  Submit Triage Request & Alert On-Call Dentist
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No advance payment required to submit triage. Fee transparency provided prior to treatment.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
