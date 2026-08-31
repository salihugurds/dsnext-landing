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
{/* Community Issues */}
<div className="mt-14 space-y-10">
  {/* Issue 03 */}
<div className="grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl md:grid-cols-[1fr_1.2fr]">
  <div className="relative min-h-[280px]">
    <img
      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop"
      alt="DSNEXT Community Issue 03"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-indigo-950/75 to-purple-900/55" />

    <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-8 text-white">
<span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-cyan-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md">
  <span className="h-2 w-2 rounded-full bg-green-500" />
  Latest Issue
</span>

      <h2 className="text-4xl font-black">Issue 03</h2>

      <p className="mt-2 text-cyan-100">
        AI Agents, Zero Trust & Cybersecurity
      </p>

      <p className="mt-4 text-sm font-semibold text-white/80">
        August 2026
      </p>
    </div>
  </div>

  <div className="flex flex-col justify-center p-8 md:p-10">
    <span className="text-sm font-bold uppercase tracking-widest text-indigo-700">
      DSNEXT Community Bulletin
    </span>

    <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
      Explore the August 2026 edition
    </h2>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      Explore AI agents, Zero Trust, cybersecurity, AI infrastructure,
      agent identity, governance, practical security guidance, and this
      month’s learning recommendations.
    </p>

    <Link
      to="/community/issue-03"
      className="mt-8 inline-flex w-fit items-center justify-center rounded-xl bg-indigo-700 px-7 py-4 font-bold text-white shadow-lg transition-colors hover:bg-indigo-800"
    >
      Read Issue 03 →
    </Link>
  </div>
</div>
  {/* Issue 02 */}
  <div className="grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl md:grid-cols-[1fr_1.2fr]">
    <div className="relative min-h-[280px]">
      <img
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
        alt="DSNEXT Community Issue 02"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-blue-950/70 to-purple-900/50" />

      <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-8 text-white">
   <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
  Previous Issue
</span>

        <h2 className="text-4xl font-black">Issue 02</h2>

        <p className="mt-2 text-cyan-100">
          Cybersecurity, Technology & Community
        </p>

        <p className="mt-4 text-sm font-semibold text-white/80">
          July 2026
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-center p-8 md:p-10">
      <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
        DSNEXT Community Bulletin
      </span>

      <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
        Explore the July 2026 edition
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Read about the Ankara NATO Summit, Türkiye’s VNL victory,
        cybersecurity developments, AI-powered threats, learning
        recommendations, and July’s entertainment highlights.
      </p>

      <Link
        to="/community/issue-02"
        className="mt-8 inline-flex w-fit items-center justify-center rounded-xl bg-purple-700 px-7 py-4 font-bold text-white shadow-lg transition-colors hover:bg-purple-800"
      >
        Read Issue 02 →
      </Link>
    </div>
  </div>

  {/* Issue 01 */}
  <div className="grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl md:grid-cols-[1fr_1.2fr]">
    <div className="relative min-h-[280px]">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
        alt="DSNEXT Community Issue 01"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/60" />

      <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-8 text-white">
<span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
  Previous Issue
</span>

        <h2 className="text-4xl font-black">Issue 01</h2>

        <p className="mt-2 text-blue-100">
          Culture, Technology & Inspiration
        </p>

        <p className="mt-4 text-sm font-semibold text-white/80">
          June 2026
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-center p-8 md:p-10">
      <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
        DSNEXT Community Bulletin
      </span>

      <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
        Read the first DSNEXT Community issue
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Explore monthly highlights, AI trends, learning recommendations,
        entertainment picks, and community inspiration in our first edition.
      </p>

      <Link
        to="/community/issue-01"
        className="mt-8 inline-flex w-fit items-center justify-center rounded-xl bg-purple-700 px-7 py-4 font-bold text-white shadow-lg transition-colors hover:bg-purple-800"
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