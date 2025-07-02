import Link from "next/link";
import { Container } from "./components/Container";
import { SocialLink } from "./components/SocialLink";
import { Button } from "./components/Button";
import { ArrowDownIcon } from "./components/Icons";
import { Schema } from "./layouts/RootLayout";
import Image from "next/image";
import GDGPakistan from "@/content/chapter-logos/gdgpakistan.png";
import { DETAILS } from "@/content/content";
import { Footer } from "./components/Footer";

export default async function HomePage() {
  return (
    <>
      <Schema data={DETAILS.schema} />

      <Container className="mt-16">
        <div className="flex items-center justify-left">
          <Image
            src={GDGPakistan}
            alt="GDG Pakistan"
            width={100}
            height={100}
          />
          <h2 className="mx-4 -mt-2 max-w-2xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            {DETAILS.title}
          </h2>
        </div>

        <p className="mt-10 max-w-3xl text-xl font-light text-zinc-600">
          {DETAILS.description}
        </p>

        <div className="mt-19 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DETAILS.chapters.map((chapter, index) => (
            <div
              key={index}
              className="pt-6 pb-4 rounded-2xl shadow-sm transform hover:-translate-y-2 transition duration-300"
            >
              <Link href={chapter.link} target="_blank">
                <div className="flex items-center justify-center">
                  <Image
                    src={chapter.logo}
                    alt={chapter.name}
                    width={150}
                    height={150}
                  />
                </div>
                <p className="h-10.5 mt-1 mx-5 text-center text-gray-600 text-sm">
                  {chapter.description}
                </p>
              </Link>
              <div className="mt-6 mb-2 mx-3 flex justify-center gap-2">
                {chapter.socials.map((social) => (
                  <SocialLink key={social} social={social} />
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
