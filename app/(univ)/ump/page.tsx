import AllPropertiesKontrakanUMP from "@/components/AllPropertiesKontrakanUMP";
import AllPropertiesKostUMP from "@/components/AllPropertiesKostUMP";
import BannerUMP from "@/components/BannerUMP";
import { Button } from "@/components/ui/button";
import { PROPERTIES_KONTRAKAN, PROPERTIES_KOST } from "@/constants/ProductData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const UmpPropertiesPage = () => {
  return (
    <section className="max-padd-container pt-14">
      <BannerUMP />
      <AllPropertiesKostUMP properties={PROPERTIES_KOST} />
      <AllPropertiesKontrakanUMP properties={PROPERTIES_KONTRAKAN} />
      <Link href={"/"} className="pb-4">
        <Button className="bg-slate-900 text-white w-full gap-2">
          <ArrowLeft className="w-4 h-4 text-white" />
          Kembali ke halaman utama
        </Button>
      </Link>
    </section>
  );
};

export default UmpPropertiesPage;
