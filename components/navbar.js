import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return !isOpen ? (
    <div className={styles.container + " flex flex-between"}>
      <Link href="/">
        <a className="flex">
          <div style={{ width: "30px", height: "30px" }}>
            <Image src="/images/rumahkopi.png" width="30px" height="30px" />
          </div>

          <span className="lg bold" style={{ marginLeft: "0.5rem" }}>
            RUMAH KOPI
          </span>
        </a>
      </Link>

      <nav className={styles.menuContainer}>
        <ul className="flex">
          <li className={styles.menu + " lg"}>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className={styles.menu + " lg"}>
            <Link href="/about">
              <a>TENTANG KAMI</a>
            </Link>
          </li>
          <li className={styles.menu + " lg"}>
            <Link href="/gallery">
              <a>GALERI FOTO</a>
            </Link>
          </li>
          <li className={styles.menu + " lg"}>
            <Link href="/locations">
              <a>LOKASI</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={styles.hamburger + " flex"}
        style={{ width: "20px", height: "30px" }}
        onClick={() => setIsOpen(true)}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </div>
    </div>
  ) : (
    <div className={styles.mobileMenu}>
      <nav>
        <ul>
          <Link href="/">
            <li
              className={styles.mobileMenuLink}
              style={{ display: "flex", justifyContent: "flex-end" }}
              onClick={() => setIsOpen(false)}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                className="svg-inline--fa fa-times fa-w-11"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </li>
          </Link>
          <Link href="/">
            <li className={styles.mobileMenuLink}>
              <a>HOME</a>
            </li>
          </Link>
          <Link href="/about">
            <li className={styles.mobileMenuLink}>
              <a>TENTANG KAMI</a>
            </li>
          </Link>
          <Link href="/gallery">
            <li className={styles.mobileMenuLink}>
              <a>GALERI FOTO</a>
            </li>
          </Link>
          <Link href="/locations">
            <li className={styles.mobileMenuLink}>
              <a>LOKASI</a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
