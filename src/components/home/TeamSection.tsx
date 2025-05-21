import React from "react";
import Section from "../shared/Section";
import Button from "../shared/Button";
import { useTeamMembers } from "../../hooks/useSupabaseData";

const TeamSection: React.FC = () => {
  const { team } = useTeamMembers();

  const displayMembers = team.slice(0, 3);

  return (
    <Section
      title="Our People"
      subtitle="Meet the experts behind our innovative solutions"
      centered
      backgroundColor="light"
      spacing="lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 relative">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={member.image || ""}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-0 right-0 mx-auto w-fit px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                {member.position.split(" ")[0]}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-gray-500 mb-2">{member.position}</p>
            <p className="text-gray-600 mb-4">{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button href="/people" variant="outline">
          Meet Our Entire Team
        </Button>
      </div>
    </Section>
  );
};

export default TeamSection;
