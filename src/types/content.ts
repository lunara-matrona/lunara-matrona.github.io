export interface NavigationItem {
  label: string;
  path: string;
}

export interface ContactInfo {
  email: string;
  phoneDisplay: string;
  phoneValue: string;
  instagram: string;
  instagramUrl: string;
  city: string;
  schedule: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePrestation {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration?: string;
  modality?: string;
  included?: string;
  details?: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  ageRange?: string;
  shortDescription: string;
  introduction: string;
  image: string;
  notice?: string[];
  prestations: ServicePrestation[];
  faq: ServiceFaq[];
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  isPlaceholder: boolean;
}
export type ProfessionalHighlightType = "experience" | "certificate" | "education" | "recognition";

export interface ProfessionalHighlight {
  id: string;
  type: ProfessionalHighlightType;
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  image?: string;
  url?: string;
}

export interface ProfessionalProfile {
  eyebrow: string;
  name: string;
  role: string;
  summary: string[];
  image: string;
  imageAlt: string;
  linkedinUrl: string;
  linkedinLabel: string;
  highlightsEyebrow: string;
  highlightsTitle: string;
  highlights: ProfessionalHighlight[];
}

