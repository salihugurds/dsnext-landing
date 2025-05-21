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
  title: "About TechSphere",
  description: `
    Founded in 2015, TechSphere has grown from a small team of dedicated developers to a comprehensive IT solutions provider with global reach. We believe technology should empower businesses, not complicate them.
    
    Our mission is to deliver innovative, scalable technology solutions that help our clients succeed in an increasingly digital world. We combine technical expertise with industry knowledge to create customized solutions that address real business challenges.
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
            <Button href="/about/company">Our Company</Button>
            <Button href="/about/leadership" variant="outline">
              Leadership Team
            </Button>
            <Button href="/about/clients" variant="ghost">
              Client Success Stories
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;
