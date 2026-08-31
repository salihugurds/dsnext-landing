import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  ShieldCheckIcon,
  KeyIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  LockClosedIcon,
  CpuChipIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/shared/Section";

interface HighlightItem {
  id: string;
  number: string;
  title: string;
  description: string;
  source: string;
  category: string;
}

interface SecurityStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const highlights: HighlightItem[] = [
  {
    id: "1",
    number: "01",
    title: "Autonomous AI Systems Expand the Security Debate",
    description:
      "Unexpected and unauthorized behavior observed during controlled security testing has pushed agent boundaries, permissions, identities, tools, and execution environments into the center of the AI security discussion.",
    source:
      "https://www.reuters.com/legal/litigation/openai-anthropic-ai-agents-implicated-new-security-breaches-2026-08-05/",
    category: "AI Security",
  },
  {
    id: "2",
    number: "02",
    title: "AI Infrastructure Investment Continues to Accelerate",
    description:
      "Nvidia's August results highlighted sustained demand for AI infrastructure, with data center revenue rising sharply year over year and continued strong growth expectations.",
    source:
      "https://www.reuters.com/business/media-telecom/nvidia-forecasts-quarterly-revenue-above-estimates-2026-08-26/",
    category: "AI Infrastructure",
  },
  {
    id: "3",
    number: "03",
    title: "AI Is Moving Beyond Text",
    description:
      "Google announced interactive simulations and model-building capabilities in Gemini, enabling users to explore complex concepts through tables, visual models, and interactive experiences.",
    source:
      "https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html",
    category: "Generative AI",
  },
  {
    id: "4",
    number: "04",
    title: "AI and Cybersecurity Are Growing Together",
    description:
      "As advanced AI systems become more capable, security monitoring, controls, and cyber resilience must evolve at the same pace.",
    source:
      "https://openai.com/index/pacing-model-development-cyber-capabilities/",
    category: "Cybersecurity",
  },
  {
    id: "5",
    number: "05",
    title: "Cyber Resilience Becomes Critical for Logistics",
    description:
      "Türkiye's growing role as a regional logistics hub is increasing the importance of cybersecurity across transportation, manufacturing, and connected supply-chain systems.",
    source:
      "https://www.aa.com.tr/tr/bilim-teknoloji/turkiyenin-bolgesel-lojistik-merkezi-rolunun-one-cikmasiyla-siber-guvenligin-de-onemi-artiyor/4037711",
    category: "Türkiye",
  },
  {
    id: "6",
    number: "06",
    title: "August in the Sky",
    description:
      "A total solar eclipse and the Perseid meteor shower made August notable not only for technology but also for science and skywatching.",
    source:
      "https://science.nasa.gov/solar-system/whats-up-august-2026-skywatching-tips-from-nasa/",
    category: "Science",
  },
];

const securitySteps: SecurityStep[] = [
  {
    id: "1",
    title: "Give Every Agent Its Own Identity",
    description:
      "Avoid shared service accounts. Use separate identities so each agent's access and actions can be traced clearly.",
    icon: UserGroupIcon,
  },
  {
    id: "2",
    title: "Start With Minimum Privilege",
    description:
      "Grant access only to the specific systems, data, and tools required for the agent's task.",
    icon: KeyIcon,
  },
  {
    id: "3",
    title: "Require Human Approval for Critical Actions",
    description:
      "Payments, deletions, external messaging, and production changes should include an explicit approval step.",
    icon: ShieldCheckIcon,
  },
  {
    id: "4",
    title: "Log Agent Activity",
    description:
      "Record which data was accessed, which tools were called, and which actions were completed.",
    icon: DocumentTextIcon,
  },
  {
    id: "5",
    title: "Treat Prompt Injection as an Attack Surface",
    description:
      "Assume hidden instructions inside websites, documents, and emails may influence agent behavior.",
    icon: ExclamationTriangleIcon,
  },
];

