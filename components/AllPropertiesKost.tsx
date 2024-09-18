"use client";

import { PROPERTIES_KOST } from "@/constants/ProductData";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCardKost from "./ProductCardKost";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Properties = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const MAX_CARDS_TO_SHOW = 10;
  return (
    <section className="pt-2">
      <h1 className="text-lg font-semibold">Kost untuk kamu</h1>
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {PROPERTIES_KOST.slice(0, MAX_CARDS_TO_SHOW).map((kost) => (
            <CarouselItem
              key={kost.id}
              {...kost}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="pt-2 pb-4">
                <ProductCardKost property={kost} />
              </div>
            </CarouselItem>
          ))}
          {PROPERTIES_KOST.length > MAX_CARDS_TO_SHOW && (
            <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <Link href="/kost">
                <div className="pt-2 pb-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 h-[250px] w-full gap-2 flex justify-center flex-col items-center">
                    <p className="text-base">Lihat lebih banyak</p>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Properties;
