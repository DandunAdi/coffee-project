import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container + " flex flex-between"}>
      <div className="flex">
        <div style={{ width: "30px", height: "30px" }}>
          <Image src="/images/rumahkopi.png" width="30px" height="30px" />
        </div>
        <span className="lg bold" style={{ marginLeft: "0.5rem" }}>
          RUMAH KOPI
        </span>
      </div>
      <div className="flex" style={{ width: "20px", height: "30px" }}>
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
  );
};

export default Navbar;
