import img4 from "../assets/tSpot-imgs/2.jpg";

const Countries = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mt-5 md:mt-14 mb-2 md:mb-4 ">
        Explore our Tourist Spots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-red-500">
          <img src={img4} className="h-[330px] w-full" alt="" />
        </div>
        <div className="bg-red-500">
          <img src={img4} className="h-[330px] w-full" alt="" />
        </div>
        <div className="bg-red-500">
          <img src={img4} className="h-[330px] w-full" alt="" />
        </div>
        <div className="bg-red-500">
          <img src={img4} className="h-[330px] w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Countries;
