import React from "react";
import logo from "@/public/assets/univ-logo/logo-telkom.png";
import Image from "next/image";

const BannerTelkom = () => {
  return (
    <div className="bg-banner-univ py-8 bg-no-repeat bg-center bg-cover flex justify-center items-center rounded-b-xl shadow-xl">
      <Image src={logo} alt="Telkom" className="w-24" />
    </div>
  );
};

export default BannerTelkom;
