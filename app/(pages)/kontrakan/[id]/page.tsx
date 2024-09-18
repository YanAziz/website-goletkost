"use client";

import { useParams } from "next/navigation";
import { PROPERTIES_KONTRAKAN } from "@/constants/ProductData";
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
import { ArrowLeft, MessageCircleWarning, Star, Wallet } from "lucide-react";
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineGarage,
} from "react-icons/md";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  const { id } = useParams();
  const kontrakan = PROPERTIES_KONTRAKAN.find(
    (kontrakan) => kontrakan.id === id
  );
  const images = kontrakan?.images ?? {};

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {Object.keys(images).map((key: string, index: number) => (
          <CarouselItem key={index}>
            <div>
              <Image
                key={index}
                src={images[key as keyof typeof images]}
                alt={kontrakan?.title || ""}
                className="w-full object-cover rounded-b-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

const KontrakanDetailPage = () => {
  const { id } = useParams();
  const kontrakan = PROPERTIES_KONTRAKAN.find(
    (kontrakan) => kontrakan.id === id
  );

  if (!kontrakan) {
    return <p>Kontrakan tidak ditemukan</p>;
  }

  return (
    <div className="max-padd-container pt-16 flex flex-col gap-4">
      <CarouselPlugin />
      <h1 className="text-xl font-semibold">{kontrakan.title}</h1>
      <hr />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <p className="text-sm">{kontrakan.rating}</p>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircleWarning className="w-4 h-4" />
          <p className="text-sm">Kontrakan {kontrakan.furnished}</p>
        </div>
        <div className="flex items-center gap-1">
          <Wallet className="w-4 h-4" />
          <p className="text-sm">Rp. {kontrakan.price} /th</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <MdOutlineBed className="w-4 h-4" />
          <p className="text-sm">{kontrakan.facilities.bedrooms} kamar tidur</p>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineBathtub className="w-4 h-4" />
          <p className="text-sm">
            {kontrakan.facilities.bathrooms} kamar mandi
          </p>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineGarage className="w-4 h-4" />
          <p className="text-sm">{kontrakan.facilities.parkings} mobil</p>
        </div>
      </div>
      <Link href={"/kontrakan"} className="pb-4">
        <Button className="bg-slate-900 text-white w-full gap-2">
          <ArrowLeft className="w-4 h-4 text-white" />
          Kembali ke daftar kontrakan
        </Button>
      </Link>
    </div>
  );
};

export default KontrakanDetailPage;
