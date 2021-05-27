import Image from "next/image";
import styles from "./bigMenu.module.css";

const BigMenu = ({ title, imgSrc }) => {
  return (
    <div className={styles.container}>
      <Image src={imgSrc} layout="fill" objectFit="cover" />
      <div className="abs-center">
        <div
          style={{
            width: "5rem",
            borderBottom: "2px solid #fff",
            margin: "0 auto 1rem",
          }}
        ></div>
        <h1 className={styles.title + " xxl text-center"}>{title}</h1>
        <div
          style={{
            width: "5rem",
            borderBottom: "2px solid #fff",
            margin: "1rem auto 0",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BigMenu;
