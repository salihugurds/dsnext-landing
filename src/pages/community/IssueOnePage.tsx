import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/shared/Section";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const IssueOnePage: React.FC = () => {
  return (
    <div className="bg-[#f7f7fb] overflow-hidden">
      {/* Hero */}
      <div className="relative bg-[#070b2f] text-white pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-black" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/community"
            className="inline-flex items-center text-blue-100 hover:text-white mb-10 group"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Community
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-bold mb-6">
                DSNEXT COMMUNITY BULLETIN
              </span>

              <h1 className="text-6xl md:text-8xl font-black leading-none mb-5">
                Issue 01
              </h1>

              <p className="text-3xl md:text-4xl text-yellow-300 font-semibold italic mb-8">
                Culture, Technology & Inspiration
              </p>

              <p className="text-xl text-blue-100 leading-8 max-w-2xl">
                Monthly highlights from technology, learning, entertainment and
                our global community.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20">
                  📅 June 2026
                </span>
                <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20">
                  ⭐ First Edition
                </span>
                <span className="px-5 py-3 rounded-full bg-white/10 border border-white/20">
                  💜 DSNEXT Life
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white/10 border border-white/20 p-6 shadow-2xl backdrop-blur-md rotate-2">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                  alt="AI future"
                  className="rounded-3xl w-full h-[360px] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-6 bg-white text-gray-900 rounded-3xl shadow-2xl p-5 max-w-xs -rotate-3">
                <p className="text-4xl mb-2">🤖</p>
                <h3 className="font-bold text-xl">Let’s Explore!</h3>
                <p className="text-gray-600 text-sm">
                  AI, learning, culture and community highlights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section spacing="lg">
        <div className="max-w-6xl mx-auto">
          {/* Welcome */}
          <div className="grid md:grid-cols-[0.8fr_1.2fr_0.8fr] gap-8 items-center mb-16">
            <div className="bg-yellow-100 rounded-3xl p-8 shadow-lg rotate-[-2deg]">
              <div className="text-5xl mb-4">😊</div>
              <h2 className="text-3xl font-black text-gray-900">
                Welcome to the First Issue!
              </h2>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-8">
                Welcome to the first edition of the DSNEXT Community Bulletin.
                Every month, we bring together highlights from technology,
                business, learning, entertainment and culture.
              </p>
            </div>

            <div className="hidden md:block text-center">
              <div className="text-6xl mb-2">✈️</div>
              <p className="text-4xl font-black text-purple-700">
                Let’s Explore!
              </p>
            </div>
          </div>

          {/* Monthly Highlights */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">
              🌍 Monthly Highlights
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 group">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                  alt="World Cup"
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-8">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    SPORTS
                  </span>
                  <h3 className="text-2xl font-bold mt-4 mb-3">
                    2026 FIFA World Cup Kicks Off
                  </h3>
                  <p className="text-gray-600 leading-7">
                    The 2026 FIFA World Cup started in June, hosted by the
                    United States, Canada and Mexico. With 48 national teams,
                    it became one of the biggest global conversations.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 group">
                <img
                  src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1200&auto=format&fit=crop"
                  alt="AI action plan"
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-8">
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
                    TECHNOLOGY
                  </span>
                  <h3 className="text-2xl font-bold mt-4 mb-3">
                    Türkiye Announces New AI Action Plan
                  </h3>
                  <p className="text-gray-600 leading-7">
                    Türkiye introduced its 2026–2030 AI Action Plan, focusing on
                    education, startups, data centers and AI adoption in public
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology + Learning */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-purple-900 text-white p-8 shadow-2xl">
              <div className="text-5xl mb-5">🤖</div>
              <h2 className="text-3xl font-black mb-4">
                Technology Spotlight
              </h2>
              <h3 className="text-2xl font-bold mb-4">
                Generative AI Continues to Expand
              </h3>
              <p className="text-blue-100 leading-8">
                Generative AI is becoming a standard tool across industries.
                Organizations are adopting AI-powered solutions for software
                development, content creation, customer support and automation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                📚 Learning Corner
              </h2>

              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  {
                    title: "Atomic Habits",
                    label: "Book",
                    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
                  },
                  {
                    title: "Start With Why",
                    label: "TED Talk",
                    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
                  },
                  {
                    title: "Learning How to Learn",
                    label: "Course",
                    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-4">
                      <span className="text-purple-700 text-xs font-bold">
                        {item.label}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-2">
                        {item.title}
                      </h3>
                      <p className="text-yellow-400 mt-2">★★★★★</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Entertainment + Quote */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                🎬 Entertainment Picks
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop"
                    alt="Series"
                    className="w-28 h-36 rounded-2xl object-cover"
                  />
                  <div>
                    <span className="text-purple-700 text-xs font-bold">
                      Recommended Series
                    </span>
                    <h3 className="text-xl font-bold mt-2">The Bear</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      A strong story about pressure, leadership and teamwork.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=800&auto=format&fit=crop"
                    alt="Turkish production"
                    className="w-28 h-36 rounded-2xl object-cover"
                  />
                  <div>
                    <span className="text-purple-700 text-xs font-bold">
                      Turkish Production
                    </span>
                    <h3 className="text-xl font-bold mt-2">Magarsus</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      One of the talked-about Turkish productions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-blue-700 text-white p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-52 h-52 bg-white/10 rounded-full" />
              <div className="text-5xl mb-5">💡</div>
              <h2 className="text-3xl font-black mb-5">
                Quote of the Month
              </h2>
              <p className="text-3xl font-bold leading-tight">
                “Getting 1% better every day can transform your life within a
                year.”
              </p>
              <p className="mt-6 text-yellow-300 font-bold">— James Clear</p>
            </div>
          </div>

          {/* Looking Ahead */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              🔭 Looking Ahead
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>✅ Artificial Intelligence developments</p>
              <p>✅ Emerging technology trends</p>
              <p>✅ Learning opportunities</p>
              <p>✅ Industry news</p>
              <p>✅ Community recommendations</p>
              <p>✅ And much more!</p>
            </div>

            <div className="mt-8 bg-yellow-100 rounded-2xl p-6">
              <p className="font-bold text-gray-900">
                Thanks for being part of the DSNEXT community. See you next
                month 👋
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default IssueOnePage;