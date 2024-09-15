import { MapPin, Star, Wallet } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineHome } from "react-icons/md";

interface PropertyKost {
  title: string;
  type: string;
  images: {
    img1: StaticImageData;
    img2: StaticImageData;
    img3: StaticImageData;
  };
  facilities: {
    bedrooms: number;
    bathrooms: number;
    wide: number;
  };
  luas: string;
  price: string;
  rating: number;
  range: string;
  area: string;
}

const ProductCardKontrakan = ({ property }: { property: PropertyKost }) => {
  return (
    <section className="border bg-white rounded-lg shadow-lg pb-2">
      <Image
        src={property.images.img1}
        alt={property.title}
        className="rounded-md"
      />
      <div className="absolute top-5 ps-2">
        <p className="text-xs font-semibold flex gap-1 px-1 py-1 rounded-sm items-center bg-green-700 text-white">
          <Star className="w-4 h-4" />
          {property.rating}
        </p>
      </div>
      <div className="pt-2 flex flex-col gap-1 px-2">
        <h1 className="text-sm font-semibold">{property.title}</h1>
        <p className="text-xs flex gap-x-1 items-center">
          <MapPin className="w-4 h-4" />
          {property.range}
        </p>
        <p className="text-xs flex gap-x-1 items-center">
          <Wallet className="w-4 h-4" />
          Rp. {property.price} /th
        </p>
      </div>
      <div className="flex py-2 gap-x-2 px-2">
        <div className="flex items-center gap-x-1 border-r text-xs border-slate-900/50 pr-2 font-[500]">
          <MdOutlineBed className="w-4 h-4" />
          {property.facilities.bedrooms}
        </div>
        <div className="flex items-center gap-x-1 border-r text-xs border-slate-900/50 pr-2 font-[500]">
          <MdOutlineBathtub className="w-4 h-4" />
          {property.facilities.bathrooms}
        </div>
        <div className="flex items-center gap-x-1 border-r text-xs border-slate-900/50 pr-2 font-[500]">
          <MdOutlineHome className="w-4 h-4" />
          {property.facilities.wide}{" "}
          <p>
            m<sup>2</sup>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCardKontrakan;
