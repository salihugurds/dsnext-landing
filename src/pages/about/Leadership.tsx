import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/shared/Section';
import { useLeadership } from '../../hooks/useAboutData';
  };
}

const Leadership: React.FC = () => {
  const { leadership, loading, error } = useLeadership();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Error loading leadership team: {error.message}
      </div>
    );
  }
    bio: 'John brings over 20 years of technology leadership experience, previously serving as CTO at major tech companies. He leads TechSphere\'s strategic vision and growth initiatives.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Sarah Johnson',
    position: 'Chief Technology Officer',
    bio: 'With extensive experience in software architecture and emerging technologies, Sarah drives our technical strategy and innovation initiatives.',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Michael Chen',
    position: 'Chief Operating Officer',
    bio: 'Michael oversees our global operations and ensures efficient delivery of services to our clients. He has a strong background in scaling technology companies.',
    image: 'https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=600',

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-xl text-blue-100">
              Meet the experienced professionals leading our company to success
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Grid */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((member) => (
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
      </Section>

      {/* CTA Section */}
      <Section backgroundColor="blue-50" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            We're always looking for talented individuals to join our growing team.
          </p>
          <Link 
            to="/careers" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
          >
            View Open Positions
          </Link>
            },
            {
              name: 'David Park',
              position: 'AI & Machine Learning',
              company: 'Future AI Labs',
            },
          ].map((advisor, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-bold mb-2">{advisor.name}</h3>
              <p className="text-blue-600 mb-1">{advisor.position}</p>
              <p className="text-gray-600">{advisor.company}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Leadership;