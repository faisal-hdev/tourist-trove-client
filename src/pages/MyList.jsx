import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const MyList = () => {
  const { user } = UseAuth() || {};
  const [listItem, setListItem] = useState([]);
  console.log(listItem);
  // console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/tourSpot/${user.email}`).then((res) =>
      res.json().then((data) => {
        setListItem(data);
      })
    );
  }, [user]);

  return (
    <div className="max-w-[1240px] mx-auto max-lg:px-5">
      <h2>{listItem.length}</h2>
    </div>
  );
};

export default MyList;
