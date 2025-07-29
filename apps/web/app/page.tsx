"use client";

import { UnicornScene } from "@wrapper-interface/ui";
import { Badge } from "@/components/ui/badge";
import {
  Autumn as AutumnItem,
  Discord as DiscordItem,
  HelixDb as HelixDbItem,
  OSSDotNow as OSSDotNowItem,
  Ratatui as RatatuiItem,
  X as XItem,
  ZeroEmail as ZeroEmailItem,
} from "@/components/item-with-link";
import { GitHubButton } from "@/components/github-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="w-full min-h-screen lg:min-h-screen sm:min-h-screen">
        <UnicornScene
          projectId="1vjXgBXDKLnH5Kpial08"
          width="100vw"
          height="100vh"
          className="w-full h-screen lg:h-screen sm:h-screen"
        />
      </div>
      <div className="absolute inset-0 w-screen h-screen m-0 p-0 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-10 xl:col-span-4 col-start-2 xl:col-start-5 2xl:px-12 flex flex-col h-full pointer-events-auto">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between py-6 pointer-events-auto pt-12">
              <Image
                src="/wrapper-logo.svg"
                alt="Wrapper Logo"
                className="h-10 w-auto sm:h-12"
                width="40"
                height="40"
              />
              <GitHubButton />
            </nav>

            <div
              className="flex flex-col items-center flex-1 justify-start py-8 xl:mt-8"
              style={{
                marginTop: "clamp(0px, calc((100vw - 1920px) * 0.1), 6rem)",
              }}
            >
              <Badge variant="glass" className="font-bold">
                coming soon
              </Badge>

              <h1
                className="text-6xl font-space-grotesk text-white mt-2 text-center leading-[0.929]"
                style={{ textShadow: "0 4px 30px var(--color-electric-ink)" }}
              >
                <span className="font-bold">terminal</span> meets ai,
                <br />
                effortless
              </h1>

              <p
                className="text-base text-soft-silver text-center mt-4"
                style={{ textShadow: "0 4px 30px var(--color-electric-ink)" }}
              >
                your ai companion, always just a command away.
              </p>

              <div className="w-full max-w-md bg-[rgba(14,14,14,0.6)] backdrop-blur-[8px] border border-white/10 rounded-lg p-4 shadow-[0_4px_30px_rgba(0,0,0,1)] p-8 mt-12">
                <div className="space-y-2 font-space-grotesk">
                  <p className="text-base font-light text-soft-silver">
                    # ssh into wrapper.sh to join the waitlist
                  </p>
                  <p className="text-base text-foreground font-bold">
                    $ ssh wrapper.sh
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-sexy-green rounded-full animate-pulse"></div>
                <span
                  className="text-soft-silver tracking-[-0.1em]"
                  style={{ textShadow: "0 4px 30px var(--color-electric-ink)" }}
                >
                  100k+ people already joined
                </span>
              </div>

              <div className="flex flex-col items-center mt-16 pointer-events-auto">
                <h2
                  className="text-2xl text-bone-white/75 text-center tracking-[-0.1em]"
                  style={{ textShadow: "0 4px 4px rgba(110,86,207,0.25)" }}
                >
                  trusted by the people behind
                </h2>
                <div className="flex items-center space-x-8">
                  <ZeroEmailItem />

                  <RatatuiItem />

                  <OSSDotNowItem />

                  <AutumnItem />

                  <HelixDbItem />
                </div>
              </div>
            </div>

            <footer className="w-full flex items-center justify-between py-6 pointer-events-auto mt-auto pb-12 sm:mt-8 sm:pb-8">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <XItem />
                  <DiscordItem />
                </div>
                <p className="text-xs text-soft-silver tracking-[-0.1em]">
                  © 2025 Cupola Labs, LLC, All Rights Reserved
                </p>
              </div>
              <div className="transition-all duration-100 hover:brightness-0 hover:invert">
                <a
                  href="https://cupolalabs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/built-by-cupola.svg"
                    alt="Built by Cupola"
                    className="w-[72px] h-[31.63px] text-soft-silver"
                  />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
