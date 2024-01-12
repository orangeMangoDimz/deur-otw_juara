import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-[#567582] flex justify-center items-center text-white p-5 shadow-lg">
      <div className="container flex justify-between items-center">
        <section>
          <a href="/">DEUR</a>
        </section>

        <section className="flex justify-center gap-x-5">
          <a href="">Products</a>
          <a href="">New Arrival</a>
          <a href="">Best Seller</a>
          <a href="">About Us</a>
        </section>

        <section className="flex justify-center gap-x-5 items-center">
          <span>
            <CiUser className="inline me-2" />
            <a href="">Loog In</a>
          </span>
          <CiSearch />
          <MdOutlineShoppingCart />
        </section>
      </div>
    </header>
  );
};

export default Header;
