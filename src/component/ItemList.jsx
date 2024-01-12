import React from "react";

const ItemList = ({ imgSrc, id, title }) => {
  return (
    <>
      <section className="relative" style={{ width: "150px", height: "200px" }}>
        <div className="block">
          <img
            src={`./images/product/${imgSrc}`}
            alt="product"
            className="h-full w-full object-cover"
            style={{ height: "200px" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white h-10"></div>
        <a href={`product/${id}`} className="ar-object absolute text-center w-full bottom-0 p-3 font-bold" id={id}>
          {title}
        </a>
      </section>
    </>
  );
};

export default ItemList;
