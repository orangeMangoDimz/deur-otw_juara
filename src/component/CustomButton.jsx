import React from "react";

const CustomButton = ({ icon, content }) => {
  return (
    <button
      type="submit"
      className="rounded-lg bg-[#567582] text-white w-full p-3 my-5"
    >
      <div className="flex justify-center items-center gap-x-5">
        <span>{icon}</span>
        {content}
      </div>
    </button>
  );
};

export default CustomButton;
