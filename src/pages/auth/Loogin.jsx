import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import CustomButton from "../../component/CustomButton";
import axios from "axios";
import Cookies from "universal-cookie";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState(false);
  const cookie = new Cookies();


  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/user/login`, {
      email: email,
      password: password
    })
      .then((response) => {
        if (response.status === 200) {
          setStatus(true);
          cookie.set("token", response.data.accessToken);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    if (status) {
      window.location.href = "/";
    }
  }, [status])

  return (
    <>
      <Header />
      <div
        className="flex justify-between  gap-x-10"
        style={{ minHeight: "575px" }}
      >
        <div className="w-1/2 relative flex justify-center items-center">
          <img
            src="./images/auth/login_cover.png"
            alt="login_cover"
            className="absolute block w-full h-full"
          />
          <h1 className="absolute text-white font-bold text-5xl tracking-widest">
            LOG IN
          </h1>
        </div>
        <div className="w-1/2 my-10 me-10">
          <div className="flex justify-center items-center flex-col h-full">
            <h1 className="text-3xl font-bold text-center">Welcome!</h1>
            <form onSubmit={submitHandler} className="w-full">
              <input
                className="p-3 block rounded-lg my-5 focus:outline-none bg-[#F2F3F7] w-full"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 block rounded-lg my-5 focus:outline-none bg-[#F2F3F7] w-full"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <CustomButton content={"SIGN IN"} />
            </form>
            <a
              className="text-[#3F414E] font-bold text-center block my-3"
              href="#"
            >
              Forgot Password?
            </a>
            <p className="font-bold text-[#A1A4B2] text-center">
              DONT HAVE AN ACCOUNT?{" "}
              <a href="/register" className="font-extrabold text-[#567582]">
                SIGN UP
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
