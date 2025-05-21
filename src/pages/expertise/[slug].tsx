import React from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../../components/shared/Section";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import ContactCTA from "../../components/home/ContactCTA";
import { ExpertiseCard } from "../../types/supabase";
import { useExpertiseCards } from "../../hooks/useSupabaseData";

const ExpertiseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { expertise } = useExpertiseCards();
  const expertiseItem = expertise.find(
    (item: ExpertiseCard) => item.slug === slug
  );

  console.log(expertiseItem, expertise);
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] min-h-[500px] bg-gray-900">
        {/* Background Image */}
        {expertiseItem?.hero_image_url && (
          <div className="absolute inset-0 z-0">
            <img
              src={expertiseItem.hero_image_url}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/90 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <Section
            className="w-full py-12 md:py-24"
            backgroundColor="transparent"
          >
            <div className="max-w-4xl mx-auto text-center">
              <Link
                to="/expertise"
                className="inline-flex items-center text-blue-200 hover:text-white mb-6 md:mb-8 transition-colors group"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Expertise
              </Link>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {expertiseItem?.hero_title || expertiseItem?.title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {expertiseItem?.hero_subtitle ||
                  "Transforming businesses with innovative solutions"}
              </motion.p>
            </div>
          </Section>
        </div>
      </div>

      {expertiseItem?.projects && (
        <Section spacing="lg">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseItem.projects.map((project) => {
              return (
                <div
                  key={project.title}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-600 mb-4">{project.description}</p>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      <ContactCTA />
    </div>
  );
};

export default ExpertiseDetailPage;
