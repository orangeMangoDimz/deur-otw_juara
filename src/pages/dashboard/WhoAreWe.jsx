import React from "react";

const WhoAreWe = () => {
  return (
    <div className="flex justify-center items-center my-5 gap-y-5 bg-[#464D5C]">
      <div className="container flex justify-center items-center gap-x-10 text-white">
        <div className="w-1/4">
          <img
            src="./images/who_are_we/1.png"
            alt="who_are_we-cover"
            className="block"
          />
        </div>

        <div className="w-3/4 pe-10">
          <h1 className="tracking-widest font-medium text-2xl">
            <span className="font-extrabold text-2xl">WHO</span> ARE WE ?
          </h1>
          <p className="mt-5 font-light">
            <span className="font-extrabold">DEUR</span> sets itself apart with its unparalleled commitment to providing
            a seamless and personalized shopping experience for customers
            seeking premium home furnishings. Boasting a diverse range of
            meticulously crafted pieces, dEUR stands at the forefront of
            contemporary design and timeless elegance. Navigating through the
            website reveals an intuitive interface, ensuring effortless
            exploration of an extensive collection that caters to diverse tastes
            and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
