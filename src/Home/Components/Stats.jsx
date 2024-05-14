const Stats = () => {
  return (
    <div className="flex text-center  bg-white w-3/4 bg-opacity-30 text-white mx-auto my-4 justify-evenly py-3 rounded-md">
      <div className="flex flex-col gap-1">
        <span className="font-stretch-pro  text-3xl md:text-6xl font-medium capitalize">
          55K
        </span>
        <span className="font-stretch-pro text-lg -mt-3 font-medium capitalize">
          ACTIVE USERS
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-stretch-pro  md:text-6xl   text-3xl font-medium capitalize">
          42K
        </span>
        <span className="font-stretch-pro  text-lg -mt-3 font-medium capitalize">
          Products
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-stretch-pro text-3xl md:text-6xl  font-medium capitalize">
          12K
        </span>
        <span className="font-stretch-pro  text-lg -mt-3 font-medium capitalize">
          Authors
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-stretch-pro text-3xl  md:text-6xl  font-medium capitalize">
          70k
        </span>
        <span className="font-stretch-pro text-lg -mt-3 font-medium capitalize">
          Artwork
        </span>
      </div>
    </div>
  );
};

export default Stats;
