import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Section from "../../components/shared/Section";

const news = [
  {title:"OpenAI Dots and the Agent Era",tag:"AI Agents",body:"AI agents are evolving into persistent digital colleagues with dedicated cloud environments, identities and permissions. The September briefing discusses Dots, agent controls and the expanding developer ecosystem."},
  {title:"DevDay: A New Developer Ecosystem",tag:"Developer Tools",body:"The briefing highlights GPT-6.1 Sol, Plugin Extensions, Sign in with ChatGPT and a marketplace among the developer announcements."},
  {title:"Amazon Kiro: Specification First",tag:"Software Engineering",body:"A spec-first workflow creates requirements.md, design.md and tasks.md before implementation. The briefing also warns about the CVE-2026-4295 issue affecting older Kiro versions."},
  {title:"Microsoft Project Zenith",tag:"Local AI",body:"A developer-class Windows 11 experience for running large AI models locally, with pricing and availability not yet detailed in the supplied briefing."},
];
const career = [
  ["01","System Architecture","Design how services, integrations and components work together."],
  ["02","AI Output Verification","Review generated code for correctness, security and maintainability."],
  ["03","Context Engineering","Define requirements, constraints and business rules clearly."],
  ["04","Agent Governance","Design permissions, approvals and traceable audit logs."],
];
const guide = [
  ["Start small","Choose reversible, low-risk tasks first."],
  ["Write the specification","Define requirements, design, tasks and completion criteria."],
  ["Apply least privilege","Give agents only the tools and data they need."],
  ["Keep human approval","Require approval for payments, deletions and external communication."],
  ["Review generated code","Use pull requests, tests and static analysis."],
  ["Patch your tools","Keep agent tooling updated and avoid untrusted project folders."],
  ["Maintain audit trails","Record which agent performed each action and under which permissions."],
  ["Track cost and local options","Evaluate token usage and suitable local-model alternatives."],
];
const films = ["Resident Evil", "Practical Magic 2", "Heart of the Beast", "Forgotten Island", "Primetime", "Avengers: Endgame – Encore"];
const reveal = {initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{duration:0.5}};
const IssueFourPage: React.FC = () => (
  <div className="overflow-hidden bg-slate-50 text-slate-900">
    <div className="relative flex min-h-[570px] items-center overflow-hidden bg-slate-950 text-white">
      <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Artificial intelligence visual" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-indigo-950/90 to-cyan-950/65" />
      <div className="container relative z-10 mx-auto px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <Link to="/community" className="mb-8 inline-block text-sm font-semibold text-cyan-200 hover:text-white">← Back to Community</Link>
        <motion.div {...reveal} className="max-w-4xl">
          <span className="rounded-full border border-cyan-300/40 bg-cyan-400/15 px-4 py-2 text-sm font-bold tracking-widest text-cyan-200">DSNEXT COMMUNITY · ISSUE 04 · SEPTEMBER 2026</span>
          <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">From AI Assistants to <span className="text-cyan-300">Digital Colleagues</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">AI agents, developer tools, Türkiye's AI adoption, emerging career skills and practical governance guidance.</p>
        </motion.div>
      </div>
    </div>
    <Section spacing="lg"><div className="mx-auto max-w-6xl space-y-20">
      <motion.section {...reveal} className="grid gap-8 rounded-3xl bg-white p-7 shadow-xl md:grid-cols-2 md:p-12">
        <div><span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Editor's Perspective</span><h2 className="mt-4 text-3xl font-black md:text-4xl">From Chat Windows to Always-On Agents</h2><p className="mt-5 leading-8 text-slate-600">The key change is not only what an AI model can answer, but what an agent can do. Agents can work in separate environments, use tools and act through assigned identities. This makes security, permissions, oversight and accountability central to modern AI adoption.</p></div>
        <div className="relative min-h-[260px] overflow-hidden rounded-2xl"><img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Technology and computer systems" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent"/><p className="absolute bottom-6 left-6 right-6 text-xl font-bold text-white">More autonomy requires more accountability.</p></div>
      </motion.section>
      <section><span className="text-sm font-bold uppercase tracking-widest text-indigo-600">01 / Developer World</span><h2 className="mb-8 mt-3 text-3xl font-black md:text-4xl">What's Shaping the Agent Era?</h2><div className="grid gap-6 md:grid-cols-2">{news.map((item,i)=><motion.article key={item.title} {...reveal} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"><span className="text-xs font-bold uppercase tracking-widest text-cyan-700">{item.tag} · 0{i+1}</span><h3 className="mt-3 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.body}</p></motion.article>)}</div></section>
      <section className="rounded-3xl bg-gradient-to-br from-indigo-950 to-blue-800 p-7 text-white md:p-12"><span className="text-sm font-bold uppercase tracking-widest text-cyan-300">02 / Türkiye in Numbers</span><h2 className="mt-3 text-3xl font-black">AI Adoption Is Rising</h2><p className="mt-4 text-blue-100">Figures reported in the supplied September briefing, attributed to TÜİK.</p><div className="mt-10 grid gap-8 md:grid-cols-2"><div className="rounded-2xl bg-white/10 p-6"><h3 className="font-bold">Individuals using generative AI</h3><div className="mt-6 space-y-5">{[["Previous",19.2],["Latest",37.6]].map(([label,val])=><div key={label}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><strong>{val}%</strong></div><div className="h-4 rounded-full bg-white/20"><div className="h-4 rounded-full bg-cyan-300" style={{width:`${Number(val)}%`}}/></div></div>)}</div></div><div className="rounded-2xl bg-white/10 p-6"><h3 className="font-bold">Businesses using AI</h3><div className="mt-6 space-y-5">{[["Previous",7.5],["Latest",14]].map(([label,val])=><div key={label}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><strong>{val}%</strong></div><div className="h-4 rounded-full bg-white/20"><div className="h-4 rounded-full bg-fuchsia-300" style={{width:`${Number(val)*2}%`}}/></div></div>)}</div></div></div><div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-white/10 p-5"><strong className="text-3xl text-cyan-300">64.9%</strong><p className="mt-2 text-sm">AI usage, ages 16–24</p></div><div className="rounded-xl bg-white/10 p-5"><strong className="text-3xl text-cyan-300">37.1%</strong><p className="mt-2 text-sm">Businesses with 250+ employees</p></div><div className="rounded-xl bg-white/10 p-5"><strong className="text-3xl text-cyan-300">51%</strong><p className="mt-2 text-sm">AI-using businesses applying it in marketing and sales</p></div></div></section>
      <section><span className="text-sm font-bold uppercase tracking-widest text-indigo-600">03 / Career Radar</span><h2 className="mb-8 mt-3 text-3xl font-black">Four Skills That Matter</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{career.map(([num,title,body])=><div key={num} className="rounded-2xl bg-white p-6 shadow-md"><span className="text-4xl font-black text-indigo-200">{num}</span><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></div>)}</div></section>
      <section className="rounded-3xl bg-white p-7 shadow-xl md:p-12"><span className="text-sm font-bold uppercase tracking-widest text-indigo-600">04 / DSNEXT Practical Guide</span><h2 className="mt-3 text-3xl font-black">Eight Rules for Using AI Agents Responsibly</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{guide.map(([title,body],i)=><div key={title} className="flex gap-4 rounded-2xl bg-slate-50 p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 font-black text-indigo-700">{i+1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{body}</p></div></div>)}</div></section>
      <section className="grid gap-6 md:grid-cols-2"><div className="rounded-3xl bg-cyan-50 p-8"><span className="text-sm font-bold text-cyan-800">05 / Did You Know?</span><h2 className="mt-3 text-2xl font-black">The Original Computer “Bug”</h2><p className="mt-4 leading-7 text-slate-700">On September 9, 1947, a moth was found in a relay of Harvard's Mark II computer and taped into a logbook. The term “bug” was already used in engineering; the famous incident helped popularize the story.</p></div><div className="rounded-3xl bg-violet-50 p-8"><span className="text-sm font-bold text-violet-800">06 / Community Question</span><h2 className="mt-3 text-2xl font-black">What Would You Delegate?</h2><p className="mt-4 leading-7 text-slate-700">If an AI agent joined your team tomorrow, which task would you delegate first—and which actions would always require human approval?</p></div></section>
      <section><span className="text-sm font-bold uppercase tracking-widest text-indigo-600">07 / Culture & Entertainment</span><h2 className="mt-3 text-3xl font-black">September Watchlist</h2><p className="mt-4 text-slate-600">Titles highlighted in the submitted editorial selection.</p><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{films.map((f,i)=><div key={f} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-xs font-bold text-indigo-600">PICK 0{i+1}</span><h3 className="mt-2 text-lg font-bold">🎬 {f}</h3></div>)}</div></section>
      <section className="rounded-3xl bg-gradient-to-r from-indigo-900 to-purple-800 p-9 text-center text-white md:p-14"><p className="text-xs font-bold uppercase tracking-widest text-cyan-200">DSNEXT Closing Note</p><h2 className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-snug md:text-4xl">The future of AI is not just capability. It's control, trust and accountability.</h2><p className="mt-6 text-indigo-100">Inspired by the September editorial theme of responsible technology.</p><Link to="/community" className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-bold text-indigo-800 hover:bg-cyan-100">Explore Other Issues →</Link></section>
    </div></Section>
  </div>
);
export default IssueFourPage;
