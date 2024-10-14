import { FOOTER_CONTACT_INFO, SOCIALS } from "@/constants/NavData";
import Link from "next/link";
import React, { ReactNode } from "react";

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-semibold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

const GetInTouch = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="pt-10 md:px-20 lg:px-36">
        <div className="pt-4 pb-8 bg-white rounded-t-lg xl:pt-8">
          {/* container */}
          <div className="flex flex-col justify-between gap-x-2 gap-y-4 px-4">
            <div className="flex flex-col">
              <Link href={"/"} className="flex items-center gap-x-2 pb-2">
                <span className="font-semibold text-2xl">Get In Touch</span>
              </Link>
              <hr />
              <p className="py-4">
                Goletkost berkomitmen sebagai penghubung antara anda dengan
                pemilik properti sekaligus menyediakan rekomendasi properti yang
                terbaik untuk anda tinggali.
              </p>
            </div>
            <div className="flex flex-wrap justify-between gap-8">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href={"/"}
                    key={link.label}
                    className="flex gap-2 md:flex-col lg:flex-row text-sm"
                  >
                    <p>{link.label}</p>:<p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
              <div className="flex md:pr-8">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="flex gap-4">
                    {SOCIALS.links.map((link) => (
                      <Link
                        href={link.link}
                        key={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl"
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <p className="flex px-8 py-2 bg-gray-900 text-white rounded-b-3xl justify-between text-xs">
          <span>&copy; 2024 GoletKost.com</span>All rights reserved
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
