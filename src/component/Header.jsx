import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-[#567582] flex justify-center items-center text-white p-5 shadow-lg sticky top-0 z-50">
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
            <a href="/login">Loog In</a>
          </span>
          <span onClick={() => {
            window.location.href = '/search'
          }}><CiSearch /></span>
          <span onClick={() => {
            window.location.href = '/cart'
          }}><MdOutlineShoppingCart /></span>
        </section>
      </div>
    </header>
  );
};

export default Header;
