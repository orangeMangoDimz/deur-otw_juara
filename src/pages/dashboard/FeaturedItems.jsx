import React from "react";
import ItemList from "../../component/ItemList";

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

const FeaturedItems = () => {
  return (
    <>
      <div className="relative flex justify-center items-center flex-col gap-y-5">
        <img src="./images/cover/cover2.png" alt="cvoer-2" />
        <div className="absolute left-0 right-0">
          <h1 className="text-white text-center tracking-widest">
            FEATURED <span className="font-extrabold">ITEMS</span>
          </h1>
          <div className="m-5">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;
