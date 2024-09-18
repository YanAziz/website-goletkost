"use client";

import { PROPERTIES_KONTRAKAN } from "@/constants/ProductData";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCardKontrakan from "./ProductCardKontrakan";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const MAX_CARDS_TO_SHOW = 5;
  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {PROPERTIES_KONTRAKAN.slice(0, MAX_CARDS_TO_SHOW).map((kontrakan) => (
          <CarouselItem
            key={kontrakan.title}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="pt-2 pb-4">
              <ProductCardKontrakan property={kontrakan} />
            </div>
          </CarouselItem>
        ))}
        {PROPERTIES_KONTRAKAN.length > MAX_CARDS_TO_SHOW && (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="pt-2 pb-4">
              <div className="bg-white rounded-lg shadow-lg p-4 w-full h-[450px] flex justify-center flex-col items-center">
                <Link href="/products">Lihat lebih banyak</Link>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
}

const Properties = () => {
  return (
    <section className="pb-2">
      <h1 className="text-lg font-semibold">Butuh kontrakan?</h1>
      <CarouselPlugin />
    </section>
  );
};

export default Properties;
