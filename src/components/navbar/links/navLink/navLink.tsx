"use client";
import React from "react";
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = (prop) => {
  const pathName = usePathname();

  return (
    <Link
      href={prop.item.path}
      className={`${styles.container} ${
        pathName === prop.item.path && styles.active
      } `}
    >
      {prop.item.title}
    </Link>
  );
};

export default NavLink;
