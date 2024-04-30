import BannerSlider from "../components/BannerSlider";
import Community from "../components/Community";
import PlanPerfectTour from "../components/PlanPerfectTour";
import TouristSpots from "../components/TouristSpots";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="max-w-[1240px] mx-auto max-lg:px-5">
        <TouristSpots />
        <PlanPerfectTour />
        <Community />
      </div>
    </div>
  );
};

export default Home;
