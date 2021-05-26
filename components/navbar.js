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
          RUMAH KOPI BANJARNEGARA
        </span>
      </div>
      <div className="flex" style={{ width: "20px", height: "30px" }}></div>
    </div>
  );
};

export default Navbar;
