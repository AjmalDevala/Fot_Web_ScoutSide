import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";

function Search() {
  const [search, setSearch] = useState("");
  const searchData = (player) => {
    return search === ""
      ? player
      : player.userId.fullname.toLowerCase().includes(search) ||
          player.position.toLowerCase().includes(search);
  };

  const [player, setPlayer] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7007/api/admin/allplayer").then((response) => {
      console.log(response.data, "0987654dyuio");
      setPlayer(response.data.player);
    });
  }, []);

  const Connect = (id) => {
    const scoutId = localStorage.getItem("scoutId");
    axios
      .post(
        `http://localhost:7007/api/scout/connectPlayer?scoutId=${scoutId}&userId=${id}`
      )
      .then((res) => {
        toast(res.data);
      });
  };

  return (
    <div>
      <Navbar />
      <Toaster position="top-center"></Toaster>
      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className="flex flex-col">
          <div className="flex flex-col ">
            <div className="container max-w-7xl px-4">
              <div className="flex justify-center">
                <form className="w-full max-w-md ">
                  <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                      onChange={(e) => {
                        let searchValue = e.target.value.toLocaleLowerCase();
                        setSearch(searchValue);
                      }}
                      type="text"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <button
                      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {player.filter(searchData).map((player) => (
                      <div key={player?.id} className="group relative">
                        <Link to={"/singlePage"} state={player?.userId._id}>
                          <div className="min-h-48 aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                              src={player?.profileUrl}
                              alt="add"
                              className="h-full w-48  object-cover "
                            />
                          </div>
                        </Link>
                        <p className="mt-1 text-xl text-cyan-300 flex justify-center">
                          {player?.position}
                        </p>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-lg text-bold text-">
                              {player?.userId.fullname}
                            </h3>
                            <h4 className="text-sm text-neutral-900">
                              Age:
                              {player?.age}
                            </h4>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {player?.nationality}
                          </p>
                        </div>
                        <p className="text-sm flex justify-center  font-bold text-blue-600 ">
                          {player?.currentTeam}
                        </p>
                        <div className="flex justify-center">
                          <button
                            onClick={() => Connect(player._id)}
                            className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                          >
                            Connect!
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
