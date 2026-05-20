import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ExpertiseSection from '../components/home/ExpertiseSection';
import IndustriesSection from '../components/home/IndustriesSection';
import FeaturedBlog from '../components/home/FeaturedBlog';
import TeamSection from '../components/home/TeamSection';
import AboutPreview from '../components/home/AboutPreview';
import ContactCTA from '../components/home/ContactCTA';


const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBlog/>
      <ExpertiseSection />
      <IndustriesSection />
      {/* <TeamSection /> */}
      <AboutPreview />
      <ContactCTA />
    </div>
  );
};

export default Home;