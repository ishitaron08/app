import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AIPage from './components/Ai'
import {
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Layers3,
  Network,
  Play,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react'

const heroStats = [
  {
    label: 'UI fragments generated daily',
    value: '8,400',
    detail: 'Buttons, tables, charts, and alerts assembled in seconds.',
  },
  {
    label: 'Runbooks rewritten by the assistant',
    value: '63%',
    detail: 'Prompts hydrate Ansible or Terraform steps with live context.',
  },
  {
    label: 'Average response time',
    value: '640 ms',
    detail: 'Streaming answers with inline tool outputs and guardrails.',
  },
]

const useCases = [
  {
    id: 'generative-ui',
    eyebrow: 'Generative UI',
    title: 'Instant interface drafting',
    description:
      'Request a revenue cockpit or onboarding flow and the assistant ships JSX, copy, and motion cues in one response.',
    prompt: 'mock a billing dashboard with KPIs',
    icon: Boxes,
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tool-orbits',
    eyebrow: 'Tool linking',
    title: 'APIs wired to chat',
    description:
      'Drop in curl snippets or SDK calls and the conversation replies with formatted tables, charts, or alerts without leaving the thread.',
    prompt: 'call the incidents API and summarize',
    icon: ServerCog,
    image:
      'https://images.unsplash.com/photo-1473926534671-0bb6e9e490b9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'devops-remix',
    eyebrow: 'DevOps assist',
    title: 'Contextual runbooks',
    description:
      'Mention Terraform or Ansible and it pivots to validated commands, showing only the DevOps surface you actually need.',
    prompt: 'plan a blue/green rollout with terraform',
    icon: Layers3,
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'signal-clarity',
    eyebrow: 'Insights',
    title: 'Narrated observability',
    description:
      'Paste logs or metrics and the UI stitches them into tidy storyboards with filters, annotations, and follow-up prompts.',
    prompt: 'turn this log burst into a summary',
    icon: Network,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
]

const resourceButtons = [
  {
    label: 'Generative UI prompt book',
    action: 'Browse gallery',
  },
  {
    label: 'Component handoff kit',
    action: 'Download assets',
  },
  {
    label: 'DevOps guardrails pack',
    action: 'Open controls',
  },
]

const assistantHighlights = [
  {
    icon: Boxes,
    title: 'Compose adaptive layouts',
    description:
      'Describe the flow you need and get JSX, copy, and Tailwind classes for dashboards, chat panes, or onboarding wizards.',
  },
  {
    icon: ServerCog,
    title: 'Wire tools into the chat',
    description:
      'Hook any API or script and the assistant returns structured responses, tables, or charts inside the conversation.',
  },
  {
    icon: BrainCircuit,
    title: 'Keep DevOps in the loop',
    description:
      'When you mention deployments or drift, it pivots to infra-ready runbooks while staying within the same prompt thread.',
  },
]

const faqs = [
  {
    id: 'ui-synthesis',
    question: 'How does the assistant build UI so quickly?',
    answer:
      'Every prompt is parsed into components, layout hints, and copy. The assistant streams JSX plus Tailwind classes that you can paste directly into your repo.',
  },
  {
    id: 'devops-context',
    question: 'Will it still understand Docker, Ansible, or Terraform asks?',
    answer:
      'Yes. Mention an infra tool and it pivots to runbooks, plans, or inventories, but it keeps the conversation inside the same elegant interface.',
  },
  {
    id: 'security',
    question: 'How is data handled?',
    answer:
      'Sessions stay in-region, secrets are redacted before logging, and the assistant only executes the tools you explicitly authorize.',
  },
]

function LandingPage() {
  const [openFaq, setOpenFaq] = useState(faqs[0].id)
  const navigate = useNavigate()

  return (
    <div className="bg-transparent text-[#091717]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-[160px] px-6 pb-[160px] pt-[120px] sm:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] rounded-[120px] bg-[#fbfaf4]" />

                <header className="sticky top-6 z-20">
          <div className="flex items-center justify-between rounded-[50px] border border-[#e4e3d4] bg-white/70 px-6 py-4 shadow-[0_24px_40px_rgba(0,0,0,0.05)] backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e3d4] text-sm font-[600] tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                AI
              </div>
              <p className="text-xs uppercase tracking-[0.32em]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                AI Studio
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/ai')}
                className="rounded-[50px] border border-[#e4e3d4] px-5 py-2 text-sm font-medium text-[#091717] transition hover:bg-white/80"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                Talk to AI
              </button>
              <button className="rounded-[50px] border border-[#e4e3d4] px-5 py-2 text-sm font-medium text-[#091717] transition hover:bg-white/80"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                Product Tour
              </button>
              <button className="inline-flex items-center gap-2 rounded-[54px] border border-[#1fb8cd]/40 bg-gradient-to-b from-[#299da9] via-[#21808d] to-[#0f1916] px-6 py-2 text-base text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.08)] transition hover:brightness-110"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                Launch mission
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10">
                  <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-10 rounded-[120px] border border-[#e4e3d4] bg-white/60 p-10 shadow-[0_24px_40px_rgba(0,0,0,0.05)] backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-5">
              <p className="text-xl uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                Conversational studio // Generative UI
              </p>
              <h1
                className="max-w-3xl text-[56px] leading-[1.05] tracking-tight text-[#091717] sm:text-[72px] lg:text-[84px]"
                style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}
              >
                Build interfaces by talking to an assistant.
              </h1>
              <p
                className="max-w-2xl text-lg text-[#091717]/80 sm:text-2xl"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
              >
                Describe the workflow, tone, or data you need and the AI composes JSX, copy, and motion cues in real time. If you mention Docker, Ansible, or Terraform, it still knows how to respond—but the spotlight stays on your generative UI copilot.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/ai')}
                  className="inline-flex items-center gap-3 rounded-[54px] border border-[#1fb8cd]/40 bg-gradient-to-b from-[#299da9] via-[#21808d] to-[#0f1916] px-8 py-4 text-lg text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.08)] transition hover:translate-y-[-2px]"
                  style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  Start Generating
                  <ArrowUpRight strokeWidth={1.5} className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center gap-3 rounded-[54px] border border-[#e4e3d4] bg-[#fbfaf4] px-8 py-4 text-lg text-[#091717] transition hover:bg-white"
                  style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  Watch demo
                  <Play strokeWidth={1.5} className="h-5 w-5" />
                </button>
              </div>
            </div>
            </div>
          </section>

        <section className="flex flex-col gap-10 rounded-[120px] border border-[#e4e3d4] bg-white/60 p-10 shadow-[0_24px_40px_rgba(0,0,0,0.05)] backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-5">
              <p className="text-xl uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                Conversational systems // Product & Ops
              </p>
              <h2
                className="max-w-3xl text-[48px] leading-[1.05] tracking-tight text-[#091717] sm:text-[64px] lg:text-[72px]"
                style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}
              >
                Sketch the experience, route tools, and keep DevOps nearby without stealing the show.
              </h2>
              <p
                className="max-w-2xl text-lg text-[#091717]/80 sm:text-2xl"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
              >
                The assistant streams layouts, copy, and data wiring suggestions as you type. When you bring up deployments or diagnostics, it slips in runbooks and guardrails—still within the same elegant canvas.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/ai')}
                  className="inline-flex items-center gap-3 rounded-[54px] border border-[#1fb8cd]/40 bg-gradient-to-b from-[#299da9] via-[#21808d] to-[#0f1916] px-8 py-4 text-lg text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.08)] transition hover:translate-y-[-2px]"
                  style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  Open the studio
                  <ArrowUpRight strokeWidth={1.5} className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center gap-3 rounded-[54px] border border-[#e4e3d4] bg-[#fbfaf4] px-8 py-4 text-lg text-[#091717] transition hover:bg-white"
                  style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  Peek conversation log
                  <Play strokeWidth={1.5} className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative h-[360px] w-full max-w-md overflow-hidden rounded-[32px] border border-[#e4e3d4] bg-[#091717] p-6 text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(140deg, rgba(9,23,23,0.9), rgba(33,128,141,0.65)), url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] opacity-70" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                    Sample thread
                  </p>
                  <p className="text-3xl leading-snug" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
                    “Sketch a release health panel, then give me the Terraform diff if prod looks spicy.”
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  <div className="rounded-[16px] border border-white/30 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">AI response</p>
                    <p className="mt-2 text-base">
                      • Layout: KPI strip + incident feed
                      <br />• Components shipped to App.jsx
                      <br />• Terraform: 2 drifts flagged, plan attached
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-white/30 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">Next action</p>
                    <p className="mt-2 text-base">
                      Paste the JSX or let the assistant apply it in the `/ai` workspace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {assistantHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-[32px] border border-[#e4e3d4] bg-[#f6f5ee] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-[#091717]/10 bg-white p-3">
                    <highlight.icon strokeWidth={1.5} className="h-6 w-6 text-[#21808d]" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                    {highlight.title}
                  </p>
                </div>
                <p className="mt-4 text-base text-[#091717]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
              DevOps stays within reach
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-[#e4e3d4] bg-[#f6f5ee] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                    {stat.label}
                  </p>
                  <p className="mt-4 text-5xl tracking-tight text-[#091717]" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
                    {stat.value}
                  </p>
                  <p className="mt-3 text-base text-[#091717]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-xl uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
              What to ask the assistant
            </p>
            <h2 className="text-[48px] leading-tight tracking-tight" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
              A 2×2 grid of conversational moves
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((item) => (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between rounded-[24px] border border-[#60584d1a] bg-[#f6f5ee]/80 p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-0 rounded-[24px] opacity-40" style={{ backgroundImage: `linear-gradient(135deg, rgba(9,23,23,0.9), rgba(33,128,141,0.45)), url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="relative space-y-6 text-[#fbfaf4]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-white/30 bg-white/10 p-3">
                      <item.icon strokeWidth={1.5} className="h-6 w-6" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.3em]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                      {item.eyebrow}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl tracking-tight" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
                      {item.title}
                    </h3>
                    <p className="text-base text-white/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-[16px] border border-white/30 bg-[#f6f5ee] px-4 py-3 text-sm text-[#091717]" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                    <TerminalSquare strokeWidth={1.5} className="h-4 w-4" />
                    {item.prompt}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_0_9px_6px_-1px_rgba(33,128,141,0.16),inset_0_-21px_48px_rgba(33,128,141,0.45)]" />
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-[48px] border border-[#e4e3d4] bg-[#fbfaf4] p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xl uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                Resource hub
              </p>
              <h3 className="text-[40px] tracking-tight" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
                Grab a starter set for prompts, components, or guardrails
              </h3>
            </div>
            <p className="max-w-xl text-base text-[#091717]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
              Every artifact is versioned and signed. Start with the prompt book or component kit, and pull the DevOps guardrails only when you need to nudge infra.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {resourceButtons.map((resource) => (
              <button
                key={resource.label}
                className="flex h-[120px] flex-col justify-between rounded-[32px] border border-[#e4e3d4] bg-gradient-to-b from-[#f6f5ee] via-[#fbfaf4] to-white p-6 text-left shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
              >
                <span className="text-sm uppercase tracking-[0.3em] text-[#21808d]">{resource.label}</span>
                <span className="flex items-center gap-2 text-lg text-[#091717]">
                  {resource.action}
                  <ArrowUpRight strokeWidth={1.5} className="h-5 w-5" />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[120px] border border-[#e4e3d4] bg-white/70 p-8 shadow-[0_24px_40px_rgba(0,0,0,0.05)]">
            <div className="rounded-[32px] border border-[#e4e3d4] bg-[#091717] p-4 text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.25)]">
              <div className="rounded-[24px] border border-white/10 bg-black/30 p-4">
                <video
                  className="h-[360px] w-full rounded-[16px] border border-white/20 object-cover shadow-[0_19px_25px_rgba(0,0,0,0.3)]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <p className="text-xl uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                Video walkthrough
              </p>
              <h3 className="text-[40px] tracking-tight" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
                Observe a full-stack rollout in 90 seconds
              </h3>
              <p className="text-base text-[#091717]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                Docker builds, Ansible handoffs, Terraform plans, and observability wiring are all captured in one cinematic fly-through.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
              FAQ
            </p>
            {faqs.map((faq) => (
              <div key={faq.id} className="rounded-[24px] border border-[#e4e3d4] bg-white/80 p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === faq.id ? '' : faq.id)}
                >
                  <span className="text-xl tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontWeight: 500 }}>
                    {faq.question}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e4e3d4]">
                    <ShieldCheck strokeWidth={1.5} className={`h-5 w-5 transition ${openFaq === faq.id ? 'text-[#21808d]' : 'text-[#091717]'}`} />
                  </span>
                </button>
                {openFaq === faq.id && (
                  <p className="mt-4 text-base text-[#091717]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[120px] border border-[#e4e3d4] bg-gradient-to-b from-[#299da9] via-[#21808d] to-[#0f1916] p-12 text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.08)]">
          <div className="space-y-5">
            <p className="text-xl uppercase tracking-[0.3em] text-[#f6f5ee]/80" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
              Ready to dock
            </p>
            <h3 className="text-[48px] leading-tight tracking-tight" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
              Wire Docker, Ansible, and Terraform into a single command center.
            </h3>
            <p className="text-lg text-[#fbfaf4]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
              Fork the repo, update variables, and launch a galaxy of orchestrated environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-3 rounded-[54px] border border-white/30 bg-white/20 px-8 py-4 text-lg text-white transition hover:bg-white/30" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                Request onboarding deck
                <ArrowUpRight strokeWidth={1.5} className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-3 rounded-[54px] border border-white/30 bg-[#fbfaf4] px-8 py-4 text-lg text-[#091717] transition hover:-translate-y-1" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                Schedule mission brief
              </button>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#e4e3d4] pt-8 text-sm uppercase tracking-[0.3em] text-[#091717]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Ai Studio</span>
            <span>docker · ansible · terraform</span>
          </div>
          <span className="opacity-60">© {new Date().getFullYear()} Mission-ready automation field notes.</span>
        </footer>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ai" element={<AIPage />} />
    </Routes>
  )
}

export default App