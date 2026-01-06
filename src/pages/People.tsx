import React from "react";
import Section from "../components/shared/Section";
import { useTeamMembers } from "../hooks/useSupabaseData";

const People: React.FC = () => {
  const { team } = useTeamMembers();
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our People</h1>
            <p className="text-xl text-blue-100">
              Meet the talented individuals who make our success possible. Our
              diverse team brings together expertise from various technology
              domains.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-2">
                {/* <img
                  src={member.image || ""}
                  alt={member.name}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Join Our Team Section */}
      <Section backgroundColor="light" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            We're always looking for talented individuals who are passionate
            about technology and innovation. Check out our current openings or
            send us your resume.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/careers"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Openings
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default People;
