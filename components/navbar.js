import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container + " flex flex-between"}>
      <div className="flex">
        <Image src="/images/rumahkopi.png" width="30px" height="30px" />
        <span className="lg bold" style={{ marginLeft: "0.5rem" }}>
          RUMAH KOPI BANJARNEGARA
        </span>
      </div>
      <i className="fa fa-bars lg"></i>
    </div>
  );
};

export default Navbar;
