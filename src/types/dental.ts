export interface Doctor {
  id: string;
  name: string;
  title: string;
  degree: string;
  education: string;
  experienceYears: number;
  certifications: string[];
  bio: string;
  image: string;
}

export interface DentalService {
  id: string;
  title: string;
  shortDesc: string;
  urgency: 'Immediate' | 'Same Day' | 'Scheduled Urgent';
  fullDesc: string;
  symptoms: string[];
  procedureSteps: string[];
  recoveryTips: string[];
  iconName: string;
}

export interface PainTriageCase {
  id: string;
  symptom: string;
  severity: 'Critical (Call Immediately)' | 'Urgent (Same Day)' | 'Moderate';
  possibleCause: string;
  firstAidAction: string;
  whatWeDo: string;
  anatomyFocus: 'enamel' | 'dentin' | 'pulp' | 'root';
}

export interface PatientReview {
  id: string;
  author: string;
  location: string;
  category: 'Orlando Resident' | 'Disney/Universal Tourist' | 'Emergency Patient';
  date: string;
  rating: number;
  content: string;
  verifiedSource: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Emergency Protocol' | 'Insurance & Fees' | 'Location & Hours' | 'Tourists & Travel';
}

export interface AppointmentRequest {
  patientName: string;
  phone: string;
  email: string;
  urgency: 'immediate' | 'today' | 'tomorrow';
  painLevel: number;
  condition: string;
  notes: string;
  isVisitor: boolean;
  paymentType: 'insurance' | 'self_pay';
}
