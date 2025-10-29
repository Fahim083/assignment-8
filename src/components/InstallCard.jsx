import React from "react";
import logo from "../assets/logo.png";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const InstallCard = ({ app, handleUninstall }) => {
  console;
  return (
    <div className="p-2 sm:p-4 bg-white rounded-md my-5 flex flex-col sm:flex-row justify-between items-center shadow-md gap-3 ">
      <div className="flex gap-3">
        <img src={app?.image} className="w-16 h-16 border object-cover" alt="" />
        <div className="flex flex-col  items-start gap-2 sm:gap-5">
          <p className="text-xl font-medium">{app?.title}</p>
          <div className="flex justify-between items-center gap-3">
            <div className="flex gap-3 items-center py-1 rounded-md text-green-600 text-sm font-medium">
              <img src={download} alt="" className="w-4 h-4 object-cover" />
              <p>{app?.downloads / 1000000}M</p>
            </div>
            <div className="flex items-center gap-2  px-2 py-1 rounded-md text-orange-600 text-sm font-medium">
              <img src={rating} alt="" className="w-4 h-4 object-cover" />
              <p>{app?.ratingAvg}</p>
            </div>
            <p className="text-gray-500">{app?.size} MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(app.id)}
        className="mt-2 px-3 py-1 block w-full sm:w-auto bg-green-500 text-white font-medium rounded-md"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallCard;
