import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate,  } from "react-router-dom";
import Navbar from "./layout/Navbar";

function Search() {
  const [search, setSearch] = useState("");
  const [connectedPlayers, setConnectedPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [tempPlayer, setTempPlayer] = useState([]);
  const [change, setChange] = useState(false);
  const scoutId = localStorage.getItem("scoutId");
  const navigate =useNavigate()
  const searchData = (player) => {
    return search === ""
      ? player
      : player.userId.fullname.toLowerCase().includes(search) ||
          player.position.toLowerCase().includes(search) ||
          player.age.toString().includes(search.toLowerCase());
  };

  
  const filterByPosition = (category) => {
    let filtered = player.filter((data) => data.position === category);
    setTempPlayer(filtered);
  };
  const filterByAge = (age) => {
    let filtered = player.filter((data) => data.age <= age);
    setTempPlayer(filtered);
  };
  const filterByAgeup = (age) => {
    let filtered = player.filter((data) => data.age > age);
    setTempPlayer(filtered);
  };
  const all = () => {
    setTempPlayer(player);
  };
  useEffect(() => {
    axios.get("http://localhost:7007/api/admin/allplayer").then((response) => {
      setPlayer(response.data.player);
      setTempPlayer(response.data.player);
      connected();
    });
  }, [change]);

  const connected = () => {
    axios
      .get(
        `http://localhost:7007/api/admin/connectedPlayers?scoutId=${scoutId}`
      )
      .then((response) => {
        console.log(response.data.connectPlayer);
        setConnectedPlayers(response.data.connectPlayer);
      });
  };

  const Connect = (id) => {
    change === true ? setChange(false) : setChange(true);
   
    axios
      .post(
        `http://localhost:7007/api/scout/connectPlayer?scoutId=${scoutId}&userId=${id}`
      )
      .then((response) => {
        toast.success(response.data.msg);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
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

              <div className=" flex justify-center gap-3  ">
                <button
                  onClick={() => all()}
                  className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                >
                  All Players
                </button>
                <button
                  onClick={() => filterByPosition("Winger")}
                  className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                >
                  Winger
                </button>
                <button
                  onClick={() => filterByPosition("Full-back")}
                  className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                >
                  Fullback
                </button>
                <button
                  onClick={() => filterByPosition("Forward")}
                  className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                >
                  Foreword
                </button>
                <button
                  onClick={() => filterByPosition("Central Midfielder")}
                  className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                >
                  Midfielders
                </button>
                <button
                  onClick={() => filterByAgeup(25)}
                  className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                >
                  Age above-25
                </button>
                <button
                  onClick={() => filterByAge(25)}
                  className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                >
                  Age below-25
                </button>
              </div>

              <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {tempPlayer.filter(searchData).map((player) => (
                      <div key={player?.id} className="group relative ">
                        <Link to={"/singlePage"} state={player?.userId._id}>
                          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                              src={player?.profileUrl}
                              alt="add"
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full sm:h-full sm:w-full md:w-full md:h-full"
                            />
                          </div>
                        </Link>
                        <div class="flex items-center w-full justify-center min-w-0  mt-2">
                          <h1 class=" text-base font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-xl sm:text-base">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                              {player.position}
                            </span>{" "}
                          </h1>
                        </div>

                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-lg text-bold text-">
                              {player?.userId.fullname}
                            </h3>
                            <h4 className="text-base text-neutral-900">
                              Age:
                              {player?.age}
                            </h4>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {player?.nationality}
                          </p>
                        </div>

                        <div className="flex justify-center">
                          {connectedPlayers.includes(player.userId._id) ? (
                            <button onClick={()=>navigate('/chat')}  className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                              Message
                            </button>
                          ) : (
                            <button
                              onClick={() => Connect(player.userId._id)}
                              className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            >
                              Connect!
                            </button>
                          )}
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
