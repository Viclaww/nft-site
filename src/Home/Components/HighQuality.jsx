import alien1 from "../../assets/h1.png";
import alien2 from "../../assets/h2.png";
import alien3 from "../../assets/h3.png";

import Card from "../../Components/Card";

const HighQuality = () => {
  return (
    <div className="text-white w-full font-poppins px-8 justify-center mx-auto flex">
      <div className="flex w-3/5 md:w-[700px] card-container relative">
        <div className="relative me translate-x-9 -translate-y-7 left-[10%] scale-75 top-0 ">
          <Card img={alien1} classNames={"card1"} />
        </div>
        <div className="relative  me  -left-[5%] z-20  scale-[0.65] top-10">
          <Card img={alien2} classNames={"card1"} />
        </div>
        <div className="relative   -left-[30%] -translate-x-24 -translate-y-12 scale-[0.80] top-0 ">
          <Card img={alien3} classNames={"card2"} />
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
