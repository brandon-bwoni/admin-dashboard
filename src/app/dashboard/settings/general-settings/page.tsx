import React from "react";

const GeneralSettings = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text text-zinc-600">Settings</h1>
        <div className="flex gap-4 b">
          <button className="py-2 px-3 font-medium text-sm hover:bg-zinc-300 hover:text-gray-600 border border-zinc-400 text-gray-600 rounded-md cursor-pointer hover:border-none">
            Cancel
          </button>
          <button className="py-2 px-3 text-sm font-medium  hover:bg-zinc-500 hover:text-white bg-zinc-600 text-gray-100 border-none rounded-md cursor-pointer">
            Save changes
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default GeneralSettings;
