import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css';

const Register = () => {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [status, setStatus] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/user/register', {
      username: username,
      email: email,
      password: password
    })
      .then(() => {
        setStatus(true);
      })
      .catch(error => {
        setErrorMsg(error.response.data.message);
      })
  }

  useEffect(() => {
    if (status) {
      window.location.href = "/login";
    }
  }, [status])

  useEffect(() => {
    if (errorMsg != null) {
      Swal.fire({
        title: "Woops!",
        text: errorMsg,
        icon: "error"
      })
        .then(() => {
          window.location.href = "/register";
        });
    }
  }, [errorMsg])

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
            SIGN UP
          </h1>
        </div>
        <div className="w-1/2 my-10 me-10">
          <div className="flex justify-center items-center flex-col h-full">
            <h1 className="text-3xl text-center"><span className="text-3xl font-bold">Hello</span> There!</h1>
            <form onSubmit={submitHandler} className="w-full">
              <input
                className="p-3 block rounded-lg my-5 focus:outline-none bg-[#F2F3F7] w-full"
                type="text"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <div className="flex justify-start items-center gap-x-3">
                <input id="privacy" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="privacy" className="text-[#567582] font-medium">I have read the <span className="font-bold">Privacy and Policy</span></label>
              </div>
              <button
                type="submit"
                className="rounded-lg bg-[#567582] text-white w-full p-3 my-5"
              >
                SIGN UP
              </button>
            </form>
            <p className="font-bold text-[#A1A4B2] text-center">
              ALREADY HAVE AN ACCOUNT?{" "}
              <a href="/login" className="font-extrabold text-[#567582]">
                SIGN IN
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
