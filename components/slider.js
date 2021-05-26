import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <div
          style={{
            width: "15rem",
            borderBottom: "2px solid rgb(68, 68, 68)",
            margin: "0 auto 1rem",
          }}
        ></div>
        <h1 className="xxl text-center">CURRENTLY ROASTING</h1>
        <div
          style={{
            width: "15rem",
            borderBottom: "2px solid rgb(68, 68, 68)",
            margin: "1rem auto 0",
          }}
        ></div>
      </div>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
      >
        <div>
          <img src="images/coffee_at_hand.jpg" />
        </div>
        <div>
          <img src="images/coffee_at_hand.jpg" />
        </div>
        <div>
          <img src="images/coffee_at_hand.jpg" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
