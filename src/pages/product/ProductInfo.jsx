import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Breadcrumb from "../../component/BreadCrumb";
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import CustomButton from "../../component/CustomButton";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import HorizontalLine from "../../component/HorizontalLine";

const data = [
  { id: 1, imgSrc: "/images/product_info/1.png" },
  { id: 2, imgSrc: "/images/product_info/2.png" },
  { id: 3, imgSrc: "/images/product_info/3.png" },
  { id: 4, imgSrc: "/images/product_info/4.png" },
  { id: 5, imgSrc: "/images/product_info/5.png" },
]

const ProductInfo = () => {
  const { product } = useParams();

  const [stock, setStock] = useState(1);
  const [currImg, setCurrImg] = useState(0);
  const [currSrc, setCurrSrc] = useState('/images/product_info/1.png');


  useEffect(() => {
    setCurrSrc(`/images/product_info/${currImg}.png`)
  }, [currImg])

  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col gap-y-10">
        <div className="container">
          <Breadcrumb />
          <div className="flex justify-between items-center gap-x-10">
            <div className="w-1/2">
              <img src={currSrc ? '/images/product_info/1.png' : ''} alt="product_cover" className="block w-full h-full object-cover" />
              <div className="flex justify-center items-center gap-x-5">
                {
                  data.map((item) => {
                    return (
                      <div>
                        <img
                          key={item.id}
                          src={item.imgSrc}
                          alt="prodcut_cover"
                          className="block w-full h-full object-cover"
                          onClick={() => setCurrImg(item.id)}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-5xl font-bold my-5">Delina 3 Seater</h1>
              <div className="flex justify-start items-center gap-x-3 my-5">
                <FaStar className="text-[#FBBC05]" />
                <span>4.9</span>
                <span>|</span>
                <span>141 sold</span>
                <span>|</span>
                <span>112 review</span>
              </div>
              <h2 className="text-[#95B64C] text-3xl font-extrabold my-5">
                Rp 15.485.000
              </h2>
              <hr />
              <p>
                Made of polyester fabric, this performance fabric provides an
                exclusive solution for your comfort.
              </p>
              <h1 className="font-bold my-5">SPECIFICATIONS</h1>
              <p>Dimension:</p>
              <p>W-223.5 D-85 H-75 cm / W-88" D-33.5" H-29.5"</p>
              <div className="flex justify-start items-start flex-col gap-y-5 my-5">
                <div className="flex justidy-start items-center gap-x-5">
                  <p className="font-bold" style={{ width: "150px" }}>
                    Arm Height
                  </p>
                  <p>: 70cm / 27.5”</p>
                </div>
                <div className="flex justidy-start items-center gap-x-5">
                  <p className="font-bold" style={{ width: "150px" }}>
                    Seat Height
                  </p>
                  <p>: 40cm / 15.75”</p>
                </div>
                <div className="flex justidy-start items-center gap-x-5">
                  <p className="font-bold" style={{ width: "150px" }}>
                    Seat Depth
                  </p>
                  <p>: 60 cm / 23.75"”</p>
                </div>
                <div className="flex justidy-start items-center gap-x-5">
                  <p className="font-bold" style={{ width: "150px" }}>
                    Product Type
                  </p>
                  <p>: Fully Assembled</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-x-10">
                <form className="max-w-xs mx-auto">
                  <div className="relative flex items-center bg-white border border-black outline-black">
                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="rounded-s-lg p-3 h-11" onClick={() => {
                      if (stock > 0) {
                        setStock(stock - 1)
                      }
                    }}>
                      <RiArrowDropLeftLine />
                    </button>
                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className=" h-11 text-center text-black block w-full py-2.5" placeholder="1" required value={stock} />
                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="rounded-s-lg p-3 h-11" onClick={() => setStock(stock + 1)}>
                      <RiArrowDropRightLine />
                    </button>
                  </div>
                </form>
                <CustomButton icon={<CiShoppingCart className="text-white" />} content={<span className="text-white">ADD TO CART</span>} />
              </div>
            </div>
          </div>
          <HorizontalLine />
          <div className="flex justify-center items-center gap-x-10">
            <div className="w-1/2">
              <div className="flex justify-start items-start flex-col gap-y-5">
                <div className="flex justify-start items-center gap-x-10 w-full">
                  <CustomButton content={<span className="text-white">DESCRIPTION</span>} />
                  <button className="border border-[#567582] outline-[#567582] text-[#567582] bg-white p-3 w-full">
                    MATERIAL AND CARE
                  </button>
                </div>
                <p>This modern sofa features a gentle design offering visual appeal in any living area. High backrest and armrest, connected into square-like design. Featuring soft cushions running along the sofa perimeter, all comfy and gentle. Delina’s unique design uplifting your room with comfort & style. Flawless elegance works well for private as well as public interiors, Delina creates an inviting space to unwind</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img src="/images/product_info/size.png" alt="product_size" />
            </div>
          </div>
        </div>
        <hr />
        <HorizontalLine />
        <div className="mb-10">
          <p><span className="font-extrabold tracking-widest">RELATED</span> PRODUCTS</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductInfo;
