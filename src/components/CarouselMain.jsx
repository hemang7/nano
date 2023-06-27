import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

function CarouselMain() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img2}
          title="Energy Harvest & Storage"
          desc="Our expertise lies in maximizing the utilization of renewable energy sources and implementing efficient storage systems. From solar and wind power solutions to advanced energy storage technologies, we help businesses optimize their energy usage and reduce their carbon footprint"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img1}
          title="Industrial R&D"
          desc=" Our team of experts collaborates closely with businesses to understand their unique challenges and goals, delivering customized R&D solutions that drive growth and competitiveness. With our industrial R&D services, clients can unlock new opportunities, enhance their capabilities, and accelerate their path to success."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img3}
          title="Agrochemicals"
          desc="Enhance agricultural practices with our innovative agrochemical solutions. From fertilizers to pesticides, our products optimize crop protection and boost yields. With a focus on sustainability and quality, we help farmers mitigate risks and achieve higher productivity. Trust our expertise for effective agrochemical solutions."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img4}
          title="Cement"
          desc="Our cement solutions deliver durability and reliability. With a commitment to quality and innovation, we provide high-performance cement products that meet industry standards. From residential buildings to infrastructure projects, our cement solutions ensure long-lasting structural integrity."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img5}
          title="Pigment & Polymer"
          desc="Vibrant colors, enhanced materials. Our solutions for pigments and polymers offer endless possibilities. From paints to plastics, we provide high-quality pigments for vivid hues and advanced polymer technologies for improved performance. Unleash your creativity with our innovative solutions."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img6}
          title="Policy & Analytics"
          desc="Data-driven insights for informed decisions. Navigate regulations and optimize strategies with our expertise. Get actionable recommendations and evidence-based decision-making support. Stay ahead of the curve with our comprehensive policy and analytics solutions."
        />
      ),
    },
  ];
  return (
    <div className="" style={{ marginBottom: 350 }}>
      <Carousel
        cards={cards}
        height="500px"
        width="70%"
        margin="auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CarouselMain;
