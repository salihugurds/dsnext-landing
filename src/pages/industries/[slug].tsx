import React from "react";
import { useParams, Link } from "react-router-dom";
import { useIndustryBySlug } from "../../hooks/useIndustries";
import Section from "../../components/shared/Section";
import {
  ArrowLeftIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import ContactCTA from "../../components/home/ContactCTA";
import TeamSection from "../../components/home/TeamSection";

// Types
interface CaseStudy {
  title: string;
  description: string;
  image_url: string;
  results?: string;
  client?: string;
  impact?: string;
}

const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { industry, loading, error } = useIndustryBySlug(slug || "");

  // Handle case where industry data is not available
  if (!industry && !loading) {
    return (
      <Section>
        <div className="text-center py-12 text-red-500">Industry not found</div>
      </Section>
    );
  }

  if (loading) {
    return (
      <Section>
        <div className="text-center py-12">Loading industry details...</div>
      </Section>
    );
  }

  if (error || !industry) {
    return (
      <Section>
        <div className="text-center py-12 text-red-500">
          Error loading industry details. Please try again later.
        </div>
      </Section>
    );
  }

  console.log("Hero image URL:", industry.hero_image_url);

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] min-h-[500px] bg-gray-900">
        {/* Background Image */}
        {industry.hero_image_url && (
          <div className="absolute inset-0 z-0">
            <img
              src={industry.hero_image_url}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/90 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <Section
            className="w-full py-12 md:py-24"
            backgroundColor="transparent"
          >
            <div className="max-w-4xl mx-auto text-center">
              <Link
                to="/industries"
                className="inline-flex items-center text-blue-200 hover:text-white mb-6 md:mb-8 transition-colors group"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Industries
              </Link>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {industry.hero_title || industry.title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {industry.hero_subtitle ||
                  "Transforming businesses with innovative solutions"}
              </motion.p>
            </div>
          </Section>
        </div>
      </div>

      {/* Stats / Features Section */}
      {/* <Section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {[
            { value: "15+", label: "Years Experience", icon: LightBulbIcon },
            { value: "500+", label: "Projects Completed", icon: ChartBarIcon },
            {
              value: "98%",
              label: "Client Satisfaction",
              icon: CheckCircleIcon,
            },
            { value: "24/7", label: "Support", icon: UserGroupIcon },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
                <stat.icon className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-blue-700 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section> */}

      {/* Overview Section */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={
                industry.overview_image_url || "/images/industry-overview.jpg"
              }
              alt={`${industry.title} Overview`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Why {industry.title}?</h3>
              <p className="text-blue-100">
                Discover how we're transforming the industry
              </p>
            </div>
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
              Industry Overview
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {industry.overview_title || `About ${industry.title} Solutions`}
            </h2>
            <div className="prose max-w-none text-gray-600 text-lg">
              {industry.overview_content ? (
                industry.overview_content
                  .split("\n")
                  .map((paragraph, i) => <p key={i}>{paragraph}</p>)
              ) : (
                <p>
                  We provide cutting-edge solutions tailored to the unique
                  challenges of the {industry.title} industry.
                </p>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges & Solutions Section */}
      {industry.challenges_content && (
        <Section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {industry.challenges_title || "Key Challenges"}
              </h2>
              <ul className="space-y-4">
                {industry.challenges_content
                  .split("\\n")
                  .map((challenge, i) => {
                    console.log(industry.challenges_content?.split("\\n"));
                    return (
                      challenge.trim() && (
                        <li key={i} className="flex items-start gap-2">
                          <LightBulbIcon className="h-6 w-6 text-blue-600 mt-1" />
                          <span>{challenge.replace(/^•\s*/, "")}</span>
                        </li>
                      )
                    );
                  })}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* Case Studies Section */}
      {industry.case_studies &&
        Array.isArray(industry.case_studies) &&
        industry.case_studies.length > 0 && (
          <Section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Defensive parse for case studies if stored as JSON string */}
                {industry.case_studies.map((rawCaseStudy, index: number) => {
                  let caseStudy: CaseStudy;
                  if (typeof rawCaseStudy === "string") {
                    try {
                      caseStudy = JSON.parse(rawCaseStudy);
                    } catch {
                      return null;
                    }
                  } else {
                    caseStudy = rawCaseStudy as unknown as CaseStudy;
                  }
                  if (!caseStudy) return null;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                      <img
                        src={
                          caseStudy.image_url ||
                          "/images/case-study-placeholder.jpg"
                        }
                        alt={caseStudy.title}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold mb-2">
                          {caseStudy.title}
                        </h4>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {caseStudy.description}
                        </p>
                        {caseStudy.results && (
                          <div className="bg-blue-50 p-3 rounded mb-2 text-blue-800 text-sm font-medium">
                            {caseStudy.results}
                          </div>
                        )}
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="inline-flex items-center text-blue-700 hover:underline"
                          >
                            View Details
                            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>
        )}

      {/* Team/Experts Section */}
      {/* <TeamSection /> */}

      {/* CTA Section */}
      <ContactCTA />
      {industry.overview_content && (
        <div>
          {/* Overview Section */}
          <Section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                {industry.overview_title || "Industry Overview"}
              </h2>
              <div className="prose max-w-none">
                {industry.overview_content &&
                  industry.overview_content.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-4 text-gray-600">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
};

export default IndustryDetailPage;
