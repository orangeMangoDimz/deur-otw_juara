import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Login = () => {
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
            <form action="#" className="w-full">
              <input
                className="p-3 block rounded-lg my-5 focus:outline-none bg-[#F2F3F7] w-full"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="p-3 block rounded-lg my-5 focus:outline-none bg-[#F2F3F7] w-full"
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#567582] text-white w-full p-3 my-5"
              >
                Login In
              </button>
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
