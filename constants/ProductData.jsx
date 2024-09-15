// images properties (kontrakan)
import imgkt1 from "../public/assets/img/kontrakan/1_UMPPusat_1.png";
import imgkt2 from "../public/assets/img/kontrakan/1_UMPPusat_2.png";
import imgkt3 from "../public/assets/img/kontrakan/1_UMPPusat_3.png";
import imgkt4 from "../public/assets/img/kontrakan/2_UMPPusat_1.png";
import imgkt5 from "../public/assets/img/kontrakan/2_UMPPusat_2.png";
import imgkt6 from "../public/assets/img/kontrakan/2_UMPPusat_3.png";
import imgkt7 from "../public/assets/img/kontrakan/3_UHB-UMPPusat_1.png";
import imgkt8 from "../public/assets/img/kontrakan/3_UHB-UMPPusat_2.png";
import imgkt9 from "../public/assets/img/kontrakan/3_UHB-UMPPusat_3.png";

// properties data (kontrakan)
export const PROPERTIES_KONTRAKAN = [
  {
    title: "Kontrakan UMP Pusat 1",
    images: {
      img1: imgkt1,
      img2: imgkt2,
      img3: imgkt3,
    },
    facilities: {
      bedrooms: 4,
      bathrooms: 2,
      wide: 50,
      // parkings: 3,  parkings car
    },
    price: "12.000.000",
    area: "ump",
    range: "0.5 km - UMP Pusat",
    rating: 4.5,
  },
  {
    title: "Kontrakan UMP Pusat 2",
    images: {
      img1: imgkt4,
      img2: imgkt5,
      img3: imgkt6,
    },
    facilities: {
      bedrooms: 5,
      bathrooms: 3,
      wide: 60,
    },
    price: "13.500.000",
    area: "ump",
    range: "0.3 km - UMP Pusat",
    rating: 4.6,
  },
  {
    title: "Kontrakan UHB - UMP Pusat 1",
    images: {
      img1: imgkt7,
      img2: imgkt8,
      img3: imgkt9,
    },
    facilities: {
      bedrooms: 3,
      bathrooms: 1,
      wide: 46,
    },
    price: "10.000.000",
    area: ["uhb", "ump"],
    range: "0.5 km - UMP Pusat",
    rating: 4.6,
  },
];

// images properties (kost)
import imgks1 from "../public/assets/img/kost/1_UnsoedBelakang_1.png";
import imgks2 from "../public/assets/img/kost/1_UnsoedBelakang_2.png";
import imgks3 from "../public/assets/img/kost/1_UnsoedBelakang_3.png";
import imgks4 from "../public/assets/img/kost/2_UnsoedBelakang_1.png";
import imgks5 from "../public/assets/img/kost/2_UnsoedBelakang_2.png";
import imgks6 from "../public/assets/img/kost/2_UnsoedBelakang_3.png";
import imgks7 from "../public/assets/img/kost/3_UnsoedBelakang_1.png";
import imgks8 from "../public/assets/img/kost/3_UnsoedBelakang_2.png";
import imgks9 from "../public/assets/img/kost/3_UnsoedBelakang_3.png";
import imgks10 from "../public/assets/img/kost/4_UnsoedDepan_1.png";
import imgks11 from "../public/assets/img/kost/4_UnsoedDepan_2.png";
import imgks12 from "../public/assets/img/kost/4_UnsoedDepan_3.png";

// properties data (kost)
export const PROPERTIES_KOST = [
  {
    title: "Kost Unsoed Belakang 1",
    images: {
      img1: imgks1,
      img2: imgks2,
      img3: imgks3,
    },
    facilities: "Free wifi, listrik, air",
    luas: "3 x 3",
    gender: "Laki - laki",
    price: "8.500.000",
    rating: 4.5,
    range: "0.1 km - F.Ilmu Budaya",
    // bathroom: "dalam", kamar mandi
    area: "unsoed",
  },
  {
    title: "Kost Unsoed Belakang 2",
    images: {
      img1: imgks4,
      img2: imgks5,
      img3: imgks6,
    },
    facilities: "Free wifi, listrik, air",
    luas: "3 x 4",
    gender: "Laki - laki",
    price: "9.500.000",
    rating: 4.6,
    range: "0.2 km - F.Peternakan",
    area: "unsoed",
  },
  {
    title: "Kost Unsoed Belakang 3",
    images: {
      img1: imgks7,
      img2: imgks8,
      img3: imgks9,
    },
    facilities: "Free wifi, listrik, air",
    luas: "3 x 3",
    gender: "Perempuan",
    price: "7.500.000",
    rating: 4.5,
    range: "0.1 km dari F.Biologi",
    area: "unsoed",
  },
  {
    title: "Kost Unsoed Depan 1",
    images: {
      img1: imgks10,
      img2: imgks11,
      img3: imgks12,
    },
    facilities: "Free wifi, listrik, air",
    luas: "3 x 4",
    gender: "Laki - laki",
    price: "9.000.000",
    rating: 4.8,
    range: "0.2 km - F.Farmasi",
    area: "unsoed",
  },
];
