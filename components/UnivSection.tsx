import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UnivLogos } from "@/constants/PageData";

const UnivSection = () => {
  return (
    <section className="flex flex-col gap-2 pb-4">
      <h1 className="text-lg font-semibold md:text-xl md:font-bold">
        Kuliah dimana nih?
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {UnivLogos.map((logo) => (
          <Link
            href={logo.url}
            key={logo.title}
            className="flex bg-white items-center gap-2 p-2 rounded-lg border border-slate-300 shadow-md text-sm font-medium pl-5"
          >
            <Image
              src={logo.image}
              alt="univ-logo"
              width={50}
              height={50}
              className="w-10"
            />
            {logo.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UnivSection;