const IssueThreePage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-slate-50">
      {/* HERO */}
      <div className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop"
          alt="AI agent technology"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-indigo-950/95 to-purple-950/85" />
        <div className="absolute -right-24 top-16 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <Link
            to="/community"
            className="group mb-12 inline-flex items-center text-blue-100 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Community
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur-md">
                DSNEXT COMMUNITY · ISSUE 03
              </span>

              <h1 className="text-5xl font-black leading-none sm:text-6xl md:text-7xl">
                August 2026
              </h1>

              <p className="mt-6 text-3xl font-bold text-cyan-300 md:text-4xl">
                AI Agents, Zero Trust & Cybersecurity
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
                AI agents are becoming new digital actors inside organizations.
                This month, we explore what they can access, what they can do,
                and how enterprises can keep them controlled, observable, and secure.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "AI Agents",
                  "Zero Trust",
                  "Cybersecurity",
                  "AI Governance",
                  "Learning",
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
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
                  alt="Cybersecurity and AI"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-7 -left-5 max-w-xs -rotate-2 rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
                <CpuChipIcon className="mb-3 h-10 w-10 text-indigo-700" />
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
                  Featured Topic
                </p>
                <h2 className="mt-2 text-xl font-black">
                  AI Agents: New Digital Workers, New Security Boundary
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Section spacing="lg">
        <div className="mx-auto max-w-7xl">
          {/* FEATURED TOPIC */}
          <motion.div
            className="mb-16 grid gap-8 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl lg:grid-cols-[0.8fr_1.2fr]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                alt="AI infrastructure"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/60 to-transparent" />
            </div>

            <div className="p-8 md:p-12">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
                Featured Story
              </span>

              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                AI Agents: New Digital Workers, New Security Boundary
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The key question in enterprise AI is no longer only “What does
                the model know?” It is increasingly “What can it access, and
                what can it do on our behalf?”
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                AI agents can move beyond information retrieval and build
                workflows that lead directly to action. That makes identity,
                permissions, logging, and oversight central components of AI security.
              </p>

              <div className="mt-8 rounded-3xl bg-indigo-50 p-7">
                <p className="text-5xl font-black text-indigo-700">79%</p>
                <p className="mt-2 text-slate-700">
                  of technology leaders cited security, governance, or operations
                  among the top challenges when scaling AI inference.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://cloud.google.com/blog/topics/ai-infrastructure/state-of-ai-infrastructure-report-agent-governance-and-security"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-indigo-700 px-6 py-3 font-bold text-white hover:bg-indigo-800"
                >
                  Google Cloud
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="https://www.microsoft.com/en-us/security/blog/2026/08/04/advance-zero-trust-for-ai-new-tools-and-guidance-to-secure-ai-agents-and-devsecops/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-800 hover:bg-slate-100"
                >
                  Microsoft Security
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* HIGHLIGHTS */}
          <div className="mb-16">
            <span className="font-bold uppercase tracking-wider text-indigo-700">
              August Highlights
            </span>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              Developments Worth Following
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-indigo-100">
                      {item.number}
                    </span>

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href={item.source}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center font-bold text-indigo-700"
                  >
                    Source
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>

          {/* DID YOU KNOW */}
          <motion.div
            className="mb-16 overflow-hidden rounded-3xl bg-cyan-100 shadow-xl"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="relative min-h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop"
                  alt="Digital identity"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                  <EyeIcon className="h-12 w-12 text-cyan-300" />
                  <h3 className="mt-4 text-3xl font-black">
                    Did You Know?
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-black text-slate-900">
                  An AI Agent Can Also Be Treated as an Identity
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-700">
                  Just as employees have user accounts, roles, and permissions,
                  enterprise AI agents can be assigned their own digital identities.
                </p>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  This makes it possible to track which systems an agent accesses,
                  what actions it performs, and which permissions it uses.
                </p>

                <a
                  href="https://www.microsoft.com/en-us/power-platform/blog/2026/08/06/microsoft-entra-agent-id-for-dataverse/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center font-bold text-cyan-900"
                >
                  Learn more
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 1 MINUTE CONCEPT */}
          <div className="mb-16 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <LockClosedIcon className="h-14 w-14 text-cyan-300" />

                <span className="mt-6 block text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  One-Minute Concept
                </span>

                <h2 className="mt-3 text-4xl font-black">
                  What Is Zero Trust?
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-300">
                  Zero Trust is based on a simple principle: a user, device,
                  application, or agent is not automatically trusted just because
                  it is inside the network.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Verify every access request",
                    "Grant only minimum required privilege",
                    "Log access and actions",
                    "Reassess permissions when risk changes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/10 p-5"
                    >
                      <p className="font-semibold text-white">✓ {item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECURITY GUIDE */}
          <div className="mb-16">
            <span className="font-bold uppercase tracking-wider text-indigo-700">
              DSNEXT Security Guide
            </span>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              5 Steps for Using AI Agents Securely
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {securitySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    whileHover={{ y: -7 }}
                    className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">
                      <Icon className="h-7 w-7 text-indigo-700" />
                    </div>

                    <span className="mt-5 block text-sm font-bold text-indigo-700">
                      0{index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-black text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* LEARNING */}
          <div className="mb-16">
            <span className="font-bold uppercase tracking-wider text-purple-700">
              Learning Corner
            </span>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              Develop Yourself
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <motion.article
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1400&auto=format&fit=crop"
                  alt="Book"
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-sm font-bold uppercase text-purple-700">
                    Book of the Month
                  </span>

                  <h3 className="mt-3 text-3xl font-black">
                    The Psychology of Money
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Morgan Housel explores how financial decisions are shaped
                    not only by mathematics, but also by patience, behavior,
                    risk perception, and personal experience.
                  </p>

                  <a
                    href="https://www.morganhousel.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center font-bold text-purple-700"
                  >
                    Explore
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.article>

              <motion.article
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1400&auto=format&fit=crop"
                  alt="TED Talk"
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-sm font-bold uppercase text-purple-700">
                    TED Talk of the Month
                  </span>

                  <h3 className="mt-3 text-3xl font-black">
                    The Power of Vulnerability
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Brené Brown explores connection, empathy, vulnerability,
                    communication, and psychological safety.
                  </p>

                  <a
                    href="https://www.ted.com/talks/brene_brown_the_power_of_vulnerability"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center font-bold text-purple-700"
                  >
                    Watch the Talk
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>

          {/* MONTHLY QUESTION */}
          <motion.div
            className="mb-16 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 shadow-xl md:p-12"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <LightBulbIcon className="h-14 w-14 text-orange-600" />

            <span className="mt-6 block text-sm font-bold uppercase tracking-wider text-orange-700">
              Question of the Month
            </span>

            <h2 className="mt-4 max-w-5xl text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              If an AI agent could read your company email, access your CRM,
              and act on behalf of customers tomorrow, which three actions
              would you never allow it to perform without human approval?
            </h2>
          </motion.div>

          {/* DSNEXT NOTE */}
          <div className="mb-16 rounded-3xl bg-white p-8 shadow-xl md:p-12">
            <span className="font-bold uppercase tracking-wider text-indigo-700">
              DSNEXT Note
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Every New Capability Creates a New Trust Boundary
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Artificial intelligence adds a new layer of automation to organizations,
              but every new capability also creates a new security boundary.
              Successful AI transformation will increasingly depend not only on
              how powerful models become, but also on how controlled, observable,
              and accountable they are.
            </p>
          </div>

          {/* QUOTE */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-700 p-8 text-white shadow-2xl md:p-12"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />

            <p className="relative max-w-5xl text-3xl font-black leading-tight md:text-4xl">
              “The best way to predict the future is to create it.”
            </p>

            <p className="relative mt-6 font-bold text-yellow-300">
              — Peter Drucker
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default IssueThreePage;