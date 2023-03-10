import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Instance from "../config/Instance";

function AllPlayers() {
  const [search, setSearch] = useState("");
  const searchData = (player) => {
    return search === ""
      ? player
      : player.userId.fullname.toLowerCase().includes(search) ||
          player.position.toLowerCase().includes(search);
  };

  const [player, setPlayer] = useState([]);
  useEffect(() => {
    Instance.get("/admin/allplayer").then((response) => {
      setPlayer(response.data.player);
    });
  }, []);

  const Connect = (id) => {
    const scoutId = localStorage.getItem("scoutId");
    Instance
      .post(`scout/connectPlayer?scoutId=${scoutId}&userId=${id}`
      )
      .then((response) => {
        toast.success(response.data.msg);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error(error.message);
        }
      });
  };
  return (
    <div>
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
      {/* //newnew */}
      <div className="relative  mt-4 w-5/6 flex flex-col min-w-0 mb-6 break-words bg-orange-300/60 rounded-2xl bg-clip-border m-auto p-auto border-0 shadow-2xl">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-4">
          <div className="flex flex-nowrap md:ml-20 ml-10 hide-scroll-bar">

            {player.filter(searchData).map((player) => (
              <div class="max-w-md w-72 bg-gray-100 shadow-xl transform transition hover:scale-95 duration-300 ease-in-out rounded-xl p-6 mr-5">
                <div class="flex flex-col ">
                  <div class="">
                    <div class="relative h-62 w-full mb-3">
                      <img
                        src={player.profileUrl}
                        alt="Just a flower"
                        class=" w-96   object-  rounded-2xl"
                      />
                    </div>
                    <div class="flex-auto justify-evenly">
                      <div class="flex flex-wrap ">
                        <div class="w-full flex-none text-sm flex items-center text-gray-600">
                          <h1 class="text-gray-800 whitespace-nowrap  font-semibold">
                            {player.userId.fullname}
                          </h1>
                        </div>
                        <div class="flex items-center w-full justify-between min-w-0 ">
                          <h1 class="mb-4 text-base font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-xl">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                              {player.position}
                            </span>{" "}
                          </h1>
                          <h1 class="mb-4 text-base font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-xl">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600/30 from-sky-400">
                              {player.age}
                            </span>{" "}
                          </h1>
                        </div>
                      </div>
                      <div class="text-xl text-black font-bold mt-1"></div>
                      <div class="flex space-x-2 text-sm font-medium justify-start mt-3">
                        <Link to={"/singlePage"} state={player?.userId._id}>
                          <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-gray-900 ">
                            <span>View More</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
           </div>
        </div>


       

      <div className="relative  mt-4 w-5/6 flex flex-col min-w-0 mb-6 break-words bg-orange-300/60 rounded-2xl bg-clip-border m-auto p-auto border-0 shadow-2xl">
        <h1>heder</h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-4">
          <div className="flex flex-nowrap md:ml-20 ml-10 hide-scroll-bar">
            <div class="max-w-md w-72 bg-gray-100 shadow-xl transform transition hover:scale-95 duration-300 ease-in-out rounded-xl p-6 mr-5">
              <div class="flex flex-col ">
                <div class="">
                  <div class="relative h-62 w-full mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                      alt="Just a flower"
                      class=" w-96   object-  rounded-2xl"
                    />
                  </div>
                  <div class="flex-auto justify-evenly">
                    <div class="flex flex-wrap ">
                      <div class="w-full flex-none text-sm flex items-center text-gray-600">
                        <h1 class="text-gray-800 whitespace-nowrap mr-3 font-semibold">
                          4.60
                        </h1>
                      </div>
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h1 class="text-lg mr-auto cursor-pointer text-black hover:text-gray-700 font-semibold truncate mb-1">
                          Lorem ipsum is placeholder text commonly used in the
                          graphick
                        </h1>
                      </div>
                    </div>
                    <div class="text-xl text-black font-bold mt-1"></div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mt-3">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-gray-900 ">
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative  mt-4 w-5/6 flex flex-col min-w-0 mb-6 break-words bg-orange-300/60 rounded-2xl bg-clip-border m-auto p-auto border-0 shadow-2xl">
        <h1>heder</h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-4">
          <div className="flex flex-nowrap md:ml-20 ml-10 hide-scroll-bar">
            <div class="max-w-md w-72 bg-gray-100 shadow-xl transform transition hover:scale-95 duration-300 ease-in-out rounded-xl p-6 mr-5">
              <div class="flex flex-col ">
                <div class="">
                  <div class="relative h-62 w-full mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                      alt="Just a flower"
                      class=" w-96   object-  rounded-2xl"
                    />
                  </div>
                  <div class="flex-auto justify-evenly">
                    <div class="flex flex-wrap ">
                      <div class="w-full flex-none text-sm flex items-center text-gray-600">
                        <h1 class="text-gray-800 whitespace-nowrap mr-3 font-semibold">
                          4.60
                        </h1>
                      </div>
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h1 class="text-lg mr-auto cursor-pointer text-black hover:text-gray-700 font-semibold truncate mb-1">
                          Lorem ipsum is placeholder text commonly used in the
                          graphick
                        </h1>
                      </div>
                    </div>
                    <div class="text-xl text-black font-bold mt-1"></div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mt-3">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-gray-900 ">
                        <span>View</span>
                      </button>
                    </div>
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

export default AllPlayers;
