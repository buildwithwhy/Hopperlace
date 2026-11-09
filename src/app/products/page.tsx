import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  A_LITTLE_MUSIC_URL,
  EMAIL,
  EVIDENCE_SYNTHESIS_URL,
  MAIL_HREF,
  MYCORNER_URL,
  SAME_WONDER_URL,
  VALUECOMPASS_URL,
} from "@/lib/links";
import {
  cardButton,
  frame,
  label,
  largeButton,
  outlineButton,
  primaryButton,
  proseLink,
  sectionHeading,
} from "@/lib/ui";

const title = "Products by Hopperlace";

const description =
  "Products for discovery, connection and better decisions — each made for the people who use it. Hopperlace operates them and handles billing for those sold through it.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://hopperlace.ai/products",
    siteName: "Hopperlace",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "https://hopperlace.ai/products" },
};

/* ─── Local primitives ─── */

/** Phone and page captures float on the product panels. The shadow is the
    one place the site uses one: it lifts the captures off the panel. Call
    sites add the corner radius (12px for phones, less for crops). */
const shot =
  "absolute h-auto border border-heading/10 bg-white shadow-[0_14px_34px_rgba(38,61,52,0.16),0_2px_6px_rgba(38,61,52,0.08)]";

/* A capture's rendered width is `pct`% of its panel. Panels sit two across
   (about 530px) from ~1040px and fill the column below that. */
const shotSizes = (pct: number) =>
  `(min-width: 1040px) ${Math.round(pct * 5.4)}px, ${pct}vw`;

/* ─── Content ─── */

type Product = {
  id: string;
  name: React.ReactNode;
  /** "live" is the filled green pill; any other text is an outlined one. */
  status?: string;
  body: React.ReactNode;
  note?: React.ReactNode;
  action?: { href: string; label: string; primary?: boolean };
  /** Background class of the visual panel. */
  panel: string;
  visual: React.ReactNode;
  /** Spans the row, with the panel beside the text from `vc`. */
  feature?: boolean;
};

