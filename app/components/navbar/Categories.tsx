"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { AiOutlineRobot } from "react-icons/ai"; // For Robotics
import { BiBuildingHouse } from "react-icons/bi"; // For Real Estate and Construction
import {
  FaLaptopCode,
  FaUniversity,
  FaHeartbeat,
  FaLaptop,
} from "react-icons/fa"; // For Developer Tools, Education, Healthcare
import { GiArtificialHive, GiShoppingCart } from "react-icons/gi"; // For Artificial Intelligence, E-Commerce
import {
  MdBusinessCenter,
  MdOutlineBusiness,
  MdOutlineShoppingBasket,
} from "react-icons/md"; // For B2B, SaaS, E-Commerce
import { RiGovernmentLine, RiStore2Line } from "react-icons/ri"; // For Government, Marketplace
import { TbCashBanknote, TbUsers } from "react-icons/tb"; // For Fintech, Consumer

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "A.I.",
    icon: GiArtificialHive, // Changed to a more representative icon
    description: "Discover startups specializing in AI and machine learning.",
  },
  {
    label: "B2B",
    icon: MdBusinessCenter,
    description: "Explore B2B startups offering enterprise solutions.",
  },
  {
    label: "Consumer",
    icon: TbUsers, // Changed to an icon representing a group of users/consumers
    description: "Find consumer-focused startups with innovative products.",
  },
  {
    label: "Dev Tools",
    icon: FaLaptopCode,
    description: "Innovative tools and platforms for developers.",
  },
  {
    label: "eCommerce",
    icon: MdOutlineShoppingBasket, // Changed to an icon depicting a shopping basket for e-commerce
    description: "Startups transforming the online shopping experience.",
  },
  {
    label: "Education",
    icon: FaUniversity,
    description: "Startups focused on educational technology and services.",
  },
  {
    label: "Fintech",
    icon: TbCashBanknote,
    description:
      "Financial technology startups revolutionizing money management.",
  },
  {
    label: "Government",
    icon: RiGovernmentLine,
    description: "Startups working on government technology and services.",
  },
  {
    label: "Healthcare",
    icon: FaHeartbeat, // For a clearer association with healthcare
    description: "Healthcare startups innovating medical and health services.",
  },
  {
    label: "Industrials",
    icon: MdOutlineBusiness, // Using a business icon as a placeholder
    description: "Startups in the industrial sector driving efficiency.",
  },
  {
    label: "Marketplace",
    icon: RiStore2Line,
    description: "Online marketplace startups connecting buyers and sellers.",
  },
  {
    label: "Real Estate",
    icon: BiBuildingHouse,
    description:
      "Startups innovating in property, real estate, and construction.",
  },
  {
    label: "Robotics",
    icon: AiOutlineRobot,
    description: "Robotics startups leading advancements in automation.",
  },
  {
    label: "SaaS",
    icon: FaLaptop, // Changed to a corporate building representing SaaS businesses
    description:
      "Software as a Service startups providing cloud-based solutions.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname(); //usePathname is a hook that returns the current pathname of the URL
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
