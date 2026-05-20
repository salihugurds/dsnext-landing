import React from "react";
import Section from "../shared/Section";
import Button from "../shared/Button";
import ai from "../../assets/ai-business-processes.jpg";

const FeaturedBlog: React.FC = () => {
  return (
    <Section
      backgroundColor="light"
      spacing="lg"
      className="bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={ai}
              alt="AI transforming business processes"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Latest Insight
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              How AI Is Transforming Modern Business Processes
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Artificial intelligence is no longer just a trend. Businesses are
              now leveraging AI to automate operations, improve customer
              experiences, optimize workflows, and make faster data-driven
              decisions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/blog/how-ai-is-transforming-business-processes"
                size="lg"
                className="bg-purple-700 hover:bg-purple-800 text-white"
              >
                Read Article
              </Button>

              <Button
                href="/blog"
                variant="outline"
                size="lg"
                className="border-purple-700 text-purple-700 hover:bg-purple-50"
              >
                Visit Our Blog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedBlog;