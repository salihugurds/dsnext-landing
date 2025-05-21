// Types for the website content

export interface HeroSection {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface IndustryCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  company: string;
  testimonial: string;
  image: string;
}

export interface AboutSection {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapLocation: string;
}