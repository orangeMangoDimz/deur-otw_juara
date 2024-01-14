import React from "react";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import DashboardImageCover from "../../../component/DashboardImageCover";
import { useParams } from "react-router-dom";
import Dropdown from "../../../component/Dropdown";
import ItemList from "../../../component/ItemList";

const data = [
    { id: 1, imgSrc: "bed.png", title: "Bed" },
    { id: 2, imgSrc: "chair.jpg", title: "Chair" },
    { id: 3, imgSrc: "doll.png", title: "Doll" },
    { id: 4, imgSrc: "lamp.jpg", title: "Lamp" },
    // { id: 5, imgSrc: "mirror.jpg", title: "Mirror" },
    // { id: 6, imgSrc: "sofa.png", title: "Sofa" },
    // { id: 7, imgSrc: "table.png", title: "Table" },
    // { id: 8, imgSrc: "wardrobe.png", title: "Werdrobe" },
  ];

const RoomStyleDashboard = () => {
  const { roomStyle } = useParams();
  console.log(roomStyle);
  return (
    <>
      <Header />
      <DashboardImageCover imgSrc="/images/cover/cover.png" />
      <h1 className="font-medium text-3xl text-center my-10">
        <span className="font-extrabold text-3xl">MODERN</span> STYLES
      </h1>
      <div className="flex justify-evenly items-center gap-x-10 my-10">
        <div>
            <Dropdown />
        </div>
        {/* <div>
            <Dropdown />
        </div>
        <div>
            <Dropdown />
        </div> */}
      </div>
      <div className="flex justify-center items-center gap-x-8">
              {data.map((item, index) => {
                return (
                  <ItemList
                    key={index}
                    id={item.id}
                    imgSrc={item.imgSrc}
                    title={item.title}
                  />
                );
              })}
            </div>
      <Footer />
    </>
  );
};

export default RoomStyleDashboard;
