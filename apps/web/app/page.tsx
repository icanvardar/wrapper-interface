"use client";

import { UnicornScene } from "@wrapper-interface/ui";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <div className="col-span-8 xl:col-span-4 col-start-3 xl:col-start-5 2xl:px-16 flex flex-col h-full pointer-events-auto">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between py-6 pointer-events-auto pt-12">
              <img
                src="/wrapper-logo.svg"
                alt="Wrapper Logo"
                className="h-8 w-auto sm:h-12"
              />
              <a
                href="https://github.com/cupolalabs/wrapper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glass" size="badge">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="flex items-center">GitHub</span>
                  <svg
                    className="w-4 h-4 text-yellow-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </Button>
              </a>
            </nav>

            {/* Centered Content */}
            <div
              className="flex flex-col items-center flex-1 justify-start py-8 xl:mt-8"
              style={{
                marginTop: "clamp(0px, calc((100vw - 1920px) * 0.1), 6rem)",
              }}
            >
              {/* Badge */}
              <Badge variant="glass" className="font-bold">
                coming soon
              </Badge>

              {/* Main Slogan */}
              <h1
                className="text-6xl font-space-grotesk text-white mt-2 text-center leading-[0.929]"
                style={{ textShadow: "0 4px 30px rgba(110,86,207,1)" }}
              >
                <span className="font-bold">terminal</span> meets ai,
                <br />
                effortless
              </h1>

              {/* Mini Slogan */}
              <p
                className="text-base text-soft-silver text-center mt-4"
                style={{ textShadow: "0 4px 30px rgba(110,86,207,1)" }}
              >
                your ai companion, always just a command away.
              </p>

              {/* Terminal Card */}
              <div className="w-full max-w-md bg-[rgba(14,14,14,0.6)] backdrop-blur-[8px] border border-white/10 rounded-lg p-4 shadow-[0_4px_30px_rgba(0,0,0,1)] p-8 mt-12">
                <div className="space-y-2 font-space-grotesk">
                  <p className="text-base font-light text-[#b0b0b0]">
                    # ssh into wrapper.sh to join the waitlist
                  </p>
                  <p className="text-base text-[#fafaf9] font-bold">
                    $ ssh wrapper.sh
                  </p>
                </div>
              </div>

              {/* Waitlist Count */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></div>
                <span
                  className="text-soft-silver tracking-[-0.1em]"
                  style={{ textShadow: "0 4px 30px rgba(110,86,207,1)" }}
                >
                  100k+ people already joined
                </span>
              </div>

              {/* Trusted By Section */}
              <div className="flex flex-col items-center mt-16 sm:mt-8 pointer-events-auto">
                <h2
                  className="text-2xl text-soft-silver tracking-[-0.1em]"
                  style={{ textShadow: "0 4px 4px rgba(110,86,207,0.25)" }}
                >
                  trusted by the people behind
                </h2>
                <div className="flex items-center space-x-8">
                  <a
                    href="https://0.email/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src="/project-logos/zerodotemail.svg"
                      alt="ZeroDotEmail"
                      className="w-8 h-8 text-soft-silver"
                      style={{
                        filter: "drop-shadow(0 4px 30px rgba(110,86,207,1))",
                      }}
                    />
                  </a>
                  <a
                    href="https://ratatui.rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src="/project-logos/ratatui.svg"
                      alt="Ratatui"
                      className="w-8 h-8 text-soft-silver"
                      style={{
                        filter: "drop-shadow(0 4px 30px rgba(110,86,207,1))",
                      }}
                    />
                  </a>
                  <a
                    href="https://oss.now/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src="/project-logos/ossdotnow.svg"
                      alt="OSS Dot Now"
                      className="w-8 h-8 text-soft-silver"
                      style={{
                        filter: "drop-shadow(0 4px 30px rgba(110,86,207,1))",
                      }}
                    />
                  </a>
                  <a
                    href="https://useautumn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src="/project-logos/autumn.svg"
                      alt="Autumn"
                      className="w-8 h-[51px] text-soft-silver"
                      style={{
                        filter: "drop-shadow(0 4px 30px rgba(110,86,207,1))",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.helix-db.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src="/project-logos/helixdb.svg"
                      alt="HelixDB"
                      className="w-[43px] h-[43px] text-soft-silver"
                      style={{
                        filter: "drop-shadow(0 4px 30px rgba(110,86,207,1))",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="w-full flex items-center justify-between py-6 pointer-events-auto mt-auto pb-12 sm:mt-8 sm:pb-8">
              <div className="flex flex-col space-y-2">
                {/* Social Links */}
                <div className="flex items-center space-x-2">
                  <a
                    href="https://x.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <svg
                      className="w-4 h-4 text-[#fafaf9]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/jhPgSA9G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <svg
                      className="w-[21px] h-[15.74px] text-[#fafaf9]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5499-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9559 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9559 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </a>
                </div>
                {/* Copyright Text */}
                <p className="text-xs text-[#b0b0b0] tracking-[-0.1em]">
                  © 2025 Cupola Labs, LLC, All Rights Reserved
                </p>
              </div>

              {/* Built by Cupola Logo */}
              <a
                href="https://cupolalabs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="/built-by-cupola.svg"
                  alt="Built by Cupola"
                  className="w-[72px] h-[31.63px] text-soft-silver"
                />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
