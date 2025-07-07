import Link from "next/link";
import Image from "next/image";

import MainHeaderbackground from "./main-header-background";
import NavLink from "./nav-link";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <MainHeaderbackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
