import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/shared/Section";

interface CommunityItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

const communityItems: CommunityItem[] = [
  {
    id: "1",
    title: "What Happened This Month?",
    description:
      "A light monthly roundup covering culture, technology, entertainment, learning, and inspiring highlights from around the world.",
    category: "Monthly Highlights",
  },
  {
    id: "2",
    title: "Watchlist of the Month",
    description:
      "Recommended movies, series, documentaries, and digital content selected for teams who enjoy discovering new stories.",
    category: "Watchlist",
  },
  {
    id: "3",
    title: "Learning Corner",
    description:
      "Books, talks, courses, and personal development recommendations to support continuous learning and growth.",
    category: "Self Development",
  },
  {
    id: "4",
    title: "Fun & Interactive",
    description:
      "Mini quizzes, puzzles, games, and community activities designed to make the month more enjoyable.",
    category: "Community",
  },
];

const CommunityPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/15 text-blue-100 text-sm font-semibold mb-5">
              DSNEXT Community
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Inside DSNEXT
            </h1>

            <p className="text-xl text-blue-100">
              A monthly community space for culture, learning, entertainment,
              productivity, and team inspiration.
            </p>
          </div>
        </div>
      </div>

      <Section spacing="lg">
        <div className="max-w-6xl mx-auto">
   <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-purple-900 to-blue-700 p-10 md:p-14 mb-14 text-white shadow-2xl">

  <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

  <span className="inline-block px-4 py-2 rounded-full bg-white/15 text-sm font-semibold mb-6">
    🌍 COMMUNITY
  </span>

  <div className="max-w-4xl">
    <h2 className="text-5xl md:text-6xl font-black mb-5">
      Inside DSNEXT
    </h2>

    <p className="text-xl text-blue-100 leading-8 max-w-3xl">
      More than technology.
      A place where learning, creativity, culture,
      entertainment and inspiration come together.
    </p>
  </div>
<div className="mt-10 flex flex-wrap gap-4">
  <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-blue-100">
    📚 Learning
  </span>

  <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-blue-100">
    🎬 Entertainment
  </span>

  <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-blue-100">
    💡 Inspiration
  </span>

  <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-blue-100">
    🤖 Technology
  </span>
</div>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
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
  <div className="mt-14">
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid md:grid-cols-[1fr_1.2fr]">
    <div className="relative min-h-[260px]">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
        alt="DSNEXT Community Issue 01"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/60" />
      <div className="relative z-10 p-8 text-white h-full flex flex-col justify-end">
        <span className="inline-block w-fit px-4 py-1 rounded-full bg-white/20 text-sm font-semibold mb-4">
          Latest Community Bulletin
        </span>
        <h2 className="text-3xl font-bold">Issue 01</h2>
        <p className="text-blue-100 mt-2">Culture, Technology & Inspiration</p>
      </div>
    </div>

    <div className="p-8 md:p-10 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Read the first DSNEXT Community issue
      </h2>

      <p className="text-gray-600 text-lg leading-8 mb-8">
        Explore monthly highlights, AI trends, learning recommendations,
        entertainment picks and community inspiration in a colorful magazine-style
        issue.
      </p>

      <Link
        to="/community/issue-01"
        className="inline-flex w-fit items-center justify-center px-7 py-4 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800 transition-colors shadow-lg"
      >
        Read Issue 01 →
      </Link>
    </div>
  </div>
</div>
        </div>
      </Section>
    </div>
  );
};

export default CommunityPage;