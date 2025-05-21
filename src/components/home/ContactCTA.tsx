import React from "react";
import Section from "../shared/Section";
import Button from "../shared/Button";

const ContactCTA: React.FC = () => {
  return (
    <Section
      backgroundColor="dark"
      spacing="lg"
      className="bg-gradient-to-br from-blue-900 to-purple-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Contact our team today to discuss how we can help you leverage
          technology to meet your business goals and stay ahead of the
          competition.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-purple-700 hover:text-white hover:bg-purple-600"
          >
            Get in Touch
          </Button>
          <Button
            href="/expertise"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactCTA;
