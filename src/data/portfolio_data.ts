

import portfolio_img_1 from "@/assets/img/gallery/feature1.jpg";
import portfolio_img_2 from "@/assets/img/gallery/feature2.jpg";
import portfolio_img_3 from "@/assets/img/gallery/feature3.jpg";
import portfolio_img_4 from "@/assets/img/gallery/feature4.jpg";
import portfolio_img_5 from "@/assets/img/gallery/feature5.jpg";
import portfolio_img_6 from "@/assets/img/gallery/feature6.jpg";
import portfolio_img_7 from "@/assets/img/gallery/feature7.jpg";
import portfolio_img_8 from "@/assets/img/gallery/feature8.jpg";
import { StaticImageData } from "next/image";

interface PortfolioDataType {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
  category: string;
  description: string;
}

const portfolio_data:PortfolioDataType[] = [
  {
    id: 1,
    title: "Kırmızı Pul Biber",
    price: 120,
    image: portfolio_img_1,
    category: "Taze",
    description: "Yemeklerinize lezzet katacak kaliteli baharat",
  },
  {
    id: 2,
    title: "Karabiber",
    price: 80,
    image: portfolio_img_2,
    category: "Organik",
    description: "Doğal ve aromatik karabiber çeşitleri",
  },
  {
    id: 3,
    title: "Kimyon",
    price: 45,
    image: portfolio_img_3,
    category: "Baharatlar",
    description: "Köfte ve et yemeklerinin vazgeçilmezi",
  },
  {
    id: 4,
    title: "Zerdeçal",
    price: 44,
    image: portfolio_img_4,
    category: "Baharatlar",
    description: "Sağlık dolu altın baharat",
  },
  {
    id: 5,
    title: "Tarçın",
    price: 80,
    image: portfolio_img_5,
    category: "Organik",
    description: "Tatlıların vazgeçilmez aroması",
  },
  {
    id: 6,
    title: "Kekik",
    price: 45,
    image: portfolio_img_6,
    category: "Taze",
    description: "Akdeniz mutfağının vazgeçilmezi",
  },
  // data repeat
  {
    id: 7,
    title: "Sumak",
    price: 120,
    image: portfolio_img_7,
    category: "Taze",
    description: "Salatalarınıza ekşi bir tat katın",
  },
  {
    id: 8,
    title: "Yenibahar",
    price: 80,
    image: portfolio_img_8,
    category: "Organik",
    description: "Dolma ve sarmalar için ideal baharat",
  },
  {
    id: 9,
    title: "Köri",
    price: 45,
    image: portfolio_img_3,
    category: "Baharatlar",
    description: "Hint mutfağının vazgeçilmez karışımı",
  },
  {
    id: 10,
    title: "Defne Yaprağı",
    price: 44,
    image: portfolio_img_4,
    category: "Baharatlar",
    description: "Çorba ve et yemeklerine aroma katar",
  },
  {
    id: 11,
    title: "Safran",
    price: 380,
    image: portfolio_img_5,
    category: "Organik",
    description: "Dünyanın en değerli baharatı",
  },
  {
    id: 12,
    title: "Nane",
    price: 45,
    image: portfolio_img_6,
    category: "Taze",
    description: "Çorba ve yoğurtlu yemeklerin vazgeçilmezi",
  },
]

export default portfolio_data