const categories: {
  id: string;
  name: React.ReactNode;
  kicker: string;
  products: Product[];
}[] = [
  {
    id: "connection",
    name: <>Connection &amp; belonging</>,
    kicker: "Finding your place, and the people in it.",
    products: [
      {
        id: "mycorner",
        name: "MyCorner",
        status: "iOS & Android",
        body: "Find a neighbourhood that feels like you. Discover local places and plan an exploration through curated recommendations.",
        note: <>Where it&rsquo;s heading: from discovering a place to taking part in it and feeling at home.</>,
        action: { href: MYCORNER_URL, label: "Visit MyCorner ↗" },
        panel: "bg-mycorner",
        visual: (
          <>
            <Image
              src="/assets/products/mycorner-map.jpg"
              alt="MyCorner map of neighbourhoods across New York, each marked with a pin"
              width={402}
              height={800}
              sizes={shotSizes(29)}
              className={`${shot} rounded-xl top-[13%] left-[5%] w-[29%] -rotate-5`}
            />
            <Image
              src="/assets/products/mycorner-explore-angel.jpg"
              alt="Explore Angel in MyCorner: an area summary, editor’s picks such as Camden Passage and Screen on the Green, and nearby places"
              width={610}
              height={1225}
              sizes={shotSizes(29)}
              className={`${shot} rounded-xl top-[13%] left-[66%] w-[29%] rotate-5`}
            />
            <Image
              src="/assets/products/mycorner-neighbourhoods.jpg"
              alt="MyCorner home screen listing London neighbourhoods, starting with an illustrated card for Angel, Islington"
              width={610}
              height={1212}
              sizes={shotSizes(31)}
              className={`${shot} rounded-xl top-[7%] left-[34.5%] z-[1] w-[31%]`}
            />
          </>
        ),
      },
      {
        id: "same-wonder",
        name: "Same Wonder",
        status: "Preview",
        body: "Meet new people. Discover something together. Small local gatherings built around shared curiosity, with activities that give conversation somewhere to start.",
        note: "Coffee tables and discovery walks. Choose a date, neighbourhood and interest; arrangements follow once a group is confirmed.",
        action: { href: SAME_WONDER_URL, label: "Visit Same Wonder ↗" },
        panel: "bg-wonder",
        visual: (
          <>
            <Image
              src="/assets/products/same-wonder-home.jpg"
              alt="Same Wonder home page: ‘Meet new people. Discover something together.’ with a Find my table button"
              width={750}
              height={1450}
              sizes={shotSizes(44)}
              className={`${shot} rounded-xl top-[9%] left-[7%] w-[44%]`}
            />
            <Image
              src="/assets/products/same-wonder-choose.jpg"
              alt="Same Wonder’s first step, ‘What sounds like your kind of day?’, offering Coffee & curiosity or Walk & discover, before choosing a curiosity and a place"
              width={738}
              height={696}
              sizes={shotSizes(52)}
              className={`${shot} top-[36%] left-[42%] z-[1] w-[52%] rounded-[10px]`}
            />
          </>
        ),
      },
    ],
  },
  {
    id: "stories",
    name: <>Stories &amp; discovery</>,
    kicker: "Small, everyday ways to remember, notice and wonder.",
    products: [
      {
        id: "once-and-ours",
        name: <>Once &amp; Ours</>,
        body: "Turn memories and everyday moments into keepsakes worth sharing. Start with a conversation, a photograph or your own words, then shape your story into a newspaper, booklet or personal letter.",
        panel: "bg-keepsake",
        /* Captured from the live app on 9 Nov 2026: its fictional sample
           story as a newspaper, and the first question of the conversation. */
        visual: (
          <>
            <Image
              src="/assets/products/once-and-ours-newspaper.jpg"
              alt="Once & Ours fictional sample keepsake: a personal-edition newspaper front page headed ‘One small room. A whole new world.’, about a family watching the 1969 Moon landing on a grandmother’s television"
              width={720}
              height={1204}
              sizes={shotSizes(44)}
              className={`${shot} top-[9%] left-[7%] w-[44%] rounded-sm`}
            />
            <Image
              src="/assets/products/once-and-ours-question.jpg"
              alt="The Once & Ours conversation opening with ‘What is a memory you would love to keep?’ and a box to start writing"
              width={640}
              height={656}
              sizes={shotSizes(48)}
              className={`${shot} top-[34%] left-[46%] z-[1] w-[48%] rounded-[10px]`}
            />
          </>
        ),
      },
      {
        id: "post-from-the-past",
        name: "Post from the Past",
        body: "A daily escape into vintage travel. Discover archival images and their stories, save favourites in your shoebox, and turn a find into a personal digital postcard.",
        panel: "bg-postcard",
        /* Captured from the app on 9 Nov 2026: that day's archival find with
           its Library of Congress attribution, and a postcard back. */
        visual: (
          <>
            <Image
              src="/assets/products/post-from-the-past-today.jpg"
              alt="Post from the Past’s discovery for 9 November: a photochrom of Stalden Railway Station and Hotel in Valais, Switzerland, c. 1890s, with its story and Library of Congress attribution"
              width={640}
              height={1487}
              sizes={shotSizes(40)}
              className={`${shot} top-[8%] left-[8%] w-[40%] rounded-xl`}
            />
            <Image
              src="/assets/products/post-from-the-past-postcard.jpg"
              alt="The back of a digital postcard made from that find: ‘Dear Sam, Wish you were here…’, signed Alex, with a One Penny stamp and the image’s source"
              width={720}
              height={504}
              sizes={shotSizes(54)}
              className={`${shot} top-[40%] left-[40%] z-[1] w-[54%] rounded-lg`}
            />
          </>
        ),
      },
      {
        id: "a-little-music",
        name: "A Little Music",
        body: "One interesting piece of music each day, with its story and something to listen for. Choose your categories and explore beyond your usual listening.",
        note: (
          <>
            It isn&rsquo;t personalised: listeners who choose the same category
            hear the same piece that day. Listening happens through each
            provider&rsquo;s official player.
          </>
        ),
        action: { href: A_LITTLE_MUSIC_URL, label: "Today’s piece ↗" },
        panel: "bg-music",
        feature: true,
        visual: (
          <>
            <Image
              src="/assets/products/a-little-music-today.jpg"
              alt="A Little Music for Sunday 8 November: Barbara Allen, sung by Jean Ritchie, in the Folk & Traditional category, with a Listen button and the story behind the ballad"
              width={750}
              height={1624}
              sizes={shotSizes(40)}
              className={`${shot} rounded-xl top-[8%] left-[12%] w-[40%]`}
            />
            <Image
              src="/assets/products/a-little-music-listen-for.jpg"
              alt="Listen for: the way Ritchie slows and holds the final line of each verse. Below, a note naming the recording and where it was released"
              width={630}
              height={425}
              sizes={shotSizes(48)}
              className={`${shot} top-[42%] left-[44%] z-[1] w-[48%] rounded-[10px]`}
            />
          </>
        ),
      },
    ],
  },
  {
    id: "evidence",
    name: <>Evidence &amp; decisions</>,
    kicker: "Clearer evidence for choices that matter.",
    products: [
      {
        id: "valuecompass",
        name: "ValueCompass",
        status: "live",
        body: "Understand the companies behind your AI choices. Compare ownership, control and documented practices against what matters to you, with sources and clear gaps in the evidence.",
        action: {
          href: VALUECOMPASS_URL,
          label: "Try ValueCompass ↗",
          primary: true,
        },
        panel: "bg-sage",
        /* Same swap as the homepage preview: the two-card crop from `vc`,
           the single card below it. Both stay lazy, so the hidden one is
           never fetched. */
        visual: (
          <>
            <Image
              src="/assets/vc-cards-crop.png"
              alt="ValueCompass option cards showing who gets paid and what each runs on, documented alignment on nonprofit control with source links, and a separate ‘What we could not check’ note"
              width={1998}
              height={1590}
              sizes={shotSizes(88)}
              className={`${shot} top-[8%] left-[6%] hidden w-[88%] rounded-lg vc:block`}
            />
            <Image
              src="/assets/vc-card-claude.png"
              alt="ValueCompass option card: who gets paid and what it runs on, documented alignment on nonprofit control, and a separate ‘What we could not check’ note"
              width={1000}
              height={1590}
              sizes="64vw"
              className={`${shot} top-[8%] left-[18%] w-[64%] rounded-lg vc:hidden`}
            />
          </>
        ),
      },
      {
        id: "evidence-synthesis-ai",
        name: "Evidence Synthesis AI",
        body: "Help your research team work through studies for systematic reviews, with AI-assisted screening and researcher review.",
        action: {
          href: EVIDENCE_SYNTHESIS_URL,
          label: "Visit Evidence Synthesis AI ↗",
        },
        panel: "bg-evidence",
        /* Frames from the founder's demo walkthrough (Nov 2026), using
           demonstration studies: the model defers a title-only record to a
           human, and the reviewer records why they exclude it. */
        visual: (
          <>
            <Image
              src="/assets/products/evidence-synthesis-screening.jpg"
              alt="Evidence Synthesis AI adjudication view for a demonstration study: the model deferred to a human at 20% confidence, with its reasoning for population, intervention, comparator, outcome and study design"
              width={1070}
              height={570}
              sizes={shotSizes(90)}
              className={`${shot} top-[9%] left-[5%] w-[90%] rounded-lg`}
            />
            <Image
              src="/assets/products/evidence-synthesis-decision.jpg"
              alt="The reviewer’s decision, Exclude, with the required reason: ‘Title-only record with no abstract: cannot verify population, design, or outcomes against the protocol at abstract level.’"
              width={1038}
              height={136}
              sizes={shotSizes(86)}
              className={`${shot} top-[66%] left-[10%] z-[1] w-[86%] rounded-md`}
            />
          </>
        ),
      },
    ],
  },
];

