import img from "@/public/assets/logo.jpg";

import { LayoutDashboard, House, ContactRound, Lamp } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// logo image
export const LogoImage = {
  image: img,
};

// navlinks
export const NavLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Beranda",
  },
  {
    url: "/kost",
    icon: <Lamp />,
    label: "Kost",
  },
  {
    url: "/kontrakan",
    icon: <House />,
    label: "Kontrakan",
  },
  {
    url: "/contact",
    icon: <ContactRound />,
    label: "Kontak",
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    {
      label: "Contact Number",
      value: "+62 857 1366 3602",
      link: "https://wa.me/6285713663602",
    },
    {
      label: "Email Address",
      value: "goletkost@gmail.com",
      link: "mailto:goletkost@gmail.com",
    },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    {
      icon: <FaInstagram />,
      id: "instagram",
      link: "https://www.instagram.com/infokost_purwokerto.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: <FaWhatsapp />,
      id: "whatsapp",
      link: "https://wa.me/6285713663602",
    },
  ],
};
