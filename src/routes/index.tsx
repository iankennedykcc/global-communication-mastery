import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/kcc-logo.png";
import hero from "@/assets/hero-architecture.jpg";
import facilitator from "@/assets/facilitator.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Communicating Clearly in English | KCC Flagship Workshop" },
      {
        name: "description",
        content:
          "A flagship workshop by Kennedy Consulting & Coaching for leaders and global teams who communicate in English across borders, cultures and stakeholders.",
      },
      { property: "og:title", content: "Communicating Clearly in English in Global Business Environments" },
      {
        property: "og:description",
        content:
          "Executive-level communication training for multinational teams. Practical, modern, and built around real business contexts.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Kennedy Consulting & Coaching" className="h-10 w-10 rounded-sm" width={40} height={40} />
          <div className="hidden sm:block leading-tight">
            <div className="text-ivory text-sm font-medium tracking-wide">KENNEDY</div>
            <div className="text-ivory/60 text-[10px] tracking-[0.2em]">CONSULTING & COACHING</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-ivory/80">
          <a href="#workshop" className="hover:text-gold transition">Workshop</a>
          <a href="#outcomes" className="hover:text-gold transition">Outcomes</a>
          <a href="#participants" className="hover:text-gold transition">Participants</a>
          <a href="#facilitator" className="hover:text-gold transition">Facilitator</a>
        </nav>
        <a
          href="#contact"
          className="text-sm border border-ivory/30 text-ivory px-4 py-2 hover:bg-gold hover:text-navy hover:border-gold transition"
        >
          Request a briefing
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-navy-deep text-ivory overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
      </div>

      <Nav />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-40 pb-28 lg:pt-52 lg:pb-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-gold">Flagship Workshop</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-ivory leading-[1.05]">
            Communicating Clearly in English in <em className="text-gold not-italic font-light italic">Global Business Environments.</em>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-ivory/70 max-w-2xl leading-relaxed font-light">
            A practical, executive-level program for professionals and teams who lead,
            negotiate and influence across borders — where English is the working
            language and clarity defines outcomes.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gold text-navy px-7 py-4 text-sm font-medium tracking-wide hover:bg-gold-soft transition"
            >
              Book a discovery call
            </a>
            <a
              href="#workshop"
              className="border border-ivory/30 text-ivory px-7 py-4 text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition"
            >
              Explore the program
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 border-t border-ivory/15 pt-10">
            <Stat value="9+ yrs" label="International experience" />
            <Stat value="5 Global Regions" label={<>LATAM, NORTH AMERICA,<br />EUROPE, MIDDLE EAST,<br />ASIA - PACIFIC</>} />
            <Stat value="100%" label="Tailored to your business context" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: React.ReactNode }) {
  return (
    <div>
      <dt className="text-2xl text-gold font-display">{value}</dt>
      <dd className="text-xs uppercase tracking-[0.15em] text-ivory/60 mt-2">{label}</dd>
    </div>
  );
}

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-8 bg-navy" />
        <span className="eyebrow text-navy/70">{eyebrow}</span>
      </div>
      <h2 className="text-3xl lg:text-5xl text-navy leading-[1.1]">{title}</h2>
      {intro && <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">{intro}</p>}
    </div>
  );
}

function Overview() {
  return (
    <section id="workshop" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Workshop Overview"
              title={<>A working language is not the same as <em className="italic font-light text-navy/70">a working voice.</em></>}
            />
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              This flagship program is designed for professionals and intact teams who operate
              daily in English with international counterparts. We move beyond grammar drills
              and generic business vocabulary to build the structural, strategic and
              cross-cultural communication skills that define credibility at a senior level.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
              Sessions are built around your real meetings, presentations and stakeholder
              conversations. Every participant leaves with a sharper voice, a clearer
              structure, and the confidence to be understood the first time.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-border">
              <Tile k="Format" v="Live virtual or in-person, modular" />
              <Tile k="Duration" v="6 – 12 weeks, customized" />
              <Tile k="Cohort" v="1:1, small group, or team intact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-background p-6">
      <div className="eyebrow text-navy/60 mb-2">{k}</div>
      <div className="text-navy font-medium">{v}</div>
    </div>
  );
}

