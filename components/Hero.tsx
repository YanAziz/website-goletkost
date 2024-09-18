import React from "react";
import { Button } from "@/components/ui/button";
import iconImage from "@/public/assets/iconHero.png";
import { ArrowUpRight, HeartHandshake, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen md:h-fit md:pt-24 md:pb-16 flex items-center justify-center flex-col md:gap-10 gap-8 pt-12 md:flex-row">
      <Image
        src={iconImage}
        alt="iconImage"
        className="pt-4 md:pt-8 w-40 md:w-80"
      />
      <div className="flex flex-col gap-4 md:pt-8">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold xl:text-3xl">
            Teman setia pencari kost!
          </h1>
          <p className="text-md md:pl-1 md:font-medium">by GoletKost</p>
        </div>
        <div className="flex justify-center md:justify-start gap-x-2 pb-2">
          <Link href={"/kost"}>
            <Button className="bg-gray-900 text-white gap-1" size="sm">
              Cari kost
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href={"/kontrakan"}>
            <Button className="bg-gray-900 text-white gap-1" size="sm">
              Cari kontrakan
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="flex gap-x-4 gap-y-4 flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center bg-white p-2 rounded-xl shadow-xl">
            <HeartHandshake />
            <div className="flex flex-col text-sm py-1 px-3">
              <h6 className="text-center font-semibold text-sm md:text-lg">
                Pelayanan maksimal
              </h6>
              <p className="text-center text-xs md:text-sm">
                Langsung diantar ke kost tanpa biaya pengantaran
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-2 rounded-xl shadow-xl">
            <Video />
            <div className="flex flex-col text-sm py-1 px-3">
              <h6 className="text-center font-semibold text-sm md:text-lg">
                Virtual tour
              </h6>
              <p className="text-center text-xs md:text-sm">
                Melihat kost secara virtual, tanya hingga detail kecil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
