import Hero from "./Components/Hero";
import HighQuality from "./Components/HighQuality";
import Stats from "./Components/Stats";

function Home() {
  return (
    <>
      <div className="grad-circle -z-40 top-[75vh] -left-[10%]"></div>
      <div className="grad-circle -z-40 top-[30vh] -right-[15%]"></div>
      <Hero />
      <Stats />
      <HighQuality />
    </>
  );
}

export default Home;
