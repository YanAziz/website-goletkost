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

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {PROPERTIES_KOST.map((kost) => (
          <CarouselItem
            key={kost.title}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <div className="pt-2 pb-4">
              <ProductCardKost property={kost} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

const Properties = () => {
  return (
    <section className="py-4">
      <h1 className="text-lg font-semibold">Kost untuk kamu</h1>
      <CarouselPlugin />
    </section>
  );
};

export default Properties;
