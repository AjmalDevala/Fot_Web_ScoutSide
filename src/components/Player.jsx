import axios from "axios";
import React, { useEffect, useState } from "react";

function Player() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7007/api/admin/allplayer").then((response) => {
      console.log(response.data, "0987654dyuio");
      setPlayer(response.data.player);
    });
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      {/* <!-- Page Container --> */}
      <div class="flex items-center justify-center min-h-screen bg-white ">
        <div class="flex flex-col">
          <div class="flex flex-col ">
            {/* <!-- Meet the Team --> */}
            <div class="container max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div class="flex flex-wrap justify-center text-center ">
                <div class="w-full lg:w-6/12 px-4">
                  {/* <!-- Header --> */}
                  <h1 class="text-gray-900 text-4xl font-bold mb-7">
                    Meet the players
                  </h1>

                  {/* <!-- Description --> */}
                  <p class="text-gray-700 text-lg font-light">
                    A player scout typically attends as many football matches as
                    possible to evaluate targets first hand. Scouts who wish to
                    identify promising young players typically attend
                    lower-league club games,.
                  </p>
                  <p className="text-center text-bold">Connect and Message!</p>
                </div>
              </div>

              <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">                     
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {player.map((player) => (
                      <div key={player?.id} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                          <img
                            src={player?.profileUrl}
                            alt="add"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <p className="mt-1 text-xl text-blue-600 flex justify-center">
                          {player?.position}
                        </p>
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
                        <p className="text-sm flex justify-center  font-bold text-blue-600 ">
                          {player?.currentTeam}
                        </p>
                        <div className="flex justify-center">
                          <button class="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
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

export default Player;
