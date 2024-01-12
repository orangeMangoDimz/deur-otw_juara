import React from "react";
import RoomModel from "./RoomModel";

const data = [
  { id: 1, imgSrc: "living_room.png", title: "LIVING ROOM" },
  { id: 2, imgSrc: "bed_room.png", title: "BED ROOM" },
  { id: 3, imgSrc: "bath_room.png", title: "BATHROOM" },
  { id: 4, imgSrc: "kitchen_room.png", title: "KITCHEN" },
];

const RoomInspiration = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-y-5 my-5">
        <h1 className="tracking-widest">
          <span className="font-extrabold">EXPLORE</span> INSPIRATION
        </h1>
        <section className="container flex justify-between items-center gap-x-5 p-5 w-full h-full">
          {data.map((item) => {
            // return <p>test</p>
            return (
              <RoomModel
                key={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default RoomInspiration;
