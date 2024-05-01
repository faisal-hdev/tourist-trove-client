/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import MyListCard from "../components/MyListCard";

const MyList = () => {
  const { user } = UseAuth() || {};
  const [myListItems, setMyListItems] = useState([]);
  console.log(myListItems);

  useEffect(() => {
    fetch(`http://localhost:5000/tourSpot/${user.email}`).then((res) =>
      res.json().then((data) => {
        setMyListItems(data);
      })
    );
  }, [user]);

  return (
    <div className="max-w-[1240px] mx-auto max-lg:px-5 py-6 md:py-12 lg:py-24">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-4xl text-center font-semibold ">
          Your TourSpot lists_
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {myListItems.map((listItem) => (
          <MyListCard key={listItem._id} listItem={listItem} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
