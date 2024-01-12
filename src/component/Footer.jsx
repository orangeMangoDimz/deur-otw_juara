import React from "react";

const socialMediaData = [
  { id: 1, imgSrc: "./images/social_media/1.png" },
  { id: 2, imgSrc: "./images/social_media/2.png" },
  { id: 3, imgSrc: "./images/social_media/3.png" },
  { id: 4, imgSrc: "./images/social_media/4.png" },
  { id: 5, imgSrc: "./images/social_media/5.png" },
  { id: 6, imgSrc: "./images/social_media/6.png" },
];

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-y-10 bg-[#464D5C] text-white">
      <div className="container flex justify-between items-center gap-x-10 my-10">
        <div className="flex justify-center items-start flex-col gap-y-5 w-1/2">
          <h1 className="font-extrabold text-lg">DEUR</h1>
          <p>
            Discover the epitome of refined living with dEUR, your premier
            destination for exquisite furniture. Elevate your home's aesthetic
            with our curated selection of timeless pieces that blend
            contemporary design and enduring craftsmanship.
          </p>
          <div className="flex justify-center items-center gap-x-5">
            {socialMediaData.map((item, index) => {
              return <img key={index} src={item.imgSrc} alt="social_media" width={25} />;
            })}
          </div>
        </div>
        <div className="flex justify-center items-start flex-col gap-y-5">
          <h1 className="font-bold">CUSTOMER SERVICE</h1>
          <ul>
            <li>Shop</li>
            <li>Online Catalog</li>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex justify-center items-start flex-col gap-y-5">
          <h1 className="font-bold">COLLECTIONS</h1>
          <ul>
            <li>Modern</li>
            <li>Maximalist</li>
            <li>Minimalist</li>
            <li>Art Deco</li>
            <li>All Collections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
