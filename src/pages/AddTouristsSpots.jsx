import { useState } from "react";

const AddTouristsSpots = () => {
  const [visitors, setVisitors] = useState("1000 visitors");
  const [travelTime, setTravelTime] = useState("30 days");

  const handleAddTourSpot = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const countryName = e.target.countryName.value;
    const averageCost = e.target.averageCost.value;
    const userEmail = e.target.userEmail.value;
    const spotName = e.target.spotName.value;
    const location = e.target.location.value;
    const seasonality = e.target.seasonality.value;
    const userName = e.target.userName.value;
    const shortDescription = e.target.shortDescription.value;
    const newTourSpot = {
      image,
      spotName,
      countryName,
      location,
      averageCost,
      seasonality,
      userEmail,
      userName,
      travelTime,
      visitors,
      shortDescription,
    };
    console.log(newTourSpot);

    // send data to server
    fetch("http://localhost:5000/tourSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTourSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("data DB a send hoise");
        }
      });
  };

  return (
    <div className="max-w-[1240px] h-scree mx-auto max-lg:px-5 py-6 md:py-12 lg:py-24">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-4xl text-center font-semibold ">
            Add Your TourSpot_
          </h3>
        </div>
        {/* form */}
        <form onSubmit={handleAddTourSpot}>
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 ">
            {/* left side */}
            <div className="flex-1">
              <label className="block mb-2 font-medium" htmlFor="image">
                Image
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Use image URL"
                id="image"
                name="image"
              />
              <label
                className="block mt-4 mb-2 font-medium"
                htmlFor="countryName"
              >
                Country Name
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Enter Country Name"
                id="countryName"
                name="countryName"
              />
              <label
                className="block mt-4 mb-2 font-medium"
                htmlFor="averageCost"
              >
                Average Cost
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Enter  Average Cost"
                id="averageCost"
                name="averageCost"
              />
              <label className="block mb-2 mt-4 font-medium" htmlFor="spotName">
                Tourists spot name
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Enter Spot name"
                id="spotName"
                name="spotName"
              />
              <label
                className="block mb-2 mt-4  font-medium"
                htmlFor="location"
              >
                Location
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Enter country location"
                id="location"
                name="location"
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2  font-medium" htmlFor="seasonality">
                Seasonality
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Summer or Winter"
                id="seasonality"
                name="seasonality"
              />
              <label className="block mt-4 mb-2 font-medium" htmlFor="userName">
                User Name
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Enter Your Name"
                id="userName"
                name="userName"
              />
              <label
                className="block mt-4 mb-2 font-medium"
                htmlFor="userEmail"
              >
                User Email
              </label>
              <input
                required
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Enter Your Email"
                id="userEmail"
                name="userEmail"
              />
              <label
                className="block mt-4 mb-2 font-medium"
                htmlFor="travelTime"
              >
                Tota Visitors Per Year
              </label>
              <select
                onChange={(e) => setVisitors(e.target.value)}
                name="travelTime"
                id="travelTime"
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Select totalVisitorsPerYear"
              >
                <option value="200 Visitors" selected>
                  200 Visitors
                </option>
                <option value="400 Visitors" selected>
                  400 Visitors
                </option>
                <option value="600 Visitors" selected>
                  600 Visitors
                </option>
                <option value="800 Visitors" selected>
                  800 Visitors
                </option>
                <option value="1000 Visitors" selected>
                  1000 Visitors
                </option>
              </select>
              <label
                className="block mt-4 mb-2 font-medium"
                htmlFor="travelTime"
              >
                Travel time
              </label>
              <select
                onChange={(e) => setTravelTime(e.target.value)}
                name="travelTime"
                id="travelTime"
                className="w-full p-2 md:p-3 lg:p-4 border rounded-md focus:outline-emerald-100"
                type="text"
                placeholder="Select Travel time"
              >
                <option value="7 days" selected>
                  7 days
                </option>
                <option value="15 days" selected>
                  15 days
                </option>
                <option value="20 days" selected>
                  20 days
                </option>
                <option value="30 days" selected>
                  30 days
                </option>
              </select>
              <label
                className="block mb-2 mt-4 font-medium"
                htmlFor="shortDescription"
              >
                Short description
              </label>
              <textarea
                required
                type="text"
                name="shortDescription"
                placeholder="short description"
                className="textarea w-full  textarea-bordered textarea-md "
              ></textarea>
              <input
                required
                className="w-full md:text-lg py-4 mt-5 rounded hover:bg-emerald-300  bg-emerald-400 duration-200 text-white cursor-pointer font-medium"
                type="submit"
                value="Add TourSpot"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpots;
