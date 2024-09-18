import img from "@/public/assets/logo.jpg";

import { LayoutDashboard, House, ContactRound, Lamp } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
    { label: "Contact Number", value: "+62 8556 6776 578" },
    { label: "Email Address", value: "goletkost@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: <FaFacebook />, id: "facebook" },
    { icon: <FaInstagram />, id: "instagram" },
    { icon: <FaTwitter />, id: "twitter" },
    { icon: <FaYoutube />, id: "youtube" },
    { icon: <FaLinkedin />, id: "linkedin" },
  ],
};
