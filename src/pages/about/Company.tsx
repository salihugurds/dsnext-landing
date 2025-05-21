import React from 'react';
import Section from '../../components/shared/Section';

const Company: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
            <p className="text-xl text-blue-100">
              Leading the way in innovative IT solutions since 2015. We help businesses transform through technology.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
            </p>
            <p className="text-gray-600">
              We achieve this by combining technical excellence with deep industry knowledge, delivering solutions that truly matter to our clients' success.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To be the most trusted technology partner for businesses worldwide, known for our innovation, expertise, and commitment to client success.
            </p>
            <p className="text-gray-600">
              We envision a future where every business can harness the full potential of technology to achieve their goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section backgroundColor="light" spacing="lg">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation',
              description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
            },
            {
              title: 'Excellence',
              description: 'We maintain the highest standards in everything we do, from code quality to client service.',
            },
            {
              title: 'Integrity',
              description: 'We build trust through transparency, honesty, and ethical business practices.',
            },
            {
              title: 'Collaboration',
              description: 'We work closely with our clients and each other to achieve the best possible outcomes.',
            },
            {
              title: 'Growth',
              description: 'We invest in our people and technology to continuously improve and evolve.',
            },
            {
              title: 'Impact',
              description: 'We measure our success by the positive impact we create for our clients and society.',
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* History Timeline */}
      <Section spacing="lg">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="space-y-12">
          {[
            {
              year: '2015',
              title: 'Founded',
              description: 'TechSphere was established with a vision to transform how businesses use technology.',
            },
            {
              year: '2017',
              title: 'Expansion',
              description: 'Opened our first international office and expanded our service offerings.',
            },
            {
              year: '2019',
              title: 'Innovation Hub',
              description: 'Launched our innovation lab focused on emerging technologies.',
            },
            {
              year: '2021',
              title: 'Global Growth',
              description: 'Reached 100+ enterprise clients across 15 countries.',
            },
            {
              year: '2023',
              title: 'Future Focus',
              description: 'Introduced AI and ML solutions to our service portfolio.',
            },
          ].map((milestone, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-24">
                <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Company;