import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";
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

// ── Types for returnObjects ───────────────────────────────────────────────────

type StatItem = { value: string; label: string[] };
type TileItem = { k: string; v: string };
type ChallengeItem = { n: string; t: string; d: string };
type ParticipantItem = { t: string; d: string };
type TestimonialItem = { quote: string; name: string; title: string };

// ── Language toggle ───────────────────────────────────────────────────────────

function LangToggle() {
  const { i18n } = useTranslation();

  const setLang = (lang: string) => {
    void i18n.changeLanguage(lang);
    try {
      localStorage.setItem("kcc-lang", lang);
    } catch {}
  };

  return (
    <div className="flex items-center gap-0.5 text-xs font-medium tracking-wider">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 transition-colors ${
          i18n.language === "en" ? "text-gold" : "text-ivory/45 hover:text-ivory/75"
        }`}
      >
        EN
      </button>
      <span className="text-ivory/25">|</span>
      <button
        onClick={() => setLang("es")}
        className={`px-2 py-1 transition-colors ${
          i18n.language === "es" ? "text-gold" : "text-ivory/45 hover:text-ivory/75"
        }`}
      >
        ES
      </button>
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav() {
  const { t } = useTranslation();
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
          <a href="#workshop" className="hover:text-gold transition">{t("nav.workshop")}</a>
          <a href="#outcomes" className="hover:text-gold transition">{t("nav.outcomes")}</a>
          <a href="#participants" className="hover:text-gold transition">{t("nav.participants")}</a>
          <a href="#facilitator" className="hover:text-gold transition">{t("nav.facilitator")}</a>
        </nav>
        <div className="flex items-center gap-4">
          <LangToggle />
          <a
            href="#contact"
            className="hidden sm:block text-sm border border-ivory/30 text-ivory px-4 py-2 hover:bg-gold hover:text-navy hover:border-gold transition"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true }) as StatItem[];

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
            <span className="eyebrow text-gold">{t("hero.eyebrow")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-ivory leading-[1.05]">
            {t("hero.title")} <em className="text-gold not-italic font-light italic">{t("hero.titleEm")}</em>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-ivory/70 max-w-2xl leading-relaxed font-light">
            {t("hero.subtitle")}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gold text-navy px-7 py-4 text-sm font-medium tracking-wide hover:bg-gold-soft transition"
            >
              {t("hero.btnPrimary")}
            </a>
            <a
              href="#workshop"
              className="border border-ivory/30 text-ivory px-7 py-4 text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition"
            >
              {t("hero.btnSecondary")}
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 border-t border-ivory/15 pt-10">
            {stats.map((s) => (
              <Stat key={s.value} value={s.value} lines={s.label} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, lines }: { value: string; lines: string[] }) {
  return (
    <div>
      <dt className="text-2xl text-gold font-display">{value}</dt>
      <dd className="text-xs uppercase tracking-[0.15em] text-ivory/60 mt-2">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </dd>
    </div>
  );
}

// ── Shared ────────────────────────────────────────────────────────────────────

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

function Tile({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-background p-6">
      <div className="eyebrow text-navy/60 mb-2">{k}</div>
      <div className="text-navy font-medium">{v}</div>
    </div>
  );
}

// ── Overview ──────────────────────────────────────────────────────────────────

function Overview() {
  const { t } = useTranslation();
  const tiles = t("overview.tiles", { returnObjects: true }) as TileItem[];

  return (
    <section id="workshop" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={t("overview.eyebrow")}
              title={<>{t("overview.title")} <em className="italic font-light text-navy/70">{t("overview.titleEm")}</em></>}
            />
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">{t("overview.para1")}</p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">{t("overview.para2")}</p>
            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-border">
              {tiles.map((tile) => (
                <Tile key={tile.k} k={tile.k} v={tile.v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Challenges ────────────────────────────────────────────────────────────────

function Challenges() {
  const { t } = useTranslation();
  const items = t("challenges.items", { returnObjects: true }) as ChallengeItem[];

  return (
    <section className="bg-navy text-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow text-gold">{t("challenges.eyebrow")}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl text-ivory leading-[1.1]">{t("challenges.title")}</h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed font-light">{t("challenges.intro")}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
          {items.map((item) => (
            <div key={item.n} className="bg-navy p-8 lg:p-10 hover:bg-navy-deep transition group">
              <div className="text-gold font-display text-3xl mb-6">{item.n}</div>
              <h3 className="text-xl text-ivory mb-3 group-hover:text-gold transition">{item.t}</h3>
              <p className="text-ivory/65 leading-relaxed font-light text-sm">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Outcomes ──────────────────────────────────────────────────────────────────

function Outcomes() {
  const { t } = useTranslation();
  const items = t("outcomes.items", { returnObjects: true }) as string[];

  return (
    <section id="outcomes" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={t("outcomes.eyebrow")}
              title={<>{t("outcomes.title")} <em className="italic font-light text-navy/70">{t("outcomes.titleEm")}</em></>}
              intro={t("outcomes.intro")}
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-t border-b border-border">
              {items.map((item, i) => (
                <li key={i} className="py-6 flex gap-6 items-start">
                  <span className="font-display text-gold text-lg w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-navy text-lg leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────

function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as TestimonialItem[];

  const industries: Record<string, string> = {
    Marcelo: "Financial Services",
    Constanza: "Mining",
  };

  return (
    <section className="bg-navy text-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-gold" />
          <span className="eyebrow text-gold">{t("testimonials.eyebrow")}</span>
          <span className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-3xl lg:text-5xl text-ivory leading-[1.1]">
          {t("testimonials.title")} <em className="italic font-light text-gold">{t("testimonials.titleEm")}</em>
        </h2>
        <p className="mt-6 text-lg text-ivory/70 leading-relaxed font-light max-w-3xl mx-auto">
          {t("testimonials.intro")}
        </p>

        <div className="mt-20 space-y-24">
          {items.map((item) => (
            <figure key={item.name} className="py-4">
              <blockquote className="text-lg lg:text-xl text-ivory/85 italic font-light leading-relaxed max-w-3xl mx-auto">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-ivory font-bold text-base">{item.name}</div>
                <div className="mt-1.5 text-ivory/60 text-sm font-light">
                  {item.title} <span className="text-ivory/30 mx-1">|</span> {industries[item.name]}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Participants ──────────────────────────────────────────────────────────────

function Participants() {
  const { t } = useTranslation();
  const items = t("participants.items", { returnObjects: true }) as ParticipantItem[];

  return (
    <section id="participants" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow={t("participants.eyebrow")}
          title={<>{t("participants.title")} <em className="italic font-light text-navy/70">{t("participants.titleEm")}</em></>}
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.t} className="border-t-2 border-gold pt-6">
              <h3 className="text-xl text-navy mb-3">{item.t}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Facilitator ───────────────────────────────────────────────────────────────

function Facilitator() {
  const { t } = useTranslation();
  const tiles = t("facilitator.tiles", { returnObjects: true }) as TileItem[];

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
              <span className="eyebrow text-navy/70">{t("facilitator.eyebrow")}</span>
            </div>
            <h2 className="text-3xl lg:text-5xl text-navy leading-[1.1]">Ian Kennedy</h2>
            <p className="mt-3 text-muted-foreground text-lg font-light">{t("facilitator.subtitle")}</p>

            <div className="mt-8 space-y-5 text-navy/85 leading-relaxed font-light">
              <p>{t("facilitator.para1")}</p>
              <p>{t("facilitator.para2")}</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border">
              {tiles.map((tile) => (
                <Tile key={tile.k} k={tile.k} v={tile.v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ─────────────────────────────────────────────────────────────────────────

function FAQ() {
  return (
    <section id="faq" className="bg-navy text-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow text-gold">Common Questions</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-3xl lg:text-5xl text-ivory leading-[1.1]">
            Common Questions
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed font-light max-w-2xl mx-auto">
            Answers to common questions about workshop format, audience, customization, and delivery.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div>
            <h3 className="text-xl text-ivory mb-4">Is this an English class?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              No. This workshop focuses on professional communication in English within real business environments. The emphasis is on meetings, presentations, stakeholder communication, and communicating clearly under pressure rather than traditional language instruction.
            </p>
          </div>
          <div className="border-t border-ivory/10 pt-12">
            <h3 className="text-xl text-ivory mb-4">What English level is recommended?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              The workshop is generally designed for professionals with an intermediate to advanced level of English, approximately B1-C1. Content and activities can be adapted based on the needs of the group.
            </p>
          </div>
          <div className="border-t border-ivory/10 pt-12">
            <h3 className="text-xl text-ivory mb-4">Can the workshop be customized for our organization?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              Yes. Every engagement is tailored to the client’s communication goals, business context, industry, and participant profile.
            </p>
          </div>
          <div className="border-t border-ivory/10 pt-12">
            <h3 className="text-xl text-ivory mb-4">Is the workshop delivered virtually or in person?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              Both options are available. Sessions can be delivered virtually, in person, or in a hybrid format depending on your team’s needs and location.
            </p>
          </div>
          <div className="border-t border-ivory/10 pt-12">
            <h3 className="text-xl text-ivory mb-4">Who is this workshop designed for?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              The workshop is ideal for professionals, managers, and leaders who regularly communicate in English with colleagues, clients, headquarters, or stakeholders in international business environments.
            </p>
          </div>
          <div className="border-t border-ivory/10 pt-12">
            <h3 className="text-xl text-ivory mb-4">How many participants can attend?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              Workshops are typically designed for groups of up to 12 participants to encourage discussion, interaction, and practical application. Larger group formats can also be discussed.
            </p>
          </div>
          <div className="border-t border-ivory/10 pt-12">
            <h3 className="text-xl text-ivory mb-4">What makes this different from traditional Business English training?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              The focus is not only on language accuracy, but on communication effectiveness. Participants work on how they communicate in real business situations, including meetings, presentations, updates, and stakeholder interactions.
            </p>
          </div>
          <div className="border-t border-ivory/10 pt-12">
            <h3 className="text-xl text-ivory mb-4">What happens after the workshop?</h3>
            <p className="text-ivory/65 leading-relaxed font-light">
              Depending on the client’s needs, workshops can be followed by individual coaching, additional team sessions, or customized development programs focused on specific communication goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-navy-deep text-ivory py-24 lg:py-36 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-gold" />
          <span className="eyebrow text-gold">{t("cta.eyebrow")}</span>
          <span className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-4xl lg:text-6xl text-ivory leading-[1.05]">
          {t("cta.title")} <em className="italic font-light text-gold">{t("cta.titleEm")}</em>
        </h2>
        <p className="mt-8 text-lg lg:text-xl text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed">
          {t("cta.intro")}
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
          <ContactBlock label={t("cta.email")} value="kennedyconsultingcoaching@gmail.com" nowrap />
          <ContactBlock label={t("cta.whatsapp")} value="+56 9 7387 6381" />
          <ContactBlock label={t("cta.linkedin")} value={<Linkedin size={20} />} href="https://www.linkedin.com/in/ianpatrickkennedy" center />
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ label, value, href, nowrap, center }: { label: string; value: React.ReactNode; href?: string; nowrap?: boolean; center?: boolean }) {
  const inner = <span className={`text-ivory hover:text-gold transition ${nowrap ? "whitespace-nowrap" : ""} ${center ? "block text-center" : ""}`}>{value}</span>;
  return (
    <div className={center ? "text-center w-full sm:w-auto" : ""}>
      <div className={`eyebrow text-gold/80 mb-2 ${center ? "text-center" : ""}`}>{label}</div>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className={center ? "inline-block" : ""}>
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy-deep text-ivory/60 border-t border-ivory/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-8 w-8 rounded-sm" width={32} height={32} />
          <span>© {new Date().getFullYear()} Kennedy Consulting & Coaching</span>
        </div>
        <div className="tracking-wide text-xs uppercase">{t("footer.tagline")}</div>
      </div>
    </footer>
  );
}

// ── Video ─────────────────────────────────────────────────────────────────────

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

// ── Page ──────────────────────────────────────────────────────────────────────

function Landing() {
  return (
    <main>
      <Hero />
      <HeroVideo />
      <Overview />
      <Challenges />
      <Outcomes />
      <Testimonials />
      <Participants />
      <Facilitator />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
