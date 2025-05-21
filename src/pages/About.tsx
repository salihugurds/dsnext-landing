import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { useCompany, useLeadership, useCustomers } from '../hooks/useAboutData';

const AboutPage: React.FC = () => {
  const { company, loading: companyLoading } = useCompany();
  const { leadership, loading: leadershipLoading } = useLeadership();
  const { customers, loading: customersLoading } = useCustomers(true);

  if (companyLoading || leadershipLoading || customersLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100">
              {company?.description || 'We are a team of passionate individuals dedicated to building amazing products.'}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Company</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                {company?.mission}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Values</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company?.values?.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
              <img 
                src={company?.image_url || 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section backgroundColor="gray-50" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="text-gray-600">
            Meet the experienced professionals leading our company to success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.slice(0, 3).map((member) => (
            <Link 
              key={member.id} 
              to={`/about/leadership/${member.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img 
                    src={member.image_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 line-clamp-3">{member.bio}</p>
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span>View Profile</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/about/leadership" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View Full Leadership Team
          </Link>
        </div>
      </Section>

      {/* Our Customers */}
      <Section spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Valued Customers</h2>
          <p className="text-gray-600">
            We're proud to partner with leading companies across various industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {customers.map((customer) => (
            <div key={customer.id} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={customer.logo_url} 
                alt={customer.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/about/customers" 
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            View All Customers
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section backgroundColor="blue-50" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to discuss how we can help your business grow
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Our Services
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
