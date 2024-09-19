"use client";

import * as React from "react";
import ProductCardKontrakan from "./ProductCardKontrakan";
import { StaticImageData } from "next/image";

interface PropertyKontrakanProps {
  id: string;
  title: string;
  images: {
    img1: StaticImageData;
    img2: StaticImageData;
    img3: StaticImageData;
    img4: StaticImageData;
    img5: StaticImageData;
  };
  facilities: {
    bedrooms: number;
    bathrooms: number;
    parkings: number;
  };
  description: string;
  price: string;
  area: string | string[];
  rating: number;
  furnished: string;
  link: string;
}

interface Properties {
  properties: PropertyKontrakanProps[];
}

const AllPropertiesKontrakanUnsoed = ({ properties }: Properties) => {
  const filteredProperties = properties.filter((kontrakan) =>
    kontrakan.area.includes("unsoed")
  );
  return (
    <div className="pt-4">
      <p className="text-lg font-semibold">Daftar kontrakan area Unsoed</p>
      <div
        className={`grid gap-x-2 pb-4 ${
          filteredProperties.length === 0
            ? "grid-cols-1"
            : "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
        }`}
      >
        {filteredProperties.length > 0 ? (
          filteredProperties.map((kontrakan) => (
            <div className="py-2" key={kontrakan.title}>
              <ProductCardKontrakan property={kontrakan} />
            </div>
          ))
        ) : (
          <p className="text-base text-red-500">
            Tidak ada data yang ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllPropertiesKontrakanUnsoed;
