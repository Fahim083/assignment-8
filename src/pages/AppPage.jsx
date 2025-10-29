import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard.jsx";
import { CiSearch } from "react-icons/ci";
import AppErrorPage from "./AppErrorPage.jsx";

const AppPage = () => {
  const [apps, setApps] = useState([]); // full dataset
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setApps(data); // directly set the array
        } else {
          console.error("Data is not an array");
          setApps([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  
  const filteredApps =
    searchValue.trim() === ""
      ? apps 
      : apps.filter((app) =>
          app.title.toLowerCase().includes(searchValue.toLowerCase())
        );

  if (loading) {
    return <p className="text-center py-10">Loading apps...</p>;
  }

  return (
    <div className="px-2 sm:px-20 py-5 sm:py-8 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold pb-2 sm:pb-4">
        Our All Applications
      </h1>
      <p className="text-gray-400 pb-5">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-2">
        <p className="text-xl font-semibold">{filteredApps.length} Apps Found</p>
        <div className="relative">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Apps By Name..."
            className="border border-gray-400 py-2 pl-9 rounded-lg w-72 focus:outline-violet-500"
          />
          <CiSearch className="text-gray-400 absolute left-2 top-3 text-xl" />
        </div>
      </div>

     <div>
  {filteredApps.length > 0 ? (
    <div className="app-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3 sm:py-6">
      {filteredApps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  ) : (
    <AppErrorPage />
  )}
</div>

    </div>
  );
};

export default AppPage;
