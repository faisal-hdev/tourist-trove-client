/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import TourSpotCard from "../components/TourSpotCard";

const AllTouristsSpots = () => {
  const tourSpots = useLoaderData();
  return (
    <div className="max-w-[1240px] mx-auto max-lg:px-5">
      <div>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-center font-semibold mt-6 md:mt-12 lg:mt-24">
            All Tourist Spots_ {tourSpots.length}
          </h2>
          <div className="flex justify-center">
            <p className="py-2 md:py-4 w-full md:w-[760px] md:text-lg">
              Discover the world's hottest destinations, from bustling
              cityscapes to serene natural wonders, beckoning travelers with
              their irresistible charm and allure.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {tourSpots.map((tourSpot) => (
            <TourSpotCard key={tourSpot._id} tourSpot={tourSpot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristsSpots;
