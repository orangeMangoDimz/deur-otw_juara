import React from "react";

const RoomModel = ({ imgSrc, title }) => {
  console.log(`./images/room/${imgSrc}`);
  return (
    <>
      <section className="relative flex justify-center items-center">
        <img src={`./images/room/${imgSrc}`} alt="room" />
        <div
          className="absolute p-5 rounded-xl"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", width: "200px" }}
        ></div>
        <p className="absolute z-10 text-white tracking-widest font-semibold">{title}</p>
      </section>
    </>
  );
};

export default RoomModel;
