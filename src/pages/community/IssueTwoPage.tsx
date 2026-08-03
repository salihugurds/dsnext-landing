import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  KeyIcon,
  ArrowPathIcon,
  CircleStackIcon,
  UserGroupIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/shared/Section";

interface TrendingTopic {
  id: string;
  title: string;
}

interface LearningItem {
  id: string;
  type: string;
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

interface SecurityTip {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const trendingTopics: TrendingTopic[] = [
  { id: "1", title: "NATO Ankara Summit" },
  { id: "2", title: "Filenin Sultanları" },
  { id: "3", title: "Defence Industry" },
  { id: "4", title: "Forest Fires" },
  { id: "5", title: "YKS Preference Period" },
  { id: "6", title: "LGS Preferences" },
  { id: "7", title: "Super League Transfers" },
  { id: "8", title: "Summer Temperatures" },
];

const learningItems: LearningItem[] = [
  {
    id: "1",
    type: "Book of the Month",
    title: "Atomic Habits",
    description:
      "James Clear explains how small habits can create remarkable long-term changes in personal and professional life.",
    href: "https://jamesclear.com/atomic-habits",
    imageUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    type: "TED Talk of the Month",
    title: "How Great Leaders Inspire Action",
    description:
      "Simon Sinek explores why successful leaders and organizations begin with a clear sense of purpose.",
    href: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    type: "Free Course of the Month",
    title: "Introduction to Artificial Intelligence",
    description:
      "A Turkish-language introductory course from BTK Academy covering core AI concepts, applications, and working principles.",
    href: "https://www.btkakademi.gov.tr",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

const securityTips: SecurityTip[] = [
  {
    id: "1",
    title: "Increase AI Awareness",
    description:
      "Train employees to recognize AI-generated phishing messages, fake content, and social engineering attempts.",
    icon: UserGroupIcon,
  },
  {
    id: "2",
    title: "Enable MFA",
    description:
      "Use multi-factor authentication for all corporate accounts and critical systems.",
    icon: KeyIcon,
  },
  {
    id: "3",
    title: "Apply Security Updates",
    description:
      "Keep software, operating systems, libraries, and infrastructure components up to date.",
    icon: ArrowPathIcon,
  },
  {
    id: "4",
    title: "Test Backups",
    description:
      "Regularly test backups and incident response plans for business-critical systems.",
    icon: CircleStackIcon,
  },
  {
    id: "5",
    title: "Provide Regular Training",
    description:
      "Create an ongoing cybersecurity awareness programme instead of relying on one-time training.",
    icon: AcademicCapIcon,
  },
];

const IssueTwoPage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-slate-50">
      {/* Hero */}
      <div className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1800&auto=format&fit=crop"
          alt="Cybersecurity technology"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/95 to-purple-950/80" />

        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <Link
            to="/community"
            className="group mb-12 inline-flex items-center text-blue-100 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Community
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur-md">
                DSNEXT COMMUNITY · ISSUE 02
              </span>

              <h1 className="mb-6 text-5xl font-black leading-none sm:text-6xl md:text-7xl">
                July 2026
              </h1>

              <p className="mb-6 text-3xl font-bold text-cyan-300 md:text-4xl">
                Cybersecurity, Technology & Community
              </p>

              <p className="max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
                This month’s edition brings together major developments from
                Türkiye and the world, technology insights, learning
                recommendations, entertainment highlights, and practical
                cybersecurity guidance.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Cybersecurity",
                  "AI",
                  "Community",
                  "Learning",
                  "Entertainment",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop"
                  alt="Digital cybersecurity infrastructure"
                  className="h-[390px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-7 -left-5 max-w-xs -rotate-2 rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
                <ShieldCheckIcon className="mb-3 h-10 w-10 text-blue-700" />
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                  Featured topic
                </p>
                <h2 className="mt-2 text-xl font-black">
                  AI-Powered Cyber Threats
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Section spacing="lg">
        <div className="mx-auto max-w-7xl">
          {/* Introduction */}
          <motion.div
            className="mb-16 grid gap-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:grid-cols-[0.8fr_1.2fr] md:p-12"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-50 p-8">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Welcome Note
              </span>
              <h2 className="mt-4 text-4xl font-black text-slate-900">
                Welcome to Issue 02
              </h2>
            </div>

            <div className="flex items-center">
              <p className="text-lg leading-8 text-slate-600">
                In July, global politics, sports achievements, education,
                technology, and cybersecurity shaped the public agenda. This
                issue combines these developments with practical insights and
                monthly recommendations for the DSNEXT community.
              </p>
            </div>
          </motion.div>

          {/* Major Stories */}
          <div className="mb-16">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-bold uppercase tracking-wider text-blue-700">
                  This Month
                </span>
                <h2 className="mt-2 text-4xl font-black text-slate-900">
                  Major Stories
                </h2>
              </div>

              <p className="max-w-xl text-slate-600">
                Two developments stood out in Türkiye’s political and sporting
                agenda.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.article
                className="group overflow-hidden rounded-3xl bg-white shadow-xl"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1400&auto=format&fit=crop"
                    alt="International summit"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    GLOBAL AGENDA
                  </span>

                  <h3 className="mt-5 text-3xl font-black text-slate-900">
                    Ankara NATO Summit
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Türkiye hosted the NATO Heads of State and Government
                    Summit in Ankara on 7–8 July 2026. The summit brought
                    together international leaders to discuss security,
                    cooperation, and strategic priorities.
                  </p>

                  <a
                    href="https://www.nato.int/en/news-and-events/events/2026/07/overview---2026-nato-summit-in-ankara-"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center font-bold text-blue-700 hover:text-blue-900"
                  >
                    Read official overview
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.article>

              <motion.article
                className="group overflow-hidden rounded-3xl bg-white shadow-xl"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=1400&auto=format&fit=crop"
                    alt="Women's volleyball team"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">
                    SPORTS
                  </span>

                  <h3 className="mt-5 text-3xl font-black text-slate-900">
                    Filenin Sultanları Win VNL
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Türkiye’s Women’s National Volleyball Team defeated Brazil
                    3–1 in the 2026 VNL final, adding another major success to
                    the country’s international volleyball achievements.
                  </p>

                  <a
                    href="https://www.fivb.com/turkiye-shine-the-brightest-and-secure-their-first-ever-vnl-gold/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center font-bold text-rose-700 hover:text-rose-900"
                  >
                    View the tournament story
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>

          {/* Trending Topics */}
          <div className="mb-16 rounded-3xl bg-slate-950 p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <FireIcon className="h-12 w-12 text-orange-400" />

                <h2 className="mt-5 text-4xl font-black">
                  July’s Most Discussed Topics
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Politics, sports, education, environmental risks, and the
                  summer transfer market shaped July’s public conversation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {trendingTopics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md"
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: "rgba(255,255,255,0.16)",
                    }}
                  >
                    <span className="text-sm font-bold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 font-semibold">{topic.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Did You Know */}
          <motion.div
            className="mb-16 overflow-hidden rounded-3xl bg-amber-100 shadow-xl"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1400&auto=format&fit=crop"
                  alt="Mobile emergency alert"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                  <span className="text-6xl font-black text-amber-300">
                    16M+
                  </span>
                  <p className="mt-2 text-xl font-bold">
                    users received earthquake alerts
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <span className="font-bold uppercase tracking-wider text-amber-800">
                  Did You Know?
                </span>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Android Earthquake Warnings Reached Millions
                </h2>

                <p className="mt-5 leading-8 text-slate-700">
                  A July 2026 academic study reported that Android earthquake
                  early warnings reached more than 16 million users during the
                  2025 Marmara Ereğlisi earthquake. The system detected the
                  earthquake approximately 5.3 seconds after it began and
                  provided some users with advance warning before strong
                  shaking was felt.
                </p>

                <a
                  href="https://arxiv.org/abs/2607.08975"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center font-bold text-amber-900"
                >
                  View the academic study
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Learning */}
          <div className="mb-16">
            <div className="mb-8">
              <span className="font-bold uppercase tracking-wider text-purple-700">
                Learning Corner
              </span>
              <h2 className="mt-2 text-4xl font-black text-slate-900">
                Learn Something New
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {learningItems.map((item) => (
                <motion.article
                  key={item.id}
                  className="group overflow-hidden rounded-3xl bg-white shadow-xl"
                  whileHover={{ y: -7 }}
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-7">
                    <span className="text-sm font-bold uppercase tracking-wider text-purple-700">
                      {item.type}
                    </span>

                    <h3 className="mt-3 text-2xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center font-bold text-purple-700"
                    >
                      Explore
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Entertainment */}
          <div className="mb-16 rounded-3xl bg-white p-8 shadow-xl md:p-12">
            <div className="mb-8">
              <span className="font-bold uppercase tracking-wider text-rose-700">
                Entertainment
              </span>
              <h2 className="mt-2 text-4xl font-black text-slate-900">
                July’s Popular Picks
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-rose-50 p-7">
                <span className="text-4xl">🎬</span>
                <p className="mt-5 text-sm font-bold uppercase text-rose-700">
                  Most Watched Film
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Enola Holmes 3
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The third film in the popular mystery series was among the
                  most watched titles on Netflix Türkiye in July.
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-7">
                <span className="text-4xl">📺</span>
                <p className="mt-5 text-sm font-bold uppercase text-blue-700">
                  Most Watched Series
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Zeytin Ağacı (Another Self) 
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The new season of the Turkish drama became one of the
                  platform’s leading series during the month.
                </p>
              </div>

              <div className="rounded-3xl bg-purple-50 p-7">
                <span className="text-4xl">🎵</span>
                <p className="mt-5 text-sm font-bold uppercase text-purple-700">
                  Most Streamed Song
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Hileli
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The collaboration between Manifest and Ajda Pekkan stood out
                  among the month’s most streamed Turkish-language releases.
                </p>
              </div>
            </div>
          </div>

          {/* Cybersecurity Feature */}
          <div className="mb-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1500&auto=format&fit=crop"
                  alt="Cybersecurity operations"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-slate-950" />
              </div>

              <div className="p-8 md:p-12 lg:p-14">
                <ShieldCheckIcon className="h-14 w-14 text-cyan-300" />

                <span className="mt-8 block text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Featured Bulletin Topic
                </span>

                <h2 className="mt-4 text-4xl font-black md:text-5xl">
                  AI-Powered Cyber Threats
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  AI-supported attacks, advanced phishing techniques, and the
                  need for stronger institutional cyber resilience were among
                  July’s priority security topics. As threats become more
                  dynamic, organizations must update their security strategies,
                  employee awareness programmes, and incident response
                  practices.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "AI Phishing",
                    "Cyber Resilience",
                    "MFA",
                    "Incident Response",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Tips */}
          <div className="mb-16">
            <div className="mb-8 max-w-3xl">
              <span className="font-bold uppercase tracking-wider text-blue-700">
                DSNEXT Security Guide
              </span>
              <h2 className="mt-2 text-4xl font-black text-slate-900">
                What Technology Companies Should Do
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Five practical actions organizations can implement to improve
                their cybersecurity posture.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {securityTips.map((tip, index) => {
                const Icon = tip.icon;

                return (
                  <motion.div
                    key={tip.id}
                    className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg"
                    whileHover={{ y: -7 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                      <Icon className="h-7 w-7 text-blue-700" />
                    </div>

                    <span className="mt-5 block text-sm font-bold text-blue-700">
                      0{index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-black text-slate-900">
                      {tip.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {tip.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://siberguvenlik.gov.tr/guvenlik-bildirimleri/detay/tr-26-0272"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-800"
              >
                Security Bulletin
                <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
              </a>

              <a
                href="https://www.aa.com.tr/tr/gundem/icisleri-bakani-ciftci-siber-guvenlik-toplantisina-baskanlik-etti/4004004"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition-colors hover:bg-slate-100"
              >
                Related News
                <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-700 via-purple-700 to-blue-700 p-8 text-white shadow-2xl md:p-12"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <LightBulbIcon className="relative h-14 w-14 text-yellow-300" />

            <p className="relative mt-7 max-w-5xl text-3xl font-black leading-tight md:text-4xl">
              “You don’t have to be great to start, but you have to start to be
              great.”
            </p>

            <p className="relative mt-6 font-bold text-yellow-300">
              — Zig Ziglar
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default IssueTwoPage;