"use client";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestTage = (props) => {
  const router = useRouter();
  const pathName = usePathname();
  const query = useSearchParams();
  console.log(pathName);
  console.log(query);

  const handleClick = () => {
    console.log("Clicked");
    router.push("/");
  };
  return (
    <div>
      <Link href="navigation" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};
export default NavigationTestTage;
