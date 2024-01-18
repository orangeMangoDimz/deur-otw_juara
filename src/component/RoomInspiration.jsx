import React, { useEffect, useState } from "react";
import RoomModel from "./RoomModel";
import axios from "axios";
import Cookies from "universal-cookie";

// const data = [
//   { id: 1, imgSrc: "living_room.png", title: "LIVING ROOM" },
//   { id: 2, imgSrc: "bed_room.png", title: "BED ROOM" },
//   { id: 3, imgSrc: "bath_room.png", title: "BATHROOM" },
//   { id: 4, imgSrc: "kitchen_room.png", title: "KITCHEN" },
// ];

const RoomInspiration = () => {

  const [data, setData] = useState();
  const cookie = new Cookies();

  useEffect(() => {
    axios.get("http://localhost:8000/room_inspiration/", {
      "Authentication": "Bearer " + cookie.get("token")
    }).then((response) => {
      setData(response.data.message)
    }).catch((err) => {
      console.log(err.response.data.message);
    })
  }, [])

useEffect(() => {
  console.log(data);
}, [data])
  
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-y-5 my-5">
        <h1 className="tracking-widest">
          <span className="font-extrabold">EXPLORE</span> INSPIRATION
        </h1>
        <section className="container flex justify-between items-center gap-x-5 p-5 w-full h-full">
          {data?.map((item, index) => {
            // return <p>test</p>
            return (
              <RoomModel
                key={index}
                id={item._id}
                imgSrc={item.image}
                title={item.name}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default RoomInspiration;
