const Header = () => {
  const nav = ["Home", "NFT Market", "About", "Patners"];
  return (
    <div className="text-white flex w-full justify-between md:px-10 py-4 text-lg items-center">
      <div className="text-4xl">Aliens</div>
      <div className="flex gap-12 font-poppins">
        {nav.map((name, index) => (
          <span className="cursor-pointer" key={index}>
            {name}
          </span>
        ))}
      </div>
      <button className="bg-purple-primary px-2 py-1 rounded-sm">
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
