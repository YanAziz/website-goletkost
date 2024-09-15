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
        {PROPERTIES_KONTRAKAN.map((kontrakan) => (
          <CarouselItem
            key={kontrakan.title}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="pt-2 pb-4">
              <ProductCardKontrakan property={kontrakan} />
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
      <h1 className="text-lg font-semibold">Butuh kontrakan?</h1>
      <CarouselPlugin />
    </section>
  );
};

export default Properties;
