import React from "react";
import Button from "../shared/Button";
import { useHeroSection } from "../../hooks/useSupabaseData";

const HeroSection: React.FC = () => {
  const { hero, loading, error } = useHeroSection();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    console.error("Error loading hero section:", error);
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error loading content. Please try again later.
      </div>
    );
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${hero.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{hero.title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
        <Button href={hero.cta_link} variant="primary" size="lg">
          {hero.cta_text}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