const challenges = [
  {
    n: "01",
    t: "Speaking under pressure",
    d: "Holding the room in a board meeting, defending a position, or thinking on your feet in a negotiation conducted in your second language.",
  },
  {
    n: "02",
    t: "Structuring complex ideas",
    d: "Translating dense technical, financial or strategic content into clear, persuasive narratives that a global audience can follow.",
  },
  {
    n: "03",
    t: "Cross-cultural nuance",
    d: "Reading the unspoken codes across US, European, LATAM and APAC counterparts — directness, hierarchy, silence, disagreement.",
  },
  {
    n: "04",
    t: "Written credibility",
    d: "Emails, reports and proposals that land with the right tone and weight — not just grammatically correct, but executively phrased.",
  },
  {
    n: "05",
    t: "Owning the virtual room",
    d: "Commanding attention on video, in hybrid meetings and across asynchronous channels where presence has to be engineered.",
  },
  {
    n: "06",
    t: "Confidence gap",
    d: "Closing the distance between what your people know and what they actually say — particularly under scrutiny from senior stakeholders.",
  },
];

function Challenges() {
  return (
    <section className="bg-navy text-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow text-gold">The Challenge</span>
          </div>
          <h2 className="text-3xl lg:text-5xl text-ivory leading-[1.1]">
            What gets lost in translation is rarely the words.
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed font-light">
            We work with the six communication gaps that quietly cost international teams
            time, deals and credibility every day.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
          {challenges.map((c) => (
            <div key={c.n} className="bg-navy p-8 lg:p-10 hover:bg-navy-deep transition group">
              <div className="text-gold font-display text-3xl mb-6">{c.n}</div>
              <h3 className="text-xl text-ivory mb-3 group-hover:text-gold transition">{c.t}</h3>
              <p className="text-ivory/65 leading-relaxed font-light text-sm">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const outcomes = [
  "Present complex ideas with clarity, structure and executive presence in English.",
  "Lead and contribute to international meetings with confidence and influence.",
  "Negotiate, push back and align across cultures without losing nuance or authority.",
  "Write emails, reports and proposals that read as credible at any seniority level.",
  "Handle Q&A, objections and difficult conversations with composure under pressure.",
  "Build a personal communication style — not a generic one — that travels globally.",
];

function Outcomes() {
  return (
    <section id="outcomes" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Learning Outcomes"
              title={<>What participants <em className="italic font-light text-navy/70">walk away with.</em></>}
              intro="Outcomes are defined together with HR, L&D or the participant at the start of the engagement, and measured at the close."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-t border-b border-border">
              {outcomes.map((o, i) => (
                <li key={i} className="py-6 flex gap-6 items-start">
                  <span className="font-display text-gold text-lg w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-navy text-lg leading-relaxed font-light">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "If you need Business English classes or general English classes, you should take them with Ian. I have studied with him for about six months and I'm more confident and fluent. I recommend 100%.",
    name: "Marcelo",
    title: "Tax Compliance Manager",
  },
  {
    quote:
      "I started practicing my English with Ian even before working in a fully English-speaking environment. Once again, with his guidance, I have polished key aspects of my communication.",
    name: "Constanza",
    title: "Sales Manager",
  },
];

function Testimonials() {
  return (
    <section className="bg-navy text-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-gold" />
          <span className="eyebrow text-gold">Testimonials</span>
          <span className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-3xl lg:text-5xl text-ivory leading-[1.1]">
          In their <em className="italic font-light text-gold">own words.</em>
        </h2>

        <div className="mt-16 space-y-16">
          {testimonials.map((t) => (
            <figure key={t.name}>
              <blockquote className="text-lg lg:text-xl text-ivory/85 italic font-light leading-relaxed max-w-3xl mx-auto">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-ivory font-semibold">
                {t.name} - {t.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const participants = [
  { t: "Senior leaders & executives", d: "Managing global teams or representing the business with international stakeholders." },
  { t: "Managers in multinationals", d: "Operating daily across HQ and regional offices in English as a working language." },
  { t: "L&D and HR partners", d: "Designing communication and leadership development for global workforces." },
  { t: "High-potential professionals", d: "Preparing for expanded international scope, secondments or board exposure." },
];

function Participants() {
  return (
    <section id="participants" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Ideal Participants"
          title={<>Designed for those <em className="italic font-light text-navy/70">already in the room.</em></>}
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {participants.map((p) => (
            <div key={p.t} className="border-t-2 border-gold pt-6">
              <h3 className="text-xl text-navy mb-3">{p.t}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilitator() {
  return (
    <section id="facilitator" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={facilitator}
                alt="Ian Kennedy, Founder & Lead Facilitator"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover grayscale"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold hidden lg:block" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-navy" />
              <span className="eyebrow text-navy/70">Facilitator</span>
            </div>
            <h2 className="text-3xl lg:text-5xl text-navy leading-[1.1]">
              Ian Kennedy
            </h2>
            <p className="mt-3 text-muted-foreground text-lg font-light">
              Founder · Kennedy Consulting & Coaching
            </p>

            <div className="mt-8 space-y-5 text-navy/85 leading-relaxed font-light">
              <p>
                A bilingual US-native communication consultant and coach with over 9 years
                of international experience across Latin America, North America, Europe, the
                Middle East and Asia. Ian works with professionals and teams inside
                multinationals where English carries the weight of the business.
              </p>
              <p>
                His approach blends executive communication, structured thinking and
                cross-cultural fluency — grounded in real business contexts rather than
                generic curriculum. Clients have included professionals from PLACEHOLDER CLIENTS and
                other global organizations.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border">
              <Tile k="Based in" v="Santiago, Chile" />
              <Tile k="Languages" v="English · Spanish" />
              <Tile k="Certification" v="Teaching English as a Foreign Language (TEFL) · 9+ yrs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-navy-deep text-ivory py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-gold" />
          <span className="eyebrow text-gold">Next Step</span>
          <span className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-4xl lg:text-6xl text-ivory leading-[1.05]">
          Bring this workshop to <em className="italic font-light text-gold">your organization.</em>
        </h2>
        <p className="mt-8 text-lg lg:text-xl text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed">
          Request a 20-minute briefing call. We will discuss your team, your
          communication priorities and how the program can be tailored to your context.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kennedyconsultingcoaching@gmail.com"
            className="bg-gold text-navy px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold-soft transition"
          >
            kennedyconsultingcoaching@gmail.com
          </a>
          <a
            href="https://wa.me/56973876381"
            className="border border-ivory/30 text-ivory px-8 py-4 text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition"
          >
            WhatsApp +56 9 7387 6381
          </a>
        </div>

        <div className="mt-16 pt-10 border-t border-ivory/15 flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-4 text-left">
          <ContactBlock label="Email" value="kennedyconsultingcoaching@gmail.com" nowrap />
          <ContactBlock label="WhatsApp" value="+56 9 7387 6381" />
          <ContactBlock label="LinkedIn" value="in/ianpatrickkennedy" href="https://www.linkedin.com/in/ianpatrickkennedy" />
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ label, value, href, nowrap }: { label: string; value: string; href?: string; nowrap?: boolean }) {
  const inner = <span className={`text-ivory hover:text-gold transition ${nowrap ? 'whitespace-nowrap' : ''}`}>{value}</span>;
  return (
    <div>
      <div className="eyebrow text-gold/80 mb-2">{label}</div>
      {href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory/60 border-t border-ivory/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-8 w-8 rounded-sm" width={32} height={32} />
          <span>© {new Date().getFullYear()} Kennedy Consulting & Coaching</span>
        </div>
        <div className="tracking-wide text-xs uppercase">
          Speak with confidence · Communicate with impact · Advance your career
        </div>
      </div>
    </footer>
  );
}

function HeroVideo() {
  return (
    <section className="bg-navy-deep">
      <div className="w-full aspect-video overflow-hidden">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

function Landing() {
  return (
    <main>
      <Hero />
      <HeroVideo />
      <Overview />
      <Challenges />
      <Outcomes />
      <Participants />
      <Facilitator />
      <CTA />
      <Footer />
    </main>
  );
}
