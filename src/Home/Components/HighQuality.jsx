import alien1 from "../../assets/61184628-cd63-4a4f-a1f3-d0da2680b3d3 1.png";
import alien2 from "../../assets/5dd98d15-b620-483d-a205-2bae6561a9ea 1.png";
import alien3 from "../../assets/019845e5-ff15-4417-99e7-a2beaf54265e 1.png";
import Card from "../../Components/Card";
import { useGSAP } from "@gsap/react";
const HighQuality = () => {
  useGSAP(() => {
    gsap.to("", { sk });
  });
  return (
    <div className="text-white w-full px-8 justify-around flex">
      <div className="flex relative">
        <div className="absolute scale-90 top-20  skew-x-6">
          <Card img={alien1} alt="" />
        </div>
        <div className="absolute scale-90 top-20">
          <Card img={alien2} alt="" />
        </div>
        <div className="absolute scale-90 top-0 right-0 -skew-x-6">
          <Card img={alien3} alt="" />
        </div>
      </div>
      <div className="flex w-1/3 flex-col">
        <h3 className="text-2xl my-3 font-medium">
          High Quality NFT Collection
        </h3>
        <div className="text-justify flex flex-col gap-4">
          <p>
            Welcome to our High-Quality NFT Collection, where every pixel tells
            a story of creativity and innovation. Dive into a world of
            meticulously crafted digital art, where each piece is a masterpiece
            waiting to be discovered.
          </p>
          <p>
            Our collection showcases the finest works from talented artists
            around the globe, offering a diverse range of styles and themes to
            captivate every imagination. With unparalleled attention to detail
            and uncompromising quality, our NFTs redefine the boundaries of
            digital artistry. Explore, collect, and own a piece of the future
            today.
          </p>
          <button className="py-3 rounded-md bg-purple-primary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighQuality;
