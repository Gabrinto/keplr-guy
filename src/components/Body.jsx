import React from "react";
import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineRight,
} from "react-icons/ai";
import {
  MdVerified,
  MdOutlineStarPurple500,
  MdLaptopMac,
} from "react-icons/md";
import { GiPlainCircle } from "react-icons/gi";
import { BiCircle } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdStarHalf,
} from "react-icons/io";

import argentx from '../assets/argentx.jpg'
import forbole1 from '../assets/forbole1.jpg'
import sender1 from '../assets/sender1.jpg'
import subwallet1 from '../assets/subwallet1.jpg'
import terra from '../assets/terra.jpg'

import KeplrBanner from '../assets/Keplr-banner.jpg'


import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-white mt-[6rem] min-w-screen overflow-x-scroll">
      <div className="lg:max-w-[65vw] mx-auto">
        <div className="flex gap-3">
          <span
            className="text-blue-600 font-semibold flex 
          gap-3 items-center justify-center"
          >
            <span>Home </span>
            <span className="text-gray-600 text-sm font-semibold">
              <AiOutlineRight className="text-xs font-bold" />
            </span>{" "}
          </span>
          <span
            className="text-blue-600 font-semibold flex 
          gap-3 items-center justify-center"
          >
            <span>Extensions </span>
            <span className="text-gray-600 text-sm font-semibold">
              <AiOutlineRight className="text-xs font-bold" />
            </span>
          </span>
          <span
            className="font-semibold flex text-gray-600
          gap-3 items-center justify-center text-sm"
          >
            Keplr
          </span>
        </div>

        <div className=" flex justify-between items-center px-2 mt-8">
          <div className="flex items-start justify-center gap-5">
            <img
              className="w-[60px]"
              src="https://lh3.googleusercontent.com/lv1Ras6ux_YN-LdWvL69MYKi4phi7mtXrhLi5umba9NagBB_ZnvYJwiHdKr-k-q77WIskj58z2BCD8Dpfk9WyWkVaro=w128-h128-e365-rj-sc0x00ffffff"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl ">Keplr</h1>
              <div className="mt-3  flex items-center justify-start">
                <div className="p-1 hover:bg-blue-100 rounded-full cursor-pointer ">
                  <MdVerified className="text-blue-500" />
                </div>
                <span className="cursor-pointer text-blue-600 text-sm font-semibold hover:text-blue-700">
                  Keplr.app
                </span>

                <div className="flex items-center justify-center ml-4 gap-2">
                  <AiOutlineRight className="text-xs text-blue-800 font-bold" />
                  <p className="text-blue-700">Featured</p>
                </div>
              </div>
              <div className="mt-4 flex  items-center justify-start">
                <div className="flex">
                  <MdOutlineStarPurple500 className="text-[24px]" />
                  <MdOutlineStarPurple500 className="text-[24px]" />
                  <MdOutlineStarPurple500 className="text-[24px]" />
                  <MdOutlineStarPurple500 className="text-[24px]" />
                  <IoMdStarHalf className="text-[24px] " />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-sm">101 </p>
                  <span className="text-gray-600 p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                    <AiOutlineInfoCircle />
                  </span>
                  <div className="w-[1.2px] h-[20px] bg-gray-500" />
                  <p
                    className="text-blue-700 hover:text-blue-800 cursor-pointer
                        font-medium"
                  >
                    Productivity
                  </p>
                  <div className="w-[1.2px] h-[20px] bg-gray-500" />
                  <p className="text-gray-500">
                    700,000+ <span>users</span>
                  </p>
                </div>
              </div>
              <Link to="/connect-id">
                <span
                  className="text-md font-medium px-5 max-w-[40%] py-2
              mt-2 rounded-md bg-blue-600 text-white cursor-pointer"
                >
                  Add to Chrome
                </span>
              </Link>
            </div>
          </div>
          <Link to="/connect-id">
            <span
              className="text-md font-medium px-5 max-w-[40%] py-2
            mt-2 rounded-md bg-blue-600 text-white cursor-pointer"
            >
              Add to Chrome
            </span>
          </Link>
        </div>

        {/* third body */}
        <div
          className="
                     w-full h-[1.5px] bg-gray-100 mt-[2rem]"
        />
        <div className="flex flex-col items-center justify-center mt-7">
          <div className="flex items-center justify-center gap-5">
            <span
              className=" px-4 py-2 bg-white text-blue-600 shadow-lg 
            rounded-full cursor-pointer"
            >
              Overview
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Privacy practices
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Reviews
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Support
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Related
            </span>
          </div>

          {/* img */}
          <div className="bg-gray-100 mt-[2rem] ">
            <div className="flex items-center justify-center w-full bg-gray-100 ">
              <div
                className="p-5 bg-white  
            mr-8 rounded-full hover:shadow-md"
              >
                <IoIosArrowBack />
              </div>
              <div>
                <img
                src={KeplrBanner}
                  alt=""
                />
              </div>
              <div className="p-5 bg-white ml-8  rounded-full hover:shadow-md">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="mt-3 flex gap-2 items-center justify-center">
              <GiPlainCircle size={15} />
              <BiCircle size={15} />
              <BiCircle size={15} />
              <BiCircle size={15} />
              <BiCircle size={15} />
            </div>
          </div>

          {/* textsss */}
          <div className=" flex justify-between  bg-white px-4 pt-[4rem] mt-[2rem] overscroll-x-scroll w-full">
            <div className="flex flex-col gap-3 flex-1">
              <h1 className="text-2xl text-gray=600">Overview</h1>
              <div className="flex gap-2 items-center  text-gray-500">
                <MdLaptopMac />
                <span>compatible with your device</span>
              </div>
              <div className="flex flex-col gap-4 text-gray-600 text-[17px] px-3 max-w-[500px]">
                <p>
                  Keplr is a browser extension wallet for the Inter blockchain
                  ecosystem.
                </p>
                <p>
                  Introducing the first, and leading, IBC-enabled wallet for the
                  Cosmos ecosystem:
                </p>
                <p>Keplr, Your Wallet for the Interchain</p>
                <p>
                  Keplr is an open-source browser extension wallet for the
                  Cosmos interchain ecosystem. We provide the most flexible and
                  versatile account management and wallet functionalities for
                  all Cosmos-SDK based blockchains.
                </p>
                <p>KEY FEATURES //</p>
                <ul>
                  <li>- Multichain account management</li>
                  <li>- Stake to any validator and claim rewards</li>
                  <li>- Vote on governance proposals</li>
                  <li>- Add new blockchains from web front-ends</li>
                  <li className="text-gray-300">
                    - Hardware wallet support (Ledger Nano X/S)
                  </li>
                </ul>
                <span
                  className="px-4 py-[3px] text-sm flex items-center justify-center
                 text-blue-600 rounded-md cursor-pointer hover:bg-blue-50 border-[1px]
                  border-gray-300 min-w-[40%] max-w-[60%] md:max-w-[30%] bg-white"
                >
                  Read more
                </span>
              </div>
            </div>
            <div className="flex gap-2 h-full flex-1 w-full">
              <div className="w-[2px] h-100% bg-gray-300" />
              <div className="flex flex-col">
                <h1 className="text-2xl ">Additional Information</h1>
                <div className="mt-3 flex gap-6 items-center mb-3">
                  <span
                    className="text-blue-500 flex items-center cursor-pointer
                   hover:text-blue-600 justify-center gap-1 text-md"
                  >
                    <AiFillHome />
                    <p>Website</p>
                  </span>
                  <span
                    className="flex items-center justify-center  text-md
                  cursor-pointer gap-1  hover:text-red-700 text-red-600"
                  >
                    <HiInformationCircle />
                    <p>Report abuse</p>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Version</p>
                    <p className="text-gray-500 text-sm">0.10.5</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Updated</p>
                    <p className="text-gray-500 text-sm">May 30, 2022</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Size</p>
                    <p className="text-gray-500 text-sm">9.89MiB</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Language</p>
                    <p className="text-gray-500 text-sm">English</p>
                  </span>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-gray-600">Publisher</h2>
                    <p className=" text-md text-blue-600">
                      Contact the publisher Privacy Policy
                    </p>
                    <span className="text-xs text-gray-500 italic max-w-[65%]">
                      This publisher has not identified itself as a trader. For
                      consumers in the European Union, please note that consumer
                      rights may not apply to contracts between you and this
                      publisher.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* related */}
          <div
            className="bg-gray-100 h-[250px] w-full flex flex-col
          items-center justify-center"
          >
            <h1 className="text-3xl">Related</h1>
            <div className="flex gap-6 items-center justify-center mt-6">
              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src={sender1}
                  alt=""
                />
                <h1 className="text-gray-500">Sender Wallet</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />

                    {/* <IoMdStarHalf className="text-[24px] " /> */}
                  </div>
                  <p className="text-sm text-gray-600">712</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src={terra}
                  alt=""
                />
                <h1 className="text-gray-500">Terra Station Wallet</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <IoMdStarHalf className="text-[24px] " />
                  </div>
                  <p className="text-sm text-gray-600">712</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src={argentx}
                  alt=""
                />
                <h1 className="text-gray-500">Argent X</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />

                    {/* <IoMdStarHalf className="text-[24px] " /> */}
                  </div>
                  <p className="text-sm text-gray-600">26</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src={forbole1}
                  alt=""
                />
                <h1 className="text-gray-500">Forble X</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <IoMdStarHalf className="text-[24px] " />
                    {/* <MdOutlineStarPurple500 className="text-[22px] text-gray-900" /> */}

                    {/*  */}
                  </div>
                  <p className="text-sm text-gray-600">24</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src={subwallet1}
                  alt=""
                />
                <h1 className="text-gray-500">SubWallet-Polkadot Ext...</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />

                    {/* <IoMdStarHalf className="text-[24px] " /> */}
                  </div>
                  <p className="text-sm text-gray-600">16</p>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="h-[15rem] bg-blue-500 w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-3">
              <h1 className="text-2xl font-semibold text-white text-center">
                Keplr is a browser extension wallet for the Inter blockchain
                ecosystem.
              </h1>
              <span className=" cursor-pointer px-5 py-2 bg-white text-blue-400 mt-5 rounded-md">
                Add to chrome
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
