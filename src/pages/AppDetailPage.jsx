import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import download from "../assets/icon-downloads.png";
import ratng from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import ReviewChart from "../components/ReviewChart.jsx";
const AppDetailPage = () => {
  const { id } = useParams(); 
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
   
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedApp = data.find((a) => a.id === parseInt(id));
        if (selectedApp) {
          setApp(selectedApp);

      
          const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
          if (installedApps.includes(selectedApp.id)) {
            setInstalled(true);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching app data:", error);
      });
  }, [id]);

  const handleInstall = () => {
    setInstalled(true);

    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }

    toast.success(`${app.title} installed successfully!`);
  };

  if (!app) return <p className="text-center py-10">App not found</p>;

  return (
    <div className="p-2 sm:p-20">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
        <img
          src={app.image}
          className="border h-80 sm:h-96 w-96 object-cover rounded-md"
          alt={app.title}
        />
        <div className="w-full">
          <h1 className="text-3xl font-semibold pb-2 sm:pb-4">{app.title}</h1>
          <h3 className="text-lg text-gray-700 border-b-[2px] pb-3 sm:pb-7 border-gray-200">
            Developed by <span className="text-violet-500">{app.companyName}</span>
          </h3>
          <div className="flex py-7 sm:py-10 justify-between items-center">
            <div className="flex flex-col items-center  sm:items-start gap-3">
              <img src={download} alt="" />
              <p className="text-gray-600">Downloads</p>
              <h4 className="text-3xl sm:text-4xl font-bold">{app.downloads/1000000} M</h4>
            </div>
            <div className="flex flex-col items-center  sm:items-start gap-3">
              <img src={ratng} alt="" />
              <p className="text-gray-600">Average Rating</p>
                     <h4 className="text-3xl sm:text-4xl font-bold">{app.ratingAvg}</h4>
            </div>
            <div className="flex flex-col items-center  sm:items-start gap-3">
              <img src={review} alt="" />
              <p className="text-gray-600">Total Reviews</p>
                     <h4 className="text-3xl sm:text-4xl font-bold">{app.reviews/1000}K</h4>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 py-2 px-4 rounded-lg text-white font-semibold ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>
      <div className="py-5 my-3 mt-10 border-y-[2px] border-gray-200">
  <p className="text-xl font-semibold pb-2 ">Review Distribution</p>
  <ReviewChart ratings={app.ratings} />
</div>

      <div className="py-5">
        <p className="text-xl font-semibold pb-2">Description</p>
        <p>{app.description}</p>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AppDetailPage;
