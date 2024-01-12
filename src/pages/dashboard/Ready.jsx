import React from "react";

const Ready = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5 my-10" style={{ height: "250px" }}>
      <p className="text-[#464D5C] ">ARE YOU <span className="font-semibold">READY</span> TO TRY THE FUTURE?</p>
      <button className="rounded-full border-2 border-[#464D5C] py-2 px-10">Click Here</button>
    </div>
  );
};

export default Ready;