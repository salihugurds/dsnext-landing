import React from "react";
import Section from "../components/shared/Section";
import Card from "../components/shared/Card";
import { Monitor, Smartphone, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useExpertiseCards } from "../hooks/useSupabaseData";

const IconComponent: React.FC<{ icon: string; className?: string }> = ({
  icon,
  className = "h-10 w-10 text-blue-600",
}) => {
  switch (icon) {
    case "monitor":
      return <Monitor className={className} />;
    case "smartphone":
      return <Smartphone className={className} />;
    case "database":
      return <Database className={className} />;
    default:
      return <Monitor className={className} />;
  }
};

const Expertise: React.FC = () => {
  const { expertise } = useExpertiseCards();
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Expertise</h1>
            <p className="text-xl text-blue-100">
              We deliver innovative solutions across multiple technology domains
              to help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((e) => (
            <Link
              key={e.id}
              to={`/expertise/${e.slug}`}
              className="block h-full"
            >
              <Card hoverable className="h-full flex flex-col">
                <div className="mb-4">
                  <IconComponent icon={e.icon || "monitor"} />
                </div>
                <h3 className="text-xl font-bold mb-3">{e.title}</h3>
                <p className="text-gray-600 mb-6">{e.description}</p>
                <div className="mt-auto flex items-center text-blue-600 font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600">
              We follow a structured yet flexible approach to deliver solutions
              that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We work closely with you to understand your business needs, goals, and challenges.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Our team creates a detailed project roadmap with milestones, deliverables, and timelines.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your solution using the latest technologies and best development practices.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "After thorough testing, we deploy your solution and provide ongoing support and maintenance.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 p-6 rounded-lg relative z-10 h-full">
                  <div className="text-3xl font-bold text-blue-600 mb-3">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section backgroundColor="light" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss how our expertise can help you achieve
            your technology goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Expertise;
