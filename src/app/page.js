import Link from "next/link";
import { Container } from "./components/Container";
import { SocialLink } from "./components/SocialLink";
import { Button } from "./components/Button";
import { ArrowDownIcon } from "./components/Icons";
import { Schema } from "./layouts/RootLayout";
import Image from "next/image";
import CloudIslamabad from "@/content/chapter-logos/cloudislamabad.jpg";
import CloudLahore from "@/content/chapter-logos/cloudlahore.jpg";
import GDGIslamabad from "@/content/chapter-logos/gdgislamabad.png";
import GDGKolachi from "@/content/chapter-logos/gdgkolachi.png";
import GDGLahore from "@/content/chapter-logos/gdglahore.jpg";
import GDGLivePakistan from "@/content/chapter-logos/gdglivepakistan.png";
import GDGPeshawar from "@/content/chapter-logos/gdgpeshawar.jpg";
import WTMIslamabad from "@/content/chapter-logos/wtmislamabad.png";
import WTMKolachi from "@/content/chapter-logos/wtmkolachi.jpg";
import WTMLahore from "@/content/chapter-logos/wtmlahore.jpg";
import WTMPeshawar from "@/content/chapter-logos/wtmpeshawar.jpg";
import { Footer } from "./components/Footer";

const DETAILS = {
  title: `GDG Pakistan`,
  description: `
    Connecting developers across Pakistan through Google Developer Groups. 
    The GDG chapters all across Pakistan strive for a single motive and it is to
    put forward a positive face of Pakistan in the developer and digital world.
  `,
  socials: [
    "twitter",
    "facebook",
    "instagram",
    "linkedin",
    "meetup",
    "youtube",
    "whatsapp",
    // 'github',
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://gdglahore.com/",
    name: "GDG Lahore",
    alternateName: "Google Developer Group Lahore",
  },
  chapters: [
    {
      name: "GDG Lahore",
      logo: GDGLahore,
      description: "Cultural capital's developer-focused community",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "GDG Islamabad",
      logo: GDGIslamabad,
      description: "The capital's premier tech hub",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "GDG Kolachi",
      logo: GDGKolachi,
      description: "City of Lights modern tech network",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "GDG Peshawar",
      logo: GDGPeshawar,
      description: "Growing tech community in KPK",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "GDG Cloud Islamabad",
      logo: CloudIslamabad,
      description: "Cloud-focused chapter for Islamabad",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "GDG Cloud Lahore",
      logo: CloudLahore,
      description: "Cloud-focused chapter for Lahore",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "GDG Live Pakistan",
      logo: GDGLivePakistan,
      description: "Digitally empowered tech pioneers",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "WTM Kolachi",
      logo: WTMKolachi,
      description: "Empowering women digitally from Karachi",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "WTM Lahore",
      logo: WTMLahore,
      description: "Empowering women digitally from Lahore",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "WTM Islamabad",
      logo: WTMIslamabad,
      description: "Empowering women digitally from Islamabad",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
    {
      name: "WTM Peshawar",
      logo: WTMPeshawar,
      description: "Empowering women digitally from Peshawar",
      socials: [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "meetup",
        "youtube",
        "whatsapp",
        // 'github',
      ],
    },
  ],
};

export default async function HomePage() {
  return (
    <>
      <Schema data={DETAILS.schema} />

      <Container className="mt-9">
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          {DETAILS.title}
        </h2>

        <p className="mt-6 max-w-3xl text-xl font-light text-zinc-600">
          {DETAILS.description}
        </p>

        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DETAILS.chapters.map((chapter, index) => (
            <div key={index} className="pt-6 pb-4 rounded-2xl shadow-sm">
              <div className="flex items-center justify-center">
                <Image
                  src={chapter.logo}
                  alt={chapter.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="ml-1 mt-4 my-3.5 font-semibold text-gray-900 text-lg">
                  {chapter.name}
                </p>
              </div>
              <p className="h-10.5 mt-1 mx-5 text-center text-gray-600 text-sm">
                {chapter.description}
              </p>
              <div className="mt-4 border-t border-gray-200  mx-5" />
              <div className="my-6 mx-3 flex justify-center gap-2">
                {chapter.socials.map((platform) => (
                  <SocialLink key={platform} platform={platform} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

//within above container

{
}

// events list

{
  /* <Container className="mt-24 md:mt-28">
        <div className="mx-auto flex max-w-xl flex-col gap-x-10 gap-y-20 lg:max-w-none lg:flex-row">
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-800 sm:text-2xl">
             <Link href="/events">Recent Events</Link>
            </h2>

            <Button
              href="/events"
              variant="secondary"
              className="group mt-8 w-full"
            >
                See all events
              <ArrowDownIcon className="h-4 w-4 -rotate-90 stroke-zinc-400 transition group-active:stroke-zinc-600" />
            </Button>
          </div>
        </div>
      </Container> */
}
