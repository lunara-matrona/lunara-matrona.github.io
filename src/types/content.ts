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

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  ageRange?: string;
  shortDescription: string;
  introduction: string;
  image: string;
  featuredTopic: string;
  topics: string[];
  includes: string[];
  idealFor: string;
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
