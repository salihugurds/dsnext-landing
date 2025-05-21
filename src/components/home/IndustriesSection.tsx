import React from "react";
import { Link } from "react-router-dom";
import Section from "../shared/Section";
import Card from "../shared/Card";
import { Building2, HeartPulse, ShoppingBag } from "lucide-react";
import { useIndustryList } from "../../hooks/useIndustries";

const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
  const iconProps = { className: "h-10 w-10 text-purple-600" };

  switch (icon) {
    case "fintech":
      return <Building2 {...iconProps} />;
    case "healthcare":
      return <HeartPulse {...iconProps} />;
    case "retail":
      return <ShoppingBag {...iconProps} />;
    default:
      return <Building2 {...iconProps} />;
  }
};

const IndustriesSection: React.FC = () => {
  const { industries } = useIndustryList();
  return (
    <Section
      title="Industries We Serve"
      subtitle="We deliver tailored solutions for diverse industries with unique technology needs"
      centered
      backgroundColor="white"
      spacing="lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {industries.map((item) => (
          <Link
            key={item.id}
            to={`/industries/${item.slug}`}
            className="block h-full"
          >
            <Card
              hoverable
              className="h-full flex flex-col border border-gray-100"
            >
              <div className="mb-4 p-3 bg-purple-50 rounded-full inline-flex">
                <IconComponent icon={item.slug} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
              <div className="text-purple-600 font-medium flex items-center mt-auto">
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

export default IndustriesSection;
