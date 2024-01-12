import React from "react";

const clietnsData = [
  { id: 1, imgSrc: "images/client/1.png" },
  { id: 2, imgSrc: "images/client/2.png" },
  { id: 3, imgSrc: "images/client/3.png" },
  { id: 4, imgSrc: "images/client/4.png" },
  { id: 5, imgSrc: "images/client/5.png" },
  { id: 6, imgSrc: "images/client/6.png" },
  { id: 7, imgSrc: "images/client/7.png" },
  { id: 8, imgSrc: "images/client/8.png" },
  { id: 9, imgSrc: "images/client/9.png" },
  { id: 10, imgSrc: "images/client/10.png" },
  { id: 11, imgSrc: "images/client/11.png" },
  { id: 12, imgSrc: "images/client/12.png" },
];

const Client = () => {
  return (
    <div className="flex justify-center items-center flex-col my-5 gap-y-5">
      <h1 className="font-extrabold tracking-widest">OUR CLIENTS</h1>
      <div className="container">
        <div className="flex justify-center items-center gap-x-10 flex-wrap">
          {clietnsData.map((item, index) => {
            return <img key={index} src={item.imgSrc} alt="client" width={125} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
