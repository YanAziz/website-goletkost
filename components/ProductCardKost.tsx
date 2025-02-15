import Image, { StaticImageData } from "next/image";
import React from "react";
import { BathIcon, Star, User, Wallet } from "lucide-react";
import Link from "next/link";

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

const ProductCardKost = ({ property }: { property: PropertyKostProps }) => {
  return (
    <Link href={`/kost/${property.id}`}>
      <div className="border bg-white rounded-lg shadow-lg pb-2">
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
        <div className="pt-1 flex flex-col px-2 gap-1">
          <h1 className="text-sm font-semibold">{property.title}</h1>
          <p className="text-xs flex gap-1 items-center">
            <User className="w-4 h-4" />
            {property.gender}
          </p>
          <p className="text-xs flex gap-1 items-center">
            <BathIcon className="w-4 h-4" /> Kamar mandi {property.bathroom}
          </p>
          <p className="text-xs flex gap-1 items-center">
            <Wallet className="w-4 h-4" />
            Rp. {property.price} /th
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardKost;
