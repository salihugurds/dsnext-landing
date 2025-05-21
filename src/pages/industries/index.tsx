import React from "react";
import { Link } from "react-router-dom";
import { useIndustryList } from "../../hooks/useIndustries";
import Section from "../../components/shared/Section";
// Define a more specific type that matches our usage
interface IndustryCardProps {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  hero_image_url: string | null;
  // Add any additional properties we might use
  [key: string]: unknown;
}

// Use a type assertion to ensure TypeScript understands our data structure
const IndustryCard: React.FC<{ industry: IndustryCardProps }> = ({
  industry,
}) => (
  <div
    key={industry.id}
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={industry.hero_image_url || "/images/placeholder-industry.jpg"}
        alt={industry.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{industry.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {industry.description || "No description available"}
      </p>
      <Link
        to={`/industries/${industry.slug}`}
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full transition-colors"
      >
        Learn More
      </Link>
    </div>
  </div>
);

const IndustriesPage: React.FC = () => {
  const { industries, loading, error } = useIndustryList();
  console.log(industries);

  if (loading) {
    return (
      <Section>
        <div className="text-center py-12">Loading industries...</div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <div className="text-center py-12 text-red-500">
          Error loading industries. Please try again later.
        </div>
      </Section>
    );
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl text-blue-100">
              Discover how our solutions are transforming businesses across
              various industries.
            </p>
          </div>
        </div>
      </div>

      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default IndustriesPage;
