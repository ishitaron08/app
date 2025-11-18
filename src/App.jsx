import { useState } from 'react'
import {
  ArrowUpRight,
  Boxes,
  Layers3,
  Network,
  Play,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react'

const heroStats = [
  {
    label: 'Docker images promoted each week',
    value: '42',
    detail: 'Signed & scanned through Trivy before release.',
  },
  {
    label: 'Ansible playbooks automated',
    value: '117',
    detail: 'Inventory-aware with drift detection + health gates.',
  },
  {
    label: 'Terraform states synchronized',
    value: '19',
    detail: 'Multi-cloud stacks tracked with remote locking.',
  },
]

const useCases = [
  {
    id: 'docker-delivery',
    eyebrow: 'Containers',
    title: 'Composable Docker delivery',
    description:
      'Layered Dockerfiles bake SBOM metadata, ship to provenance-aware registries, and hydrate preview clusters in 4 minutes.',
    prompt: 'docker compose -f ops/observability.yml up --build',
    icon: Boxes,
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ansible-mesh',
    eyebrow: 'Automation',
    title: 'Ansible service mesh',
    description:
      'Dynamic inventories target any cloud, while runbooks inject secrets from Vault and stream status into Slack + Grafana.',
    prompt: 'ansible-playbook site.yml -i inventory/edge.ini',
    icon: ServerCog,
    image:
      'https://images.unsplash.com/photo-1473926534671-0bb6e9e490b9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'terraform-control',
    eyebrow: 'Infrastructure',
    title: 'Terraform control plane',
    description:
      'Module registry codifies guard rails, while plan outputs stream into PR comments with drift IQ + policy packs.',
    prompt: 'terraform apply -var-file=env/prod.tfvars',
    icon: Layers3,
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'observability',
    eyebrow: 'Insights',
    title: 'Unified observability fabric',
    description:
      'Grafana, Loki, and Tempo recipes autowire via Ansible roles, feeding a cosmic map of SLOs and release hygiene.',
    prompt: 'helm upgrade --install nebula charts/observability',
    icon: Network,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
]

const resourceButtons = [
  {
    label: 'Docker governance pack',
    action: 'Download manifest',
  },
  {
    label: 'Ansible playbook library',
    action: 'Open collection',
  },
  {
    label: 'Terraform module kit',
    action: 'Clone registry',
  },
]

const faqs = [
  {
    id: 'pipeline',
    question: 'How do Docker, Ansible, and Terraform stay in sync?',
    answer:
      'Docker image promotions publish digests to Consul; Ansible pulls those tags through vars, while Terraform consumes the same source-of-truth via remote state outputs to guarantee artifact parity.',
  },
  {
    id: 'security',
    question: 'What keeps the supply chain secure?',
    answer:
      'Every build signs images with cosign, runs Trivy scans, and attaches SBOM files. Terraform Cloud policies verify signatures, and Ansible gate tasks halt if attestations are missing.',
  },
  {
    id: 'observability',
    question: 'Where can I inspect execution history?',
    answer:
      'A shared RunDeck timeline indexes Docker builds, Ansible jobs, and Terraform plans with correlated trace IDs so you can replay, diff, and audit every environment event.',
  },
]

function App() {
  const [openFaq, setOpenFaq] = useState(faqs[0].id)

  return (
    <div className="bg-transparent text-[#091717]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-[160px] px-6 pb-[160px] pt-[120px] sm:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] rounded-[120px] bg-[#fbfaf4]" />

        <header className="sticky top-6 z-20">
          <div className="flex items-center justify-between rounded-[50px] border border-[#e4e3d4] bg-white/70 px-6 py-4 shadow-[0_24px_40px_rgba(0,0,0,0.05)] backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e3d4] text-sm font-[600] tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                PN
              </div>
              <p className="text-xs uppercase tracking-[0.32em]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                DevOps Flight Ops
              </p>
            </div>
            <div className="flex items-center gap-3">
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
                Mission control // DevOps
              </p>
              <h1
                className="max-w-3xl text-[56px] leading-[1.05] tracking-tight text-[#091717] sm:text-[72px] lg:text-[84px]"
                style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}
              >
                Arveen ki mummy javan
              </h1>
              <p
                className="max-w-2xl text-lg text-[#091717]/80 sm:text-2xl"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
              >
                Build previews from Docker, stage infra with Terraform, and hydrate services through Ansible—every run logged, signed, and illuminated through a space-luxury interface.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-[54px] border border-[#1fb8cd]/40 bg-gradient-to-b from-[#299da9] via-[#21808d] to-[#0f1916] px-8 py-4 text-lg text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.08)] transition hover:translate-y-[-2px]"
                  style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  Deploy the stack
                  <ArrowUpRight strokeWidth={1.5} className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center gap-3 rounded-[54px] border border-[#e4e3d4] bg-[#fbfaf4] px-8 py-4 text-lg text-[#091717] transition hover:bg-white"
                  style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  Watch control room
                  <Play strokeWidth={1.5} className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative h-[320px] w-full max-w-sm overflow-hidden rounded-[32px] border border-[#e4e3d4] bg-[#091717] p-6 text-[#fbfaf4] shadow-[0_24px_40px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] opacity-70" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
                    Telemetry
                  </p>
                  <p className="text-4xl leading-tight" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
                    Live signals from Dockyard, Playbooks, and Terraform Cloud.
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                  <div className="flex items-center justify-between rounded-[16px] border border-white/30 bg-white/10 px-4 py-3">
                    <span>Ansible edge rollout</span>
                    <span className="text-[#1fb8cd]">In orbit</span>
                  </div>
                  <div className="flex items-center justify-between rounded-[16px] border border-white/30 bg-white/10 px-4 py-3">
                    <span>Terraform state sync</span>
                    <span className="text-[#f6f5ee]">Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4">
            <p className="text-xl uppercase tracking-[0.3em] text-[#21808d]" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
              Use cases
            </p>
            <h2 className="text-[48px] leading-tight tracking-tight" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>
              A 2×2 grid of DevOps rituals
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
                Pick a starter kit and launch a stack
              </h3>
            </div>
            <p className="max-w-xl text-base text-[#091717]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
              Every artifact is versioned and signed. Buttons below open curated manifests, inventories, or Terraform modules engineered for hybrid teams.
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
            <span>Comet DevOps Studio</span>
            <span>docker · ansible · terraform</span>
          </div>
          <span className="opacity-60">© {new Date().getFullYear()} Mission-ready automation field notes.</span>
        </footer>
      </div>
    </div>
  )
}

export default App
