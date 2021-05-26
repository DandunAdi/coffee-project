import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container + " flex flex-between"}>
      <div className="flex">
        <Image src="/images/rumahkopi.png" width="50px" height="50px" />
        <span>RUMAH KOPI BANJARNEGARA</span>
      </div>
      <i className="fa fa-bars"></i>
    </div>
  );
};

export default Navbar;
