"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconPointerFilled, IconSparkles } from "@tabler/icons-react";
import { LogoCarousel } from "../ui/logo-carousel";
import Gradient from "../gradient";
import FloatingIcons from "../floating-icons";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { domain } from "@/lib/domain";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "../ui/animated-shiny-text";

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden">
        <section className="flex max-w-6xl mx-auto relative flex-col items-center justify-center h-full pt-24 px-4 sm:pt-36">
        <div
          className={cn(
            "group relative rounded-full border border-black/5 bg-neutral-100 text-sm sm:text-base max-sm:mb-2 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-0.5">
            <span>✨ Powered by <Link href="https://dub.sh/nebius" target="_blank">
            Nebius AI</Link></span>
            <ArrowRightIcon className="ml-1 size-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
          <Gradient />
          <FloatingIcons />
          
          <div className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-center">
            Design your brand's future with <br />
            <span className="font-extrabold bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Brandify
            </span>
          </div>
          <div className="text-base md:text-lg mt-8 font-semibold w-full lg:w-[50%] text-center text-neutral-600 dark:text-neutral-300">
            Instantly generate unique, professional logos for your business, startup, or personal brand.
          </div>

          <div className="mt-10 flex sm:flex-row flex-col w-full md:w-auto items-center gap-4">
            <SignedIn>
              <Link href="/generate" className="w-full md:w-auto">
                <Button className="h-8 w-full px-6 py-5 transition-all hover:opacity-90 hover:scale-105">
                  Try for free! <IconPointerFilled className="w-4 h-4" />
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton
                signUpForceRedirectUrl={`${domain}/generate`}
                forceRedirectUrl={`${domain}/generate`}
                mode="modal"
              >
                <Button className="h-8 w-full px-6 py-5 transition-all hover:opacity-90 hover:scale-105">
                  Try for free! <IconPointerFilled className="w-4 h-4" />
                </Button>
              </SignInButton>
            </SignedOut>
            <Link href="/gallery" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="h-8 w-full px-6 py-5 transition-all hover:shadow-[0_0_20px_2px_hsl(var(--primary))]"
              >
                See Examples{" "}
                <IconSparkles className="fill-[hsl(var(--primary))] text-primary dark:fill-[hsl(var(--foreground))] dark:text-foreground" />
              </Button>
            </Link>
          </div>
          <LogoCarousel />
        </section>
      </div>
    </>
  );
}
