
import React, { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Instance from "../config/Instance";

const WaitingPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    showProfile();
  }, []);
  const showProfile = async () => {
    await Instance
      .get("/scout/showProfile", {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((response) => {
        if (response.data.scout.status == "Pending") {
          toast.loading("We are processing your request...");
          setTimeout(function () {
            toast.dismiss();
          }, 30000);
        }else{
            navigate("/home");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/16676.jpg')",
      }}
    >
      <Toaster position="top-center"></Toaster>
      <h1 className="text-4xl font-bold mb-4 text-white">Please Wait</h1>
      <p className="text-xl mb-8 text-white">
        We are processing your request...
      </p>
      <button
        onClick={() => showProfile()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next Process
      </button>
    </div>
  );
};

export default WaitingPage;
