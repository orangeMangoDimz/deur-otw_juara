import React from "react";

const DashboardImageCover = () => {
  return (
    <>
      <div
        className="relative flex justify-center items-center"
        style={{ height: "400px" }}
      >
        <div
          className=" absolute top-0 left-0 block w-full h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <img
          src="./images/cover/cover.png"
          alt="cover"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h1
          className="absolute text-white tracking-widest font-bold text-5xl"
          style={{ zIndex: 20 }}
        >
          MODERN
        </h1>
      </div>
    </>
  );
};

export default DashboardImageCover;
