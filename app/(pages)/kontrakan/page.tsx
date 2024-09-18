import ProductCardKontrakan from "@/components/ProductCardKontrakan";
import { Button } from "@/components/ui/button";
import { PROPERTIES_KONTRAKAN } from "@/constants/ProductData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const PropertyPage = () => {
  return (
    <section className="max-padd-container py-20">
      <h1 className="text-lg font-semibold">Daftar semua kontrakan</h1>
      <div className="grid grid-cols-2 gap-4 pt-2 pb-4">
        {PROPERTIES_KONTRAKAN.map((property) => (
          <div key={property.id}>
            <ProductCardKontrakan property={property} />
          </div>
        ))}
      </div>
      <Link href={"/"}>
        <Button className="bg-slate-900 text-white w-full gap-2">
          <ArrowLeft className="w-4 h-4 text-white" />
          Kembali ke halaman utama
        </Button>
      </Link>
    </section>
  );
};

export default PropertyPage;
