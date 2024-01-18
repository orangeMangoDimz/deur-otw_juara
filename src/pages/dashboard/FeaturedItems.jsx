import React, { useEffect, useState } from "react";
import ItemList from "../../component/ItemList";
import axios from "axios";
import Cookies from "universal-cookie";

const FeaturedItems = () => {

  const [data, setData] = useState();
  const cookie = new Cookies();

  useEffect(() => {
    axios.get("http://localhost:8000/product/", {
      headers: {
        "Authorization": "Bearer " + cookie.get("token"),
      },
    })
      .then((response) => {
        setData(response.data.message)
      }).catch((err) => {
        console.log(err.response.data.message);
      })
  }, [])

  return (
    <>
      <div className="relative flex justify-center items-center flex-col gap-y-5">
        <img src="./images/cover/cover2.png" alt="cvoer-2" />
        <div className="absolute left-0 right-0">
          <h1 className="text-white text-center tracking-widest">
            FEATURED <span className="font-extrabold">ITEMS</span>
          </h1>
          <div className="m-5">
            <div className="flex justify-center items-center gap-x-8">
              {data?.slice(0, 5).map((item, index) => {
                return (
                  <ItemList
                    key={index}
                    imgSrc={item.image}
                    title={item.name}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center flex-col pt-5">
            <button className="m-5 px-3 py-2 border-2 border-white text-white rounded-xl">ALL COLLECTIONS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;
