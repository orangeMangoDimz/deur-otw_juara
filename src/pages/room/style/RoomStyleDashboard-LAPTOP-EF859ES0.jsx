import React, { useEffect, useState } from "react";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import DashboardImageCover from "../../../component/DashboardImageCover";
import { useParams } from "react-router-dom";
import Dropdown from "../../../component/Dropdown";
import ItemList from "../../../component/ItemList";
import axios from "axios";
import Cookies from "universal-cookie";

const RoomStyleDashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const cookie = new Cookies();

  useEffect(() => {
    axios.get(`http://localhost:8000/product/room-inspiration/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      }
    }).then(response => {
      setData(response.data.message);
    }).catch(error => {
      console.log(error.response.data.message);
    })
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <>
      <Header />
      <DashboardImageCover imgSrc="/images/cover/cover.png" />
      <div className="flex justify-center item-center mb-10 flex-col">
        <h1 className="font-medium text-3xl text-center mt-10">
          <span className="font-extrabold text-3xl">MODERN</span> STYLES
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
        <div className="flex justify-center items-center gap-x-8 my-10">
          {data?.map((item, index) => {
            return (
              <ItemList
                key={index}
                id={item._id}
                imgSrc={item.image}
                title={item.name}
              />
            );
          })}
        </div>

      </div>
      <Footer />
    </>
  );
};

export default RoomStyleDashboard;
