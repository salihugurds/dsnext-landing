export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image_url: string;
  slug: string;
  type: 'leadership' | 'team';
  created_at: string;
}

export interface Client {
  id: string;
  name: string;
  logo_url: string;
  description: string;
  slug: string;
  created_at: string;
}

export interface AboutPageData {
  leadership: TeamMember[];
  clients: Client[];
}
