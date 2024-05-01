/* eslint-disable react/prop-types */
const TourSpotCard = ({ tourSpot }) => {
  const {
    image,
    spotName,
    location,
    // seasonality,
    // countryName,
    // averageCost,
    // userEmail,
    // userName,
    // travelTime,
    // visitors,
    // shortDescription,
  } = tourSpot;
  console.log(tourSpot);
  return (
    <div className="duration-200 p-1 md:p-3 rounded-md hover:shadow-sm  text-gray-700">
      <img
        alt=""
        src={image}
        className="object-cover object-center w-full rounded-md h-60"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase text-emerald-500">
          {location}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{spotName}</h2>
      </div>
      <button className="group relative inline-flex items-center overflow-hidden rounded border border-current px-5 py-2 text-emerald-600 active:text-emerald-500">
        <span className="absolute -start-full transition-all group-hover:start-4">
          <svg
            className="size-4 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
        <span className="text-sm font-medium transition-all group-hover:ms-4">
          View Details
        </span>
      </button>
    </div>
  );
};

export default TourSpotCard;
