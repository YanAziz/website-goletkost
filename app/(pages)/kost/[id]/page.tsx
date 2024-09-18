"use client";

import { useParams } from "next/navigation";
import { PROPERTIES_KOST } from "@/constants/ProductData";
import Image from "next/image";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Bath, Star, User, Wallet } from "lucide-react";

const KostDetailPage = () => {
  const { id } = useParams();
  const kost = PROPERTIES_KOST.find((kost) => kost.id === id);

  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  if (!kost) {
    return <p>Kost tidak ditemukan</p>;
  }

  const images = kost?.images ?? {};

  return (
    <div className="max-padd-container pt-16 flex flex-col gap-4">
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {Object.keys(images).map((key: string, index: number) => (
            <CarouselItem key={index}>
              <div>
                <Image
                  key={index}
                  src={images[key as keyof typeof images]}
                  alt={kost?.title || ""}
                  className="w-full object-cover rounded-b-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <h1 className="text-xl font-semibold">{kost.title}</h1>
      <hr />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <p className="text-sm">{kost.gender}</p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <p className="text-sm">{kost.rating}</p>
        </div>
        <div className="flex items-center gap-1">
          <Wallet className="w-4 h-4" />
          <p className="text-sm">Rp. {kost.price} /th</p>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="w-4 h-4" />
          <p className="text-sm">Kamar mandi {kost.bathroom}</p>
        </div>
      </div>
      <div>
        <p className="text-sm">
          Catatan : {kost.note || "tidak ada catatan tambahan"}
        </p>
      </div>
      <Link href={"/kost"} className="pb-4">
        <Button className="bg-slate-900 text-white w-full gap-2">
          <ArrowLeft className="w-4 h-4 text-white" />
          Kembali ke daftar kost
        </Button>
      </Link>
    </div>
  );
};

export default KostDetailPage;
