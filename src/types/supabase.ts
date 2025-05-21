export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// Define types for each table
export type HeroSection = Database["public"]["Tables"]["hero_sections"]["Row"];
export type ExpertiseCard = Database["public"]["Tables"]["expertise_cards"]["Row"];
export type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];
export type Industry = Database["public"]["Tables"]["industries"]["Row"];
export type Company = Database["public"]["Tables"]["company"]["Row"];
export type Leadership = Database["public"]["Tables"]["leadership"]["Row"];
export type Customer = Database["public"]["Tables"]["customers"]["Row"];

export interface Database {
  public: {
    Tables: {
      // Company
      company: {
        Row: {
          id: string;
          title: string;
          description: string;
          mission: string;
          vision: string;
          values: string[];
          image_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          mission: string;
          vision: string;
          values: string[];
          image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          mission?: string;
          vision?: string;
          values?: string[];
          image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      
      // Leadership
      leadership: {
        Row: {
          id: string;
          name: string;
          position: string;
          bio: string;
          image_url: string | null;
          order: number;
          linkedin_url: string | null;
          twitter_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          position: string;
          bio: string;
          image_url?: string | null;
          order?: number;
          linkedin_url?: string | null;
          twitter_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          position?: string;
          bio?: string;
          image_url?: string | null;
          order?: number;
          linkedin_url?: string | null;
          twitter_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };

      // Customers
      customers: {
        Row: {
          id: string;
          name: string;
          logo_url: string;
          description: string | null;
          website_url: string | null;
          featured: boolean;
          order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          logo_url: string;
          description?: string | null;
          website_url?: string | null;
          featured?: boolean;
          order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          logo_url?: string;
          description?: string | null;
          website_url?: string | null;
          featured?: boolean;
          order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };

      // Hero Sections
      hero_sections: {
        Row: {
          id: string;
          title: string;
          subtitle: string;
          cta_text: string;
          cta_link: string;
          background_image: string | null;
          active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          subtitle: string;
          cta_text: string;
          cta_link: string;
          background_image?: string | null;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          subtitle?: string;
          cta_text?: string;
          cta_link?: string;
          background_image?: string | null;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };

      // Expertise Cards
      expertise_cards: {
        Row: {
          id: string;
          title: string;
          description: string;
          icon: string | null;
          slug: string;
          sort_order: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          icon?: string | null;
          slug?: string;
          sort_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          icon?: string | null;
          slug?: string;
          sort_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };

      // Team Members
      team_members: {
        Row: {
          id: string;
          name: string;
          position: string;
          bio: string;
          image: string | null;
          sort_order: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          position: string;
          bio: string;
          image?: string | null;
          sort_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          position?: string;
          bio?: string;
          image?: string | null;
          sort_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };

      // Industries
      industries: {
        Row: {
          overview_image_url: string;
          id: string;
          slug: string;
          title: string;
          description: string | null;
          hero_title: string | null;
          hero_subtitle: string | null;
          hero_image_url: string | null;
          overview_title: string | null;
          overview_content: string | null;
          challenges_title: string | null;
          challenges_content: string | null;
          solutions_title: string | null;
          solutions_content: string | null;
          case_studies: Json | null;
          featured: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description?: string | null;
          hero_title?: string | null;
          hero_subtitle?: string | null;
          hero_image_url?: string | null;
          overview_title?: string | null;
          overview_content?: string | null;
          challenges_title?: string | null;
          challenges_content?: string | null;
          solutions_title?: string | null;
          solutions_content?: string | null;
          case_studies?: Json | null;
          featured?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string | null;
          hero_title?: string | null;
          hero_subtitle?: string | null;
          hero_image_url?: string | null;
          overview_title?: string | null;
          overview_content?: string | null;
          challenges_title?: string | null;
          challenges_content?: string | null;
          solutions_title?: string | null;
          solutions_content?: string | null;
          case_studies?: Json | null;
          featured?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };

      // Contact Submissions
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          message?: string;
          created_at?: string;
        };
      };
    };

    Views: {
      [_ in never]: never;
    };

    Functions: {
      [_ in never]: never;
    };

    Enums: {
      [_ in never]: never;
    };
  };
}
