import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import Cookies from "universal-cookie";
import axios from "axios";

const Header = () => {

  const cookie = new Cookies();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if (cookie)
      setIsLogin(true);
  }, [])

  useEffect(() => {
    if (isLogin) {
      console.log(isLogin); // true
      axios.get("http://localhost:8000/user/current", {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`
        }
      })
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data);
          }
        }).catch((error) => {
          console.log(error.response.data.message);
        })
    }
  }, [isLogin])

  const userHandler = () => {
    if (user) {
      return <p className="inline">{user.username}</p>
    }
    return <a href="/login">Log In</a>
  }

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
          <a href="/about-us">About Us</a>
        </section>

        <section className="flex justify-center gap-x-5 items-center">
          <span>
            <CiUser className="inline me-2" />
            {userHandler()}
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
