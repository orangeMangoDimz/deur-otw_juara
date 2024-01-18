import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../App.css"
import DashboardImageCover from "../../component/DashboardImageCover";
import RoomInspiration from "../../component/RoomInspiration";
import FeaturedItems from "./FeaturedItems";
import Client from "./Clienct";
import WhoAreWe from "./WhoAreWe";
import Ready from "./Ready";
import DashboardImageCover2 from "../../component/DashboardImageCover2";
import DashboardImageCover3 from "../../component/DashboardImageCover3";
import axios from "axios";
import Cookies from "universal-cookie";

const Home = () => {

  const [data, setData] = useState();
  const cookie = new Cookies();

  useEffect(() => {
    axios.get("http://localhost:8000/room_inspiration/", {
      headers: {
        "Authorization" : "Bearer " + cookie.get("token")
      },
    })
      .then((response) => {
        setData(response.data.message)
      }).catch((err) => {
        console.log(err.response.data.message);
      })
  }, []);

  return (
    <>
      <Header />
      <DashboardImageCover imgSrc="./images/cover/cover.png" />
      <DashboardImageCover2 />
      <DashboardImageCover3 />
      <RoomInspiration data={data} />
      <FeaturedItems />
      <Client />
      <WhoAreWe />
      <Ready />
      <Footer />
    </>
  );
};

export default Home;
