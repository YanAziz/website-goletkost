import AllPropertiesKontrakanPoltekkesSemarang from "@/components/AllPropertiesKontrakanPoltekkesSemarang";
import AllPropertiesKostPoltekkesSemarang from "@/components/AllPropertiesKostPoltekkesSemarang";
import BannerPoltekkesSemarang from "@/components/BannerPoltekkesSemarang";
import { Button } from "@/components/ui/button";
import { PROPERTIES_KONTRAKAN, PROPERTIES_KOST } from "@/constants/ProductData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const UhbPropertiesPage = () => {
  return (
    <section className="max-padd-container pt-14">
      <BannerPoltekkesSemarang />
      <AllPropertiesKostPoltekkesSemarang properties={PROPERTIES_KOST} />
      <AllPropertiesKontrakanPoltekkesSemarang
        properties={PROPERTIES_KONTRAKAN}
      />
      <Link href={"/"} className="pb-4">
        <Button className="bg-slate-900 text-white w-full gap-2">
          <ArrowLeft className="w-4 h-4 text-white" />
          Kembali ke halaman utama
        </Button>
      </Link>
    </section>
  );
};

export default UhbPropertiesPage;
