import { useHeroSection } from '../hooks/useSupabaseData';

const Hero = () => {
  const { hero, loading, error } = useHeroSection();

  if (loading) return <div className="text-center py-20">Loading hero section...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error loading hero section</div>;
  if (!hero) return null;

  return (
    <section 
      className="relative bg-cover bg-center py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${hero.background_image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
        <a
          href={hero.cta_link}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
        >
          {hero.cta_text}
        </a>
      </div>
    </section>
  );
};

export default Hero;