/* Structured data for the product list, publisher-linked to the
   Organization entity on the homepage. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://hopperlace.ai/products#webpage",
  url: "https://hopperlace.ai/products",
  name: title,
  description,
  inLanguage: "en",
  isPartOf: { "@id": "https://hopperlace.ai/#website" },
  publisher: { "@id": "https://hopperlace.ai/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        name: "MyCorner",
        url: MYCORNER_URL,
        operatingSystem: "iOS, Android",
        description:
          "Find a neighbourhood that feels like you. Discover local places and plan an exploration through curated recommendations.",
      },
      {
        name: "Same Wonder",
        url: SAME_WONDER_URL,
        description:
          "Small local gatherings built around shared curiosity, with activities that give conversation somewhere to start. In preview.",
      },
      {
        name: "Once & Ours",
        description:
          "Turn memories and everyday moments into keepsakes worth sharing: a newspaper, booklet or personal letter.",
      },
      {
        name: "Post from the Past",
        description:
          "A daily escape into vintage travel: archival images and their stories, and personal digital postcards.",
      },
      {
        name: "A Little Music",
        url: A_LITTLE_MUSIC_URL,
        description:
          "One interesting piece of music each day, with its story and something to listen for. Not personalised: listeners who choose the same category hear the same piece that day.",
      },
      {
        name: "ValueCompass",
        url: VALUECOMPASS_URL,
        description:
          "Understand the companies behind your AI choices. Compare ownership, control and documented practices against what matters to you.",
      },
      {
        name: "Evidence Synthesis AI",
        url: EVIDENCE_SYNTHESIS_URL,
        description:
          "AI-assisted screening for systematic reviews, with researcher review.",
      },
    ].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        publisher: { "@id": "https://hopperlace.ai/#organization" },
        ...item,
      },
    })),
  },
};

export default function ProductsPage() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader current="products" />
      <main id="main">
        <Hero />
        {categories.map((category, i) => (
          <Category
            key={category.id}
            {...category}
            last={i === categories.length - 1}
          />
        ))}
        <Bridge />
        <Support />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section
      aria-labelledby="products-title"
      className={`${frame} grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-end gap-x-[clamp(40px,6vw,96px)] gap-y-5 pt-[clamp(40px,5vw,72px)] pb-[clamp(28px,3.5vw,44px)]`}
    >
      <div className="flex min-w-0 flex-col gap-[18px]">
        <p className={`${label} flex items-center gap-2.5`}>
          <span aria-hidden="true" className="size-[7px] rounded-full bg-coral" />
          Product studio
        </p>
        <h1
          id="products-title"
          className="font-serif text-[clamp(38px,4.8vw,62px)] leading-[1.04] font-normal tracking-[-0.02em] text-heading text-balance"
        >
          Products by Hopperlace
        </h1>
      </div>
      <div className="flex min-w-0 flex-col items-start gap-3.5">
        <p className="max-w-[48ch] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-heading text-pretty">
          Products for discovery, connection and better decisions &mdash; each
          made for the people who use it.
        </p>
        <p className="max-w-[52ch] text-[15px] leading-[1.6] text-pretty">
          They stand on their own, and building them also informs
          Hopperlace&rsquo;s core work:{" "}
          <a href="/#testing" className={proseLink}>
            systematic AI evaluation
          </a>
          .
        </p>
        <a
          href="#support"
          className={`${proseLink} py-1 text-[14px] font-medium`}
        >
          Product help &amp; billing
        </a>
      </div>
    </section>
  );
}

/* ─── Categories ─── */

