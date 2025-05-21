export interface CaseStudy {
  title: string;
  description: string;
  results: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  description: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image_url: string;
  overview_title: string;
  overview_content: string;
  challenges_title: string;
  challenges_content: string;
  solutions_title: string;
  solutions_content: string;
  case_studies: CaseStudy[];
  featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
