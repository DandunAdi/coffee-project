import styles from "./content.module.css";
import Image from "next/image";

const Content = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentBg}>
          <Image src="/images/coffee_art.png" width="271" height="503" />
        </div>
        <h3 className="xl">WHERE DOES OUR COFFEE COME FROM?</h3>
        <p className={styles.contentBody}>
          We import good beans, roast them with care and brew them to the best
          of our abilities for the enjoyment of ourselves and all people who
          appreciate great coffee.
        </p>
        <div className="flex" style={{ marginTop: "3rem", textShadow: "none" }}>
          <span className="btn sm">READ MORE</span>
        </div>
      </div>
    </section>
  );
};

export default Content;
