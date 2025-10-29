// import React from 'react'
// import InstallCard from '../components/installCard.jsx'

// const installationPage = () => {
//   return (
//     <div className='p-4 sm:p-16'>
//      <h1 className='text-3xl sm:text-5xl font-bold pb-2  sm:pb-4 text-center'>Your Installed Apps</h1>
//     <p className='text-gray-400 pb-5 text-center'>Explore All Trending Apps on the Market developed by us</p>
//      <div className='flex justify-between items-center'>
//       <h1>3 App Found</h1>
//       <select>
//         <option value="default">Sort By</option>
//         <option value="asc">ASC</option>
//         <option value="dsc">DSC</option>
//       </select>
//        </div>
//       <div>
//         <InstallCard />
//         <InstallCard />
//         <InstallCard />
     
//      </div>
//     </div>
//   )
// }

// export default installationPage
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import InstallCard from "../components/installCard.jsx";

const MyInstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [count , setCount] = useState(0);
  const [sortOrder, setSortOrder] = useState(""); // "" | "high-low" | "low-high"

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
    setCount(storedApps.length);
  }, []);

  const handleUninstall = (appId) => {
    console.log("Uninstalling app with ID:", appId);
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    setCount(updatedApps.length);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedApps = [...installedApps].sort((a, b) => {
      if (order === "high-low") return b.downloads - a.downloads;
      if (order === "low-high") return a.downloads - b.downloads;
      return 0;
    });

    setInstalledApps(sortedApps);
  };

  return (
    <div className='p-4 sm:p-16'>
     <h1 className='text-3xl sm:text-5xl font-bold pb-2  sm:pb-4 text-center'>Your Installed Apps</h1>
   <p className='text-gray-400 pb-5 text-center'>Explore All Trending Apps on the Market developed by us</p>

      {installedApps.length > 0 && (
        <div className=" flex justify-between items-center mb-4">
          <label className="mr-2 sm:text-xl font-semibold">Sort by Downloads:</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border px-2 py-1 rounded-md"
          >
            <option value="">Default</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      )}

      <div className="gap-4 min-h-[210px] sm:min-h-[136px]">
        {installedApps.length === 0 ? (
          <p className=" text-center text-xl  sm:text-4xl font-bold mt-28 sm:mt-16">No apps installed yet.</p>
        ) : (
          installedApps.map((app) => (
            <div key={app.id} className="">
              <InstallCard app={app} handleUninstall={handleUninstall} />
            </div>
          ))
        )}
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default MyInstallationPage;
