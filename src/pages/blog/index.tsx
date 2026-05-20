import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/shared/Section";

interface BlogCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  readTime: string;
  [key: string]: unknown;
}

const blogs: BlogCardProps[] = [
  {
    id: "1",
    slug: "how-ai-is-transforming-business-processes",
    title: "How AI Is Transforming Modern Business Processes",
    description:
      "Discover how artificial intelligence is reshaping workflows, automation, decision-making, and productivity across industries.",
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    category: "AI & Business",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "ai-automation-for-growing-companies",
    title: "AI Automation for Growing Companies",
    description:
      "Explore how companies can reduce manual work, improve operational efficiency, and scale faster with AI-powered automation.",
    image_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "Automation",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "future-of-enterprise-ai-solutions",
    title: "The Future of Enterprise AI Solutions",
    description:
      "Learn how enterprise AI solutions are changing internal knowledge management, customer operations, and data-driven decision-making.",
    image_url:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    category: "Enterprise AI",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "generative-ai-in-software-development",
    title: "Generative AI in Software Development",
    description:
      "See how generative AI is supporting developers with faster prototyping, smarter testing, documentation, and code improvement.",
    image_url:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    category: "Software Development",
    readTime: "5 min read",
  },
  {
  id: "5",
  slug: "ai-cybersecurity-and-threat-detection",
  title: "AI Cybersecurity and Threat Detection",
  description:
    "Discover how artificial intelligence is helping companies detect cyber threats faster, improve security monitoring, and respond to risks in real time.",
  image_url:
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
  category: "Cybersecurity",
  readTime: "5 min read",
},
{
  id: "6",
  slug: "the-rise-of-ai-powered-customer-experience",
  title: "The Rise of AI-Powered Customer Experience",
  description:
    "Explore how businesses are using AI to personalize customer journeys, improve support systems, and create smarter digital experiences.",
  image_url:
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  category: "Customer Experience",
  readTime: "4 min read",
},
];

const BlogCard: React.FC<{ blog: BlogCardProps }> = ({ blog }) => (
  <div
    key={blog.id}
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={blog.image_url}
        alt={blog.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
          {blog.category}
        </span>
        <span className="text-gray-400 text-sm">•</span>
        <span className="text-gray-500 text-sm">{blog.readTime}</span>
      </div>

      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

      <p className="text-gray-600 mb-4 line-clamp-3">
        {blog.description}
      </p>

      <Link
        to={`/blog/${blog.slug}`}
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full transition-colors"
      >
        Read Article
      </Link>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">DSNEXT Blog</h1>
            <p className="text-xl text-blue-100">
              Discover insights about artificial intelligence, automation,
              software development, and digital transformation.
            </p>
          </div>
        </div>
      </div>

      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;