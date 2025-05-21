import React from "react";
import { Link } from "react-router-dom";
import Section from "../shared/Section";
import Card from "../shared/Card";
import { Monitor, Smartphone, Database } from "lucide-react";
import { useExpertiseCards } from "../../hooks/useSupabaseData";

const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
  const iconProps = { className: "h-10 w-10 text-blue-600" };

  switch (icon) {
    case "monitor":
      return <Monitor {...iconProps} />;
    case "smartphone":
      return <Smartphone {...iconProps} />;
    case "database":
      return <Database {...iconProps} />;
    default:
      return <Monitor {...iconProps} />;
  }
};

const ExpertiseSection: React.FC = () => {
  const { expertise } = useExpertiseCards();
  return (
    <Section
      title="Our Expertise"
      subtitle="We specialize in delivering cutting-edge solutions across various technology domains"
      centered
      backgroundColor="light"
      spacing="lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertise.map((item) => (
          <Link
            key={item.id}
            to={`/expertise/${item.slug}`}
            className="block h-full"
          >
            <Card hoverable className="h-full flex flex-col">
              <div className="mb-4">
                <IconComponent icon={item.icon || "monitor"} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
              <div className="text-blue-600 font-medium flex items-center mt-auto">
                Learn more
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ExpertiseSection;
