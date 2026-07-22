export interface TeamMember {
  name: string;
  usn: string;
  role?: string;
  department?: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  bgImage: string;
  category: string;
}

export interface PriceDataPoint {
  month: string;
  rice: number;
  wheat: number;
  tomato: number;
  cotton: number;
  predicted: boolean;
}

export interface AdoptionDataPoint {
  year: string;
  ruralSmartphones: number; // percentage or millions
  ruralInternet: number; // percentage or millions
  keypadOnly: number; // percentage
  source: string;
}

export interface DiagnosisStep {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  branch?: 'main' | 'ai' | 'db';
  details: string;
}
