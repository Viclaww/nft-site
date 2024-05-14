import Carousel from "../../Components/Carousel/Carousel";
import profiles from "../../assets/Profiles.png";
const Hero = () => {
  return (
    <>
      <div className="w-full flex h-[70vh] md:h-[90vh] md:flex-row flex-col justify-center  md:justify-between px-5 md:px-14 items-center">
        <div className="flex-col w-full md:ml-5 text-white flex gap-1">
          <h5 className="md:text-6xl text-4xl bg-gradient-to-b bg-clip-text text-transparent from-[#3B0456] to-[#00FFD1] font-[800]">
            Discover
          </h5>
          <h2 className="md:text-7xl text-5xl font-[800] font-poppins">
            Rare Digital
          </h2>
          <h4 className="font-stretch-pro text-6xl">Collectibles</h4>
          <p className="font-poppins text-lg font-[300]  my-3 ">
            Unlock unique assets, trade tokens, and embrace digital ownership
            revolution.
          </p>
          <div className="flex items-center text-2xl font-stretch-pro gap-5">
            <img className="w-2/5" src={profiles} alt="" />
            <span className="">+ 55k users</span>
          </div>
        </div>

        <Carousel />
      </div>
    </>
  );
};

export default Hero;
