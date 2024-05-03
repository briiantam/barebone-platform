"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className=" md:block cursor-pointer" //hidden
      src="/images/barebone_logo.png"
      height="200"
      width="200"
      alt="Logo"
    />
  );
};

export default Logo;
