import Card from "../Card";
import alien1 from "../../assets/61184628-cd63-4a4f-a1f3-d0da2680b3d3 1.png";
import alien2 from "../../assets/5dd98d15-b620-483d-a205-2bae6561a9ea 1.png";
import alien3 from "../../assets/019845e5-ff15-4417-99e7-a2beaf54265e 1.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Carousel() {
  useGSAP(() => {
    let tl = gsap.timeline({
      delay: 0.5,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
    tl.fromTo(".last", { duration: 1, scale: 0 }, { scale: 1 })
      .fromTo(".second", { opacity: 0 }, { scale: 1.3, opacity: 1 })
      .fromTo(".first", { scale: 0.8, opacity: 0 }, { scale: 1.1, opacity: 1 });
  });
  // const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="carousel hidden w-full  items-center mt-14 md:mt-0 md:w-3/5  relative px-4 md:flex">
      <div className="first scale-[0.4] md:scale-100 absolute top-0 -mt-32 md:mt-0 left-[10%] md:relative z-30 md:-right-[25%]">
        <Card img={alien1} />
      </div>

      <div className="second  md:w-[250px] absolute right-0 w-[150px] h-[150px] md:relative top-[100%] md:-right-[10%] z-20   md:h-[250px] p-3 bg-opacity-15 bg-white rounded-md">
        <img className="  object-cover w-full h-full" src={alien2} alt="" />
      </div>
      <div className="last md:w-[250px] md:h-[250px] top-0 w-[150px] h-[150px] absolute  p-3 md:relative z-10 bg-opacity-15 bg-white rounded-md">
        <img src={alien3} className="  object-cover w-full h-full" alt="" />
      </div>
    </div>
  );
}
