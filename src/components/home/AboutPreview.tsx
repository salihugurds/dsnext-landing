import React from "react";
import Section from "../shared/Section";
import Button from "../shared/Button";
import { AboutSection as AboutSectionType } from "../../types";

interface AboutPreviewProps {
  data?: AboutSectionType;
}

// Default data in case Supabase data hasn't loaded yet
const defaultData: AboutSectionType = {
  id: "1",
  title: "About DSNext",
  description: `
    Founded on December 20, 2024, DSNext Teknoloji ve Danışmanlık A.Ş. is built on the vision of turning complex software challenges into smart, high-quality solutions. Based in the Technopark Incubation Center, we specialize in turnkey projects and IT staff augmentation, delivering tailored services that prioritize clarity, performance, and user experience.

At DSNext, we believe true engineering lies in simplifying complexity. Every line of code we write aims to create not just solutions, but experiences.

More than a tech company, we’re a team — growing together, pushing limits, and staying one step ahead to shape the technologies of tomorrow.

DSNext | Stronger Together.
  `,
  image:
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

const AboutPreview: React.FC<AboutPreviewProps> = ({ data = defaultData }) => {
  return (
    <Section backgroundColor="white" spacing="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
            <img
              src={data.image}
              alt="About TechSphere"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-lg -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-lg -z-10"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">{data.title}</h2>
          <div className="text-gray-600 space-y-4">
            {data.description.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about/#company">Our Company</Button>
            <Button href="/people" variant="outline">
              Our Team
            </Button>
            <Button href="/about/#clients" variant="ghost">
              Our Clients
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;
