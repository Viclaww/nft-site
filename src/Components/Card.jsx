import { FaEthereum } from "react-icons/fa6";

const Card = ({ img }) => {
  return (
    <div className="card bg-gradient-to-t p-4  from-[#2E2F4D] to-[#2E2F4D] w-[300px] gap-4 rounded-lg flex flex-col h-[430px] ">
      <div className="w-full bg-white h-[65%] overflow-hidden">
        <img src={img} className="object-cover " alt={"Star Warrior"} />
      </div>
      <div className="flex text-white w-full gap-3 flex-col">
        <h4 className="text-xl font-semibold">Star Warrior 3353</h4>
        <span className="text-lg flex justify-between">
          <span>Price</span>
          <span className="flex items-center gap-1">
            4.3 <FaEthereum />
          </span>
        </span>
        <span className="text-lg flex justify-between">
          <span>4 days ago</span>
          <span>103k</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
