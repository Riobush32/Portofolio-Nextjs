'use client'
import Image from "next/image";
import Hero from "./layouts/hero";
import About from "./layouts/about";
import Skills from "./layouts/skills";

import React from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconBrain } from "@tabler/icons-react";

export default function Home() {
    const navItems = [
    {
        name: "Hero",
        link: "#hero",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
        name: "About",
        link: "#about",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
        name: "Skills",
        link: "#skills",
        icon: (
            <IconBrain className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
        },
    ]
  return (
    <>
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Skills />
    </div>

    </>
  );
}
