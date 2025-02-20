"use client";
import { useState } from "react";
import Image from "next/image";

import avatar from "@/assets/avatar.jpg";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const GeneralSettings = () => {
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      setImage(e.target?.result);
    };

    reader.onerror = () => {
      console.log("There was an error reading the file");
    };
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-base font-bold text text-black">
          General Settings
        </h1>
        <div className="flex gap-2 b">
          <button className="py-2 px-3 font-medium text-sm hover:bg-zinc-300 hover:text-black text-black rounded-md cursor-pointer hover:border-none">
            Cancel
          </button>
          <button className="py-2 px-3 text-sm font-medium  hover:bg-zinc-500 hover:text-white bg-zinc-600 text-gray-100 border-none rounded-md cursor-pointer active:bg-zinc-800">
            Save changes
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        {/* Store name */}
        <div>
          <h1 className="font-semibold text-black">Store name</h1>
          <p className=" text-zinc-400 text-[13px] ml-2">Challenger store</p>
          <div className="flex gap-8 pt-1">
            <input
              type="text"
              className="border placeholder:text-xs border-zinc-400 px-2 rounded-lg w-[90%]"
              placeholder="Challengers store"
            />
            <div className="flex gap-4">
              <button className="text-sm py-2 px-3 rounded-md hover:bg-zinc-200 text-black ">
                Edit
              </button>
              <button className="text-sm py-2 px-3 rounded-md bg-zinc-400 text-gray-100 hover:bg-zinc-500 hover:text-white">
                Save
              </button>
            </div>
          </div>
        </div>
        {/* Avatar */}
        <div className="flex flex-col items-center justify-center border">
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-start"
          >
            <p className="font-semibold text-black text-center">Avatar</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              placeholder="Upload your avatar"
            />
            {image && <Image src={image} alt="Uploaded Preview" />}
          </label>
          {/* <button className="text-center bg-zinc-200 py-2 px-3 my-2 rounded-lg text-medium hover:bg-zinc-300 text-sm text-black">
            Change avatar
          </button> */}
        </div>
        {/* Store URl */}
        <div>
          <h1 className="font-semibold text-black">Store URL</h1>
          <p className=" text-zinc-400 text-[13px] ml-2">
            https://challengerstore.com
          </p>
          <div className="flex gap-8 pt-1">
            <input
              type="text"
              className="border placeholder:text-xs border-zinc-400 px-2 rounded-lg w-[90%]"
              placeholder=".com"
            />
            <div className="flex gap-4">
              <button className="text-sm py-2 px-3 rounded-md hover:bg-zinc-200 text-black ">
                Edit
              </button>
              <button className="text-sm py-2 px-3 rounded-md bg-zinc-400 text-gray-100 hover:bg-zinc-500 hover:text-white">
                Save
              </button>
            </div>
          </div>
        </div>
        {/* Country*/}
        <div>
          <h1 className="font-semibold text-black">Country</h1>
          <span className="w-28 flex flex-col justify-center items-center text-gray-400 text-xs gap-1">
            <Image
              src={avatar}
              alt="Country name"
              width={16}
              height={16}
              className="w-6 h-6 rounded-full mt-1"
              unoptimized
            />
            <p className="text-xs">Zimbabwe</p>
          </span>
          <div className="flex items-center gap-2">
            <p>
              <BsGlobeEuropeAfrica className="w-6 h-6 text-black" />
            </p>
            <select
              name="cat"
              id="cat"
              className="w-[45%] my-1 py-2 px-3 text-sm text-black rounded-lg"
            >
              <option value="general">--Select your country --</option>
              <option value="kitchen">Zimbabwe</option>
              <option value="phone">South Afica</option>
              <option value="computer">Zambia</option>
            </select>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-black">Currency</h1>
          <p className="text-gray-400 text-xs ml-2">Zimbabwe</p>
          <div className="flex items-center gap-2">
            <p>
              <MdCurrencyExchange className="w-6 h-6" />
            </p>
            <select
              name="cat"
              id="cat"
              className="w-[45%] my-1 py-2 px-3 text-black rounded-lg text-sm"
            >
              <option value="general">--Choose your currency --</option>
              <option value="kitchen">Rupees</option>
              <option value="phone">US Dollar</option>
              <option value="computer">Euro</option>
            </select>
          </div>
        </div>
        {/* Contact email */}
        <div>
          <h1 className="font-semibold text-black">Contact email</h1>
          <p className=" text-zinc-400 text-[13px] ml-2">
            challangestore@gmail.com
          </p>
          <div className="flex items-center gap-2 pt-1">
            <p>
              <HiOutlineMail className="w-6 h-6" />
            </p>
            <input
              type="text"
              className="border placeholder:text-xs border-zinc-400 px-2 py-1 rounded-lg w-[90%]"
              placeholder="example.com"
            />
            <div className="flex gap-4">
              <button className="text-sm py-2 px-3 rounded-md hover:bg-zinc-200 text-black ">
                Edit
              </button>
              <button className="text-sm py-2 px-3 rounded-md bg-zinc-400 text-gray-100 hover:bg-zinc-500 hover:text-white">
                Save
              </button>
            </div>
          </div>
        </div>
        {/* Tax */}
        <div>
          <h1 className="font-semibold text-black">Percentage tax</h1>
          <p className=" text-zinc-400 text-[13px] ml-2">25%</p>
          <div className="flex items-center gap-2 pt-1">
            <input
              type="number"
              className="border placeholder:text-xs border-zinc-400 px-2 py-1 rounded-lg w-[90%]"
              placeholder="0"
            />
            <div className="flex gap-4">
              <button className="text-sm py-2 px-3 rounded-md hover:bg-zinc-200 text-black ">
                Edit
              </button>
              <button className="text-sm py-2 px-3 rounded-md bg-zinc-400 text-gray-100 hover:bg-zinc-500 hover:text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSettings;
