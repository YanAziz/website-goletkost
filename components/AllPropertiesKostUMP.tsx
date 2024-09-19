"use client";

import * as React from "react";
import ProductCardKost from "./ProductCardKost";
import { StaticImageData } from "next/image";

interface PropertyKostProps {
  id: string;
  title: string;
  images: {
    img1: StaticImageData;
    img2: StaticImageData;
    img3: StaticImageData;
    img4: StaticImageData;
    img5: StaticImageData;
  };
  facilities: string;
  note: string;
  wide: string;
  gender: string;
  price: string;
  rating: number;
  bathroom: string;
  area: string | string[];
  link: string;
}

interface Properties {
  properties: PropertyKostProps[];
}

const AllPropertiesKostUMP = ({ properties }: Properties) => {
  const filteredProperties = properties.filter((kost) =>
    kost.area.includes("ump")
  );
  return (
    <div className="pt-4">
      <p className="text-lg font-semibold">Daftar kost area UMP</p>
      <div
        className={`grid gap-x-2 pb-4 ${
          filteredProperties.length === 0
            ? "grid-cols-1"
            : "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
        }`}
      >
        {filteredProperties.length > 0 ? (
          filteredProperties.map((kost) => (
            <div className="py-2" key={kost.title}>
              <ProductCardKost property={kost} />
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

export default AllPropertiesKostUMP;
