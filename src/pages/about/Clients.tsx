import React from 'react';
import Section from '../../components/shared/Section';
import { ClientTestimonial } from '../../types';

const defaultTestimonials: ClientTestimonial[] = [
  {
    id: '1',
    clientName: 'Jennifer Lee',
    company: 'FinTech Solutions Inc.',
    testimonial: 'TechSphere transformed our digital infrastructure, resulting in a 40% increase in operational efficiency. Their expertise in fintech solutions is unmatched.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    clientName: 'Mark Thompson',
    company: 'HealthCare Plus',
    testimonial: 'The mobile health platform developed by TechSphere has revolutionized how we interact with patients. The team\'s understanding of healthcare IT requirements was impressive.',
    image: 'https://images.pexels.com/photos/3760274/pexels-photo-3760274.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    clientName: 'Sarah Rodriguez',
    company: 'Global Retail Corp',
    testimonial: 'TechSphere\'s e-commerce solution helped us achieve record online sales. Their attention to detail and customer-focused approach made all the difference.',
    image: 'https://images.pexels.com/photos/3760958/pexels-photo-3760958.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Clients: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
            <p className="text-xl text-blue-100">
              Discover how we've helped businesses across industries achieve their technology goals.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Clients */}
      <Section spacing="lg">
        <h2 className="text-3xl font-bold mb-12 text-center">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Logo {index}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section backgroundColor="light" spacing="lg">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Digital Transformation',
              company: 'Global Bank Ltd.',
              result: '200% increase in digital transactions',
              description: 'Modernized legacy systems and implemented new digital banking platform.',
            },
            {
              title: 'Mobile App Development',
              company: 'HealthTech Solutions',
              result: '1M+ app downloads in first year',
              description: 'Created innovative healthcare management mobile application.',
            },
            {
              title: 'E-commerce Platform',
              company: 'Retail Giant Corp',
              result: '150% growth in online sales',
              description: 'Built scalable e-commerce platform with advanced analytics.',
            },
          ].map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="text-blue-600 mb-4">{story.company}</p>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <p className="font-semibold text-green-600">{story.result}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section spacing="lg">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {defaultTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.clientName} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.clientName}</h3>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section backgroundColor="light" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8">
            Join our growing list of satisfied clients and experience the TechSphere difference.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us Today
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Clients;