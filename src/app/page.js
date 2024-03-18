'use client'
import Image from "next/image";
import Hero from "./layouts/hero";
import About from "./layouts/about";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
    </>
  );
}
