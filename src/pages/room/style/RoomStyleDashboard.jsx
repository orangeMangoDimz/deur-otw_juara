import React, { useEffect, useState } from "react";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import DashboardImageCover from "../../../component/DashboardImageCover";
import { useParams } from "react-router-dom";
import Dropdown from "../../../component/Dropdown";
import ItemList from "../../../component/ItemList";
import Cookies from "universal-cookie";
import axios from "axios";

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
  const [data, setData] = useState();
  const cookie = new Cookies();
  const { id, name } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/product/room-inspiration/${id}`, {
      "Authentication": "Bearer " + cookie.get("token")
    }).then((response) => {
      setData(response.data.message)
    }).catch((err) => {
      console.log(err.response.data.message);
    })
  }, [])

  return (
    <>
      <Header />
      <DashboardImageCover imgSrc="/images/cover/cover.png" />
      <div className="flex justify-center items-center flex-col gap-y-10 my-10">
        <h1 className="font-medium text-3xl text-center">
          <span className="font-extrabold text-3xl">{name}</span> INSPIRATION
        </h1>
        {/* <div className="flex justify-evenly items-center gap-x-10 my-10">
        <div>
            <Dropdown />
        </div>
        <div>
            <Dropdown />
        </div>
        <div>
            <Dropdown />
        </div>
      </div> */}
        <div className="flex justify-center items-center gap-x-8 mb-10">
          {
            data?.length > 0 ? 
            data.map((item, index) => {
              return (
                <ItemList
                  key={index}
                  id={item._id}
                  imgSrc={item.image}
                  title={item.name}
                />
              );
            })
            : <p className="text-[#567582] font-semibold">Woops, Product is not available yet</p>
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomStyleDashboard;
