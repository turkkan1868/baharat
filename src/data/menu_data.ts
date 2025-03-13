import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/header/home-1.jpg";
import demo_img_2 from "@/assets/img/header/home-2.jpg";
import demo_img_3 from "@/assets/img/header/home-3.jpg";

interface DataType {
	id: number;
	title: string;
	link: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
		demo_img?: StaticImageData;
	}[];
}

// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Ana Sayfa",
		link: "#",
		img_dropdown: true,
		sub_menus: [
			{ link: "/", title: "Ana Sayfa 01", demo_img: demo_img_1 },
			
		],
	},
	{
		id: 2,
		title: "Hakkımızda",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Hizmetlerimiz",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/service", title: "Hizmetler" },
			{ link: "/service-details", title: "Hizmet Detayları" },
		],
	},
	
	{
		id: 4,
		title: "Blog",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/blog", title: "Blog" },
			{ link: "/blog-details", title: "Blog Detayları" },
		],
	},
	

	{
		id: 5,
		title: "İletişim",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;