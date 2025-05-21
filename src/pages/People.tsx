import React from "react";
import Section from "../components/shared/Section";
import { TeamMember } from "../types";

const defaultTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    bio: "With over 15 years of experience in software development and IT leadership, Sarah leads our technical strategy and innovation.",
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Lead Software Architect",
    bio: "Michael specializes in designing scalable, resilient software architectures and has led projects for Fortune 500 companies.",
    image:
      "https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    name: "Aisha Patel",
    position: "Director of Product",
    bio: "Aisha brings extensive experience in product management and user experience design to create solutions that truly delight users.",
    image:
      "https://images.pexels.com/photos/5668893/pexels-photo-5668893.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "4",
    name: "David Rodriguez",
    position: "Senior Mobile Developer",
    bio: "David is an expert in mobile app development with a passion for creating intuitive and performant applications.",
    image:
      "https://images.pexels.com/photos/5668788/pexels-photo-5668788.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "5",
    name: "Emily Zhang",
    position: "UX Design Lead",
    bio: "Emily combines creativity with data-driven insights to design user experiences that exceed expectations.",
    image:
      "https://images.pexels.com/photos/5668895/pexels-photo-5668895.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "6",
    name: "James Wilson",
    position: "Data Science Manager",
    bio: "James leads our data science initiatives, helping clients unlock the power of their data through advanced analytics.",
    image:
      "https://images.pexels.com/photos/5668779/pexels-photo-5668779.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const People: React.FC = () => {
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
          {defaultTeamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
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
