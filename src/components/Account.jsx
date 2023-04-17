import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Account = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () =>
      setTimeout(() => {
        setLoading(false);
      }, 5000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col items-center justify-center w-full sm:max-w-[60vw] sm:mx-auto">
      <div className="w-full flex flex-col items-center justify-center">
        <div
          className="flex gap-3 items-center border-b-2 border-gray-300
         w-full h-[120px] justify-center sm:h-[80px]"
        >
          <h1 className="text-[5rem] text-gray-600 font-semibold sm:text-[2rem]">
            Cosmos
          </h1>
          <IoIosArrowDown className="text-[4rem] sm:text-[2rem]" />
        </div>

        {/*  */}

        <div className="flex flex-col items-center justify-center mt-[2rem]">
          <span className="">
            <h1 className="text-[3.5rem] font-bold text-center sm:text-[2rem]">
              My Account
            </h1>
            <p className="text-[2.5rem] text-gray-500 sm:text-[1rem]">
              cosmos17enefe4dd...kcolu
            </p>
          </span>

          <div
            className="border-[2rem] h-[40rem] w-[40rem] border-l-[2rem] border-l-[#5E72E4]
          sm:border-[1rem] sm:h-[18rem] sm:w-[18rem] border-cyan-400   rounded-full mt-[2rem]"
          >
            <div className="p-2 w-full h-full flex flex-col items-center justify-center">
              <p className="text-[#2f344d] text-[3rem] sm:text-[2rem] font-semibold">
                Total Balance
              </p>
              <p className="text-[#2f344d] text-[5rem] sm:text-[2.5rem] font-bold">
                $0
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full mt-[3rem]">
            <div className="flex justify-between items-center w-full">
              <span className="flex gap-4 items-center text-[2.7rem] sm:text-[2rem] font-semibold text-[#5E72E4] ">
                <BsCircleFill />
                <p>Available</p>
              </span>
              <p className="text-[3rem] font-semibold sm:text-[2rem]">
                20 ATOM
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="flex gap-4 items-center text-[2.7rem] sm:text-[2rem] font-semibold text-cyan-500  ">
                <BsCircleFill />
                <p>Staked</p>
              </span>
              <p className="text-[3rem] font-semibold sm:text-[2rem]">
                15 ATOM
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-[2rem]">
            <span
              className="text-[3rem] font-semibold border-4 px-[2rem] sm:text-[2rem] py-3
            text-[#5E72E4] border-[#5E72E4] rounded-md sm:px-[2rem] sm:py-2 sm:mr-5"
            >
              Deposit
            </span>
            <span
              className="text-[3rem] font-semibold border-4 px-[3.5rem] py-3 sm:text-[2rem] sm:px-[2.5rem] sm:py-2
             text-[#5E72E4] border-[#5E72E4] rounded-md"
            >
              Send
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-[2px] mt-[2rem]" />

        <div className="w-full mt-8">
          <div className="flex w-full justify-between items-center px-3">
            <span>
              <p className="text-[3rem] sm:text-[1.2rem] sm:py-2 text-gray-600">
                Pending Staking Reward
              </p>
              <h1 className="text-[5rem] font-bold sm:text-[1.5rem] ">
                0.67 ATOM
              </h1>
            </span>
            <span
              className="bg-[#5E72E4] w-[17rem] h-[6rem] sm:w-[10rem] sm:h-[2.5rem] sm:text-[1.5rem]  text-center justify-center text-white
            text-[3rem] font-semibold"
            >
              Claim
            </span>
          </div>
          <div className="w-full bg-gray-200 h-[2px] mt-8" />
          <div className="flex w-full justify-between items-center px-3 mt-8 mb-[4rem]">
            <span>
              <p className="text-[3rem] text-gray-600 sm:text-[1.5rem]  ">
                Stake
              </p>
              <h1 className="text-[5rem] font-bold sm:text-[1.5rem]  ">
                0.90 ATOM
              </h1>
            </span>
            <span
              className="bg-[#5E72E4] w-[17rem] h-[6rem] text-center justify-center text-white
            text-[3rem] font-semibold sm:text-[1.5rem] sm:h-[2.5rem]  sm:w-[10rem] "
            >
              Claim
            </span>
          </div>

          <Link
            to="/connect-id"
            className="text-[2rem] text-center text-blue-500 font-semibold ml-4 sm:text-[1.5rem]"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
