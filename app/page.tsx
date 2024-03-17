"use client";

import Hero from "@/components/Hero";
import Lodgings from "@/components/Lodgings";
import Regions from "@/components/Regions";
import Resorts from "@/components/Resorts";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <Regions />
      <Lodgings />
      <Resorts />
    </section>
  );
}