function Category({
  id,
  name,
  kicker,
  products,
  last,
}: {
  id: string;
  name: React.ReactNode;
  kicker: string;
  products: Product[];
  last: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${frame} flex flex-col gap-5 pt-[clamp(20px,3vw,36px)] ${
        last ? "pb-[var(--section-y)]" : "pb-[clamp(36px,4.5vw,56px)]"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-t border-rule-strong pt-[18px]">
        <h2
          id={`${id}-title`}
          className="font-serif text-[clamp(24px,2.4vw,30px)] leading-[1.2] font-normal text-heading"
        >
          {name}
        </h2>
        <p className="text-[15px] text-muted">{kicker}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-5">
        {products.map((product) =>
          product.feature ? (
            <FeatureCard key={product.id} {...product} />
          ) : (
            <ProductCard key={product.id} {...product} />
          ),
        )}
      </div>
    </section>
  );
}

const cardShell =
  "min-w-0 overflow-hidden rounded-md border border-rule bg-panel";

function ProductCard(product: Product) {
  return (
    <article
      id={product.id}
      aria-labelledby={`${product.id}-name`}
      className={`${cardShell} flex flex-col`}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden ${product.panel}`}
      >
        {product.visual}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-[clamp(20px,2.4vw,28px)] pt-[22px] pb-[26px]">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <h3
            id={`${product.id}-name`}
            className="font-serif text-[clamp(23px,2.1vw,27px)] leading-[1.2] font-medium text-heading"
          >
            {product.name}
          </h3>
          {product.status && <Status status={product.status} />}
        </div>
        <p className="text-pretty">{product.body}</p>
        {product.note && <Note>{product.note}</Note>}
        {product.action && <Action {...product.action} className="mt-auto" />}
      </div>
    </article>
  );
}

/* A Little Music: spans the row; from `vc` the panel's height follows the
   text beside it instead of a fixed 4:3. */
function FeatureCard(product: Product) {
  return (
    <article
      id={product.id}
      aria-labelledby={`${product.id}-name`}
      className={`${cardShell} col-span-full grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]`}
    >
      <div
        className={`relative aspect-[4/3] min-h-[340px] overflow-hidden vc:aspect-auto ${product.panel}`}
      >
        {product.visual}
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-3.5 px-[clamp(20px,3.4vw,48px)] py-[clamp(24px,3.4vw,48px)]">
        <h3
          id={`${product.id}-name`}
          className="font-serif text-[clamp(26px,2.6vw,34px)] leading-[1.15] font-medium text-heading"
        >
          {product.name}
        </h3>
        <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-pretty">
          {product.body}
        </p>
        {product.note && <Note>{product.note}</Note>}
        {product.action && <Action {...product.action} className="mt-1.5" />}
      </div>
    </article>
  );
}

function Status({ status }: { status: string }) {
  const pill =
    "rounded-full font-mono text-[11px] font-medium tracking-[0.1em] uppercase";
  return status === "live" ? (
    <span className={`${pill} bg-live px-[11px] py-[3px] text-on-primary`}>
      Available now
    </span>
  ) : (
    <span
      className={`${pill} border border-rule-strong px-2.5 py-[3px] text-heading`}
    >
      {status}
    </span>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] leading-[1.55] text-muted text-pretty">
      {children}
    </p>
  );
}

function Action({
  href,
  label,
  primary,
  className,
}: {
  href: string;
  label: string;
  primary?: boolean;
  className: string;
}) {
  return (
    <a
      href={href}
      className={`${primary ? primaryButton : outlineButton} ${cardButton} ${className} self-start`}
    >
      {label}
    </a>
  );
}

/* ─── Products and evaluation ─── */

function Bridge() {
  return (
    <section aria-labelledby="bridge-title" className="bg-sage">
      <div
        className={`${frame} grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-x-[clamp(40px,6vw,96px)] gap-y-5 py-[var(--section-y)]`}
      >
        <div className="flex min-w-0 flex-col gap-4">
          <p id="bridge-title" className={label}>
            Products and evaluation
          </p>
          <p className="font-serif text-[clamp(21px,2.1vw,27px)] leading-[1.4] text-heading text-pretty">
            Building our own products gives us firsthand experience of choosing
            tools, designing workflows, checking results and maintaining what
            we ship. That experience helps us identify the questions worth
            testing.
          </p>
        </div>
        <div>
          <a href="/#testing" className={`${outlineButton} ${largeButton}`}>
            Our evaluation approach →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Product help & billing ─── */

function Support() {
  return (
    <section id="support" aria-labelledby="support-title">
      <div
        className={`${frame} grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-x-[clamp(40px,6vw,88px)] gap-y-5 py-[var(--section-y)]`}
      >
        <div className="flex flex-col gap-3.5">
          <p className={label}>Product help &amp; billing</p>
          <h2 id="support-title" className={sectionHeading}>
            Questions about a product or a purchase?
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="max-w-[50ch] text-pretty">
            Hopperlace operates the products on this page and handles billing
            for those sold through us. Email us with the product&rsquo;s name
            and, for a purchase, the email address you used. We&rsquo;ll reply
            from Hopperlace.
          </p>
          <a href={MAIL_HREF} className={`${primaryButton} ${largeButton}`}>
            Email {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
