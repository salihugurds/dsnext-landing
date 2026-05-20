import React from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../../components/shared/Section";
import ContactCTA from "../../components/home/ContactCTA";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  image_url: string;
  introTitle: string;
  introText: string;
  sections: {
    title: string;
    text: string;
  }[];
  quote: string;
  conclusion: string;
}

const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "how-ai-is-transforming-business-processes",
    title: "How AI Is Transforming Modern Business Processes",
    subtitle:
      "Discover how artificial intelligence is reshaping workflows, automation, decision-making, and productivity across industries.",
    category: "AI & Business Transformation",
    readTime: "5 min read",
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    introTitle:
      "Artificial intelligence is rapidly transforming how businesses operate, automate workflows, and make strategic decisions.",
    introText:
      "From customer service automation to intelligent analytics, organizations are leveraging AI to increase productivity, reduce operational costs, and scale faster than ever before.",
    quote:
      "AI is no longer just a competitive advantage — it is becoming a business necessity.",
    sections: [
      {
        title: "Automating Repetitive Tasks",
        text: "Businesses spend thousands of hours on repetitive operational tasks such as reporting, invoice processing, customer support, and data entry. AI-powered automation tools can dramatically reduce manual workloads while increasing speed and accuracy.",
      },
      {
        title: "Improving Decision-Making",
        text: "AI systems can analyze massive datasets and identify patterns far beyond traditional reporting methods. This enables organizations to make faster, smarter, and more data-driven business decisions.",
      },
      {
        title: "Enhancing Customer Experience",
        text: "Intelligent chatbots, recommendation engines, and AI-powered personalization tools allow businesses to create more engaging, responsive, and scalable customer experiences.",
      },
    ],
    conclusion:
      "Companies that strategically integrate AI into their operations are positioning themselves for long-term growth, operational efficiency, and digital innovation.",
  },
  {
    id: "2",
    slug: "ai-automation-for-growing-companies",
    title: "AI Automation for Growing Companies",
    subtitle:
      "Learn how AI automation helps companies reduce manual work and scale operations faster.",
    category: "Automation",
    readTime: "4 min read",
    image_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    introTitle:
      "Growing companies need faster, smarter, and more scalable ways to manage daily operations.",
    introText:
      "AI automation helps teams reduce repetitive work, standardize internal processes, and improve operational speed without increasing manual workload.",
    quote:
      "Automation gives growing companies the ability to scale without losing control.",
    sections: [
      {
        title: "Reducing Manual Work",
        text: "AI can automate routine tasks such as data entry, form processing, report generation, approval flows, and customer request classification. This gives teams more time to focus on strategic work.",
      },
      {
        title: "Creating Scalable Operations",
        text: "As a business grows, manual processes become harder to manage. AI automation creates repeatable and scalable systems that support higher workloads with fewer errors.",
      },
      {
        title: "Improving Team Productivity",
        text: "By removing repetitive tasks from daily workflows, employees can focus on problem-solving, customer relationships, product improvement, and innovation.",
      },
    ],
    conclusion:
      "For growing companies, AI automation is not only about saving time. It is about building a stronger operational foundation for sustainable growth.",
  },
  {
    id: "3",
    slug: "future-of-enterprise-ai-solutions",
    title: "The Future of Enterprise AI Solutions",
    subtitle:
      "Explore how enterprise AI is transforming digital operations and business intelligence.",
    category: "Enterprise AI",
    readTime: "6 min read",
    image_url:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    introTitle:
      "Enterprise AI is becoming a core part of modern digital transformation strategies.",
    introText:
      "Organizations are using AI to improve internal knowledge access, automate decision support, personalize customer experiences, and connect data across departments.",
    quote:
      "The next generation of enterprise software will be intelligent, connected, and adaptive.",
    sections: [
      {
        title: "Smarter Knowledge Management",
        text: "Enterprise AI assistants can help employees find documents, summarize internal content, answer operational questions, and reduce time spent searching across different systems.",
      },
      {
        title: "AI-Powered Business Intelligence",
        text: "AI can transform raw business data into actionable insights. Instead of waiting for manual reports, teams can ask questions and receive faster, more contextual answers.",
      },
      {
        title: "Connected Digital Ecosystems",
        text: "Future enterprise AI solutions will integrate with CRM, ERP, HR, finance, and document systems to create a more connected and intelligent business environment.",
      },
    ],
    conclusion:
      "The future of enterprise AI is about helping organizations work smarter, make better decisions, and unlock the value hidden inside their existing data.",
  },
  {
    id: "4",
    slug: "generative-ai-in-software-development",
    title: "Generative AI in Software Development",
    subtitle:
      "Discover how generative AI is changing the future of software engineering.",
    category: "Software Development",
    readTime: "5 min read",
    image_url:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    introTitle:
      "Generative AI is reshaping how software teams design, build, test, and improve digital products.",
    introText:
      "From faster prototyping to automated documentation and code assistance, generative AI is becoming a valuable productivity layer for modern engineering teams.",
    quote:
      "AI will not replace software teams, but teams using AI will move faster and build smarter.",
    sections: [
      {
        title: "Faster Prototyping",
        text: "Generative AI can help teams create initial code structures, UI drafts, API examples, and documentation faster. This shortens the time between idea and working prototype.",
      },
      {
        title: "Improved Code Quality",
        text: "AI-assisted tools can suggest improvements, identify potential bugs, support refactoring, and help developers follow better coding practices.",
      },
      {
        title: "Better Documentation and Testing",
        text: "Software teams can use AI to generate technical documentation, write test scenarios, explain complex logic, and improve knowledge sharing across the team.",
      },
    ],
    conclusion:
      "Generative AI is becoming a practical assistant for software development teams, helping them deliver better products with greater speed and consistency.",
  },
  {
  id: "5",
  slug: "ai-cybersecurity-and-threat-detection",
  title: "AI Cybersecurity and Threat Detection",
  subtitle:
    "Explore how AI is transforming cybersecurity operations and real-time threat monitoring.",
  category: "Cybersecurity",
  readTime: "5 min read",
  image_url:
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
  introTitle:
    "AI is becoming one of the most powerful tools in modern cybersecurity strategies.",
  introText:
    "Organizations are using artificial intelligence to detect suspicious activities, identify vulnerabilities, automate monitoring systems, and improve incident response times.",
  quote:
    "Modern cybersecurity requires intelligent systems that can react faster than human operators.",
  sections: [
    {
      title: "Real-Time Threat Detection",
      text: "AI systems can analyze network activity continuously and identify abnormal patterns that may indicate cyber attacks, phishing attempts, or unauthorized access.",
    },
    {
      title: "Reducing Human Response Time",
      text: "Security teams receive thousands of alerts every day. AI helps prioritize critical risks and automate repetitive monitoring tasks.",
    },
    {
      title: "Smarter Security Operations",
      text: "Machine learning models improve over time, allowing organizations to strengthen their defenses and respond more proactively to emerging threats.",
    },
  ],
  conclusion:
    "AI-powered cybersecurity solutions are helping organizations create faster, smarter, and more scalable security operations.",
},
{
  id: "6",
  slug: "the-rise-of-ai-powered-customer-experience",
  title: "The Rise of AI-Powered Customer Experience",
  subtitle:
    "Discover how AI is redefining customer engagement and digital experiences.",
  category: "Customer Experience",
  readTime: "4 min read",
  image_url:
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  introTitle:
    "Customer expectations are changing, and AI is helping businesses respond faster and smarter.",
  introText:
    "Companies are using AI-powered personalization, chatbots, recommendation systems, and analytics tools to improve customer engagement across digital platforms.",
  quote:
    "AI allows businesses to create more personalized, responsive, and scalable customer experiences.",
  sections: [
    {
      title: "Personalized Experiences",
      text: "AI can analyze customer behavior and preferences to deliver more relevant recommendations, targeted communication, and customized digital journeys.",
    },
    {
      title: "Intelligent Customer Support",
      text: "AI chatbots and virtual assistants provide faster responses, reduce waiting times, and improve customer satisfaction through 24/7 support.",
    },
    {
      title: "Data-Driven Engagement",
      text: "Businesses can use AI insights to better understand customer needs, predict behavior, and optimize marketing and support strategies.",
    },
  ],
  conclusion:
    "AI-powered customer experience solutions are helping businesses build stronger relationships and deliver smarter digital interactions.",
},
];

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blogItem = blogs.find((blog) => blog.slug === slug);

  if (!blogItem) {
    return (
      <Section>
        <div className="text-center py-12 text-red-500">Blog not found</div>
      </Section>
    );
  }

  return (
    <div className="bg-white">
      <div className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src={blogItem.image_url}
            alt={blogItem.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.65)" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/90 z-10" />

        <div className="relative z-20 h-full flex items-center">
          <Section className="w-full py-12 md:py-24" backgroundColor="transparent">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                to="/blog"
                className="inline-flex items-center text-blue-200 hover:text-white mb-6 md:mb-8 transition-colors group"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              <motion.span
                className="inline-block px-4 py-1 rounded-full bg-white/15 text-blue-100 text-sm font-semibold mb-5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {blogItem.category}
              </motion.span>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {blogItem.title}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {blogItem.subtitle}
              </motion.p>
            </div>
          </Section>
        </div>
      </div>

      <Section spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
              {blogItem.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm">{blogItem.readTime}</span>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-purple-100 rounded-3xl p-8 md:p-10 mb-14 shadow-sm">
            <p className="text-2xl md:text-3xl leading-relaxed font-semibold text-gray-900">
              {blogItem.introTitle}
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {blogItem.introText}
            </p>
          </div>

          <div className="space-y-16">
            {blogItem.sections.map((section, index) => (
              <div key={section.title}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl">
                    {index + 1}
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                <p className="text-lg text-gray-600 leading-9">
                  {section.text}
                </p>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 to-blue-700 p-10 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <p className="relative text-2xl md:text-3xl font-semibold leading-relaxed">
                “{blogItem.quote}”
              </p>
            </div>

            <div className="border-t pt-12 mt-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Final Thoughts
              </h2>

              <p className="text-lg text-gray-600 leading-9">
                {blogItem.conclusion}
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-gray-700 leading-8">
                  At DSNEXT, we help businesses build intelligent digital
                  solutions that combine automation, scalability, and modern
                  user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </div>
  );
};

export default BlogDetailPage;