import React from "react";
import Section from "../../components/shared/Section";

interface BulletinItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
}

const bulletinItems: BulletinItem[] = [
  {
    id: "1",
    number: "01",
    title: "AI Is Reshaping Business Operations",
    description:
      "Artificial intelligence is helping companies automate repetitive tasks, improve decision-making, and create faster business workflows.",
    category: "AI Trends",
  },
  {
    id: "2",
    number: "02",
    title: "Automation Becomes a Growth Strategy",
    description:
      "Growing companies are using automation to reduce manual work, improve scalability, and build more efficient operational systems.",
    category: "Automation",
  },
  {
    id: "3",
    number: "03",
    title: "Generative AI in Software Development",
    description:
      "Generative AI supports development teams with faster prototyping, better documentation, test generation, and code improvement.",
    category: "Software",
  },
];

const BulletinPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-950 text-white pt-32 pb-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/15 text-blue-100 text-sm font-semibold mb-6">
              DSNEXT BULLETIN
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI, Automation & Digital Transformation
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              A curated technology bulletin featuring insights on artificial
              intelligence, business automation, enterprise solutions, and
              modern software development.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <span className="px-5 py-3 rounded-full bg-white text-purple-800 font-semibold">
                Issue 01
              </span>
              <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20">
                Technology Insights
              </span>
              <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20">
                DSNEXT Perspective
              </span>
            </div>
          </div>
        </div>
      </div>
{/* Newsletter Cover */}
{/* Newsletter Cover */}
<div className="bg-gray-100 pt-16 md:pt-28 pb-10 md:pb-16">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <div className="bg-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[1.4fr_0.9fr] min-h-0 md:min-h-[620px] rounded-2xl md:rounded-none">

      {/* Left Content */}
      <div className="p-6 sm:p-8 md:p-12">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="w-10 md:w-16 h-2 md:h-3 bg-gradient-to-r from-blue-900 to-blue-600" />
          <div>
            <p className="text-[10px] md:text-xs font-bold text-gray-900 leading-none">
              DSNEXT
            </p>
            <p className="text-[10px] md:text-xs font-bold text-gray-900">
              Technology
            </p>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 break-words">
          <span className="text-gray-950 block sm:inline">NEWS</span>
          <span className="text-blue-800 block sm:inline">LETTER</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-10">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop"
            alt="Technology building"
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop"
            alt="Modern office technology"
            className="w-full h-48 sm:h-56 md:h-64 object-cover grayscale"
          />
        </div>

        <div className="space-y-7 md:space-y-8">
          <div className="flex gap-4 md:gap-5">
            <div className="shrink-0 w-8 md:w-12 h-3 md:h-4 bg-gradient-to-r from-blue-900 to-blue-600 mt-2" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800">
                Innovation and Adaptability
              </h2>
              <p className="text-gray-600 text-sm leading-6 mt-2">
                Businesses are rapidly adapting to artificial intelligence,
                automation, and data-driven decision-making to remain
                competitive in a changing digital economy.
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:gap-5">
            <div className="shrink-0 w-8 md:w-12 h-3 md:h-4 bg-gradient-to-r from-blue-900 to-blue-600 mt-2" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800">
                Customer-Centric Digital Strategies
              </h2>
              <p className="text-gray-600 text-sm leading-6 mt-2">
                Technology is helping companies create faster, smarter, and
                more personalized customer experiences across every digital
                touchpoint.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Blue Panel */}
      <div className="bg-blue-900 text-white p-6 sm:p-8 md:p-10 flex flex-col gap-10 md:justify-between relative">
        <div className="flex justify-start md:justify-end">
          <span className="bg-white text-blue-900 px-5 md:px-6 py-2 text-xs font-bold">
            TECHNOLOGY
          </span>
        </div>

        <div>
          <div className="text-6xl md:text-8xl font-serif leading-none mb-3 md:mb-4">
            “
          </div>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5 md:mb-6">
            Smarter Growth Through AI and Automation
          </h2>

          <p className="text-blue-100 text-sm leading-6">
            AI is becoming a practical business tool that helps organizations
            automate repetitive tasks, improve operational speed, analyze data
            faster, and build scalable digital solutions.
          </p>
        </div>

        <div className="text-sm text-blue-100">
          <p className="font-semibold text-white">Issue 01</p>
          <p>DSNEXT Bulletin</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <Section spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
               <span className="text-purple-700 font-semibold uppercase tracking-wider text-sm">
  DSNEXT TECHNOLOGY INSIGHT
</span>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
  AI and Automation Are Defining the Future of Digital Business
</h2>

<p className="text-lg text-gray-600 leading-8">
  Artificial intelligence is transforming how organizations operate,
  communicate, analyze data, and deliver customer experiences.
  Businesses are increasingly investing in automation and intelligent
  systems to improve efficiency, scalability, and innovation.
</p>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8">
              <div className="text-6xl font-black text-blue-900 mb-4 leading-none">
  2026
</div>

<h3 className="text-2xl font-bold text-gray-900 mb-4">
  Technology Outlook
</h3>

<p className="text-gray-700 text-lg leading-8">
  AI-powered workflows, enterprise intelligence, automation, and
  scalable software solutions are becoming essential components of
  modern digital transformation strategies.
</p>
           
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bulletinItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-5xl font-bold text-purple-100 mb-4">
                  {item.number}
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-gradient-to-r from-purple-700 to-blue-700 p-8 md:p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              DSNEXT Note
            </h2>

            <p className="text-lg text-blue-100 leading-8 max-w-4xl">
              At DSNEXT, we follow emerging technologies closely and help
              businesses turn AI, automation, and modern software solutions into
              real operational value.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BulletinPage;