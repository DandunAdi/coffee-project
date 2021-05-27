import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Title from "./title";
import Image from "next/image";

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
        centerMode={true}
        centerSlidePercentage={50}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <Image
              src={`/images/label/${i}.png`}
              width="400px"
              height="400px"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
