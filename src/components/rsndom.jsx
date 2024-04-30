const rsndom = () => {
    return (
      <div>
        <form onSubmit={handleAddSpot}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Brand Name
              </label>
              <select
                name="brand"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
              >
                <option value="Test" selected>
                  Test
                </option>
                <option value="Test2" selected>
                  Test2
                </option>
                <option value="Test3" selected>
                  Test3
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                Type
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter type"
                id="type"
                name="type"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />
            </div>
          </div>
          <div className="flex justify-center mt-5 md:mt-8">
            <button
              type="submit"
              className="font-medium md:text-lg text-white  p-3 bg-emerald-400 duration-200 hover:bg-emerald-300 rounded-md w-full md:w-[650px]"
            >
              Add TourSpot
            </button>
          </div>

          {/* aselect */}
          {/* <div className="flex flex-col">
            <label className="font-medium">Travel time</label>
            <select
              type="text"
              name="travelTime"
              placeholder="Select Your Travel time"
              className="p-3 border rounded mt-1"
            >
              <option disabled selected>
                Select Your Travel time
              </option>
              <option value="test1">7 Days</option>
              <option value="test2">15 Days</option>
              <option value="test3">20 Days</option>
              <option value="test4">30 Days</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Total Visitors Per Year</label>
            <select
              type="text"
              name="visitors"
              className="p-3 border rounded mt-1"
            >
              <option disabled selected>
                Select Your Visitors
              </option>
              <option value="test-5">200 Visitors</option>
              <option value="test-6">400 Visitors</option>
              <option value="test-7">800 Visitors</option>
              <option value="test-8">1000 Visitors</option>
            </select>
          </div> */}
        </form>
      </div>
    );
};

export default rsndom;
