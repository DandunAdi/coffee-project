import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Title from "./title";

const Slider = () => {
  return (
    <section className="dot-bg" style={{ padding: "2rem 0" }}>
      <Title text="CURRENTLY ROASTING" size="xxl" />
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
      >
        <div>
          <img src="images/label/1.png" />
        </div>
        <div>
          <img src="images/label/2.png" />
        </div>
        <div>
          <img src="images/label/3.png" />
        </div>
        <div>
          <img src="images/label/4.png" />
        </div>
        <div>
          <img src="images/label/5.png" />
        </div>
        <div>
          <img src="images/label/6.png" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
