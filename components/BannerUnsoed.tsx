import React from "react";
import logo from "@/public/assets/univ-logo/logo-unsoed.png";
import Image from "next/image";

const BannerUnsoed = () => {
  return (
    <div className="bg-banner-univ py-8 bg-no-repeat bg-center bg-cover flex justify-center items-center rounded-b-xl shadow-xl">
      <Image src={logo} alt="Unsoed" className="w-24" />
    </div>
  );
};

export default BannerUnsoed;
