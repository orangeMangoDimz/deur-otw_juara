import React from "react";
import RoomModel from "./RoomModel";

const RoomInspiration = ({ data }) => {

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-y-5 my-5">
        <h1 className="tracking-widest">
          <span className="font-extrabold">EXPLORE</span> INSPIRATION
        </h1>
        <section className="container flex justify-between items-center gap-x-5 p-5 w-full h-full">
          {data?.map((item, index) => {
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
