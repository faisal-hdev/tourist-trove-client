import BannerSlider from "../components/BannerSlider";
import TouristSpots from "../components/TouristSpots";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="max-w-[1240px] mx-auto max-lg:px-5">
        <TouristSpots />
      </div>
    </div>
  );
};

export default Home;
