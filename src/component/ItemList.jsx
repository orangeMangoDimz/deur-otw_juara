import React from "react";

const ItemList = ({ imgSrc, id, title }) => {

  return (
    <>
      <section className="relative" style={{ width: "150px", height: "200px" }}>
        <div className="absolute block w-full">
          <img
            src={`/images/product/${imgSrc}`}
            alt="product"
            className="h-full w-full object-fill"
            style={{ height: "200px" }}
          />
          <div className="h-full w-full bg-[#567582] text-center p-1 text-white">
            {/* <a href={`/product/${title}`} className="ar-object  text-center w-full bottom-0 p-3 font-bold" id={id}>
              {title}
            </a> */}
            <a href={`/product-info/product`} className="ar-object  text-center w-full bottom-0 p-3 font-bold" id={id}>
              {title}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemList;
