import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Instance from "../config/Instance";
import Navbar from "./layout/Navbar";

function SinglePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const playerId = location?.state;
  const token = localStorage.getItem("token");
  const [player, setPlayer] = useState([]);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    Instance.get(`/scout/singlePlayer/${playerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setPlayer(response.data.player);
      setGallery(response.data.gallery);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-20">
        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
          <div className="flex justify-center">
            <img
              src={player?.profileUrl}
              alt="som"
              className="object-fill mx-auto  -top-20 w-52 h-44 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div className="mt-7">
            <h1 className="font-bold text-center text-3xl text-gray-900">
              {player.userId?.fullname}
            </h1>
            <p className="text-center text-sm text-gray-400 font-medium">
              {player?.position}
            </p>
            <div className="my-5 px-6">
              <a
                href="#"
                className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >
                Connect with{" "}
                <span className="font-bold">@{player.userId?.fullname}</span>
              </a>
            </div>

            <div className="w-full">
              <h3 className="font-medium text-gray-900 text-left px-6">
                Recent activites
              </h3>
              <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Player Position :
                  <span className="text-gray-500 font-medium  ml-2">
                    {player?.position}
                  </span>
                </a>

                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  player currentTeam :
                  <span className="text-gray-500 text-base font-bold  ml-2">
                    {player?.currentTeam}
                  </span>
                </a>

                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Player Age :<span className="font-bold">{player?.age}</span>
                </a>
                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full  h-6 shadow-md inline-block mr-2"
                  />
                  Player height :
                  <span className="font-bold">{player?.height} cm</span>
                  <a className="ml-4">
                    {" "}
                    Player Foot :
                    <span className="font-bold ml-4 ">{player?.foot} </span>
                  </a>
                </a>

                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  player country :-
                  <span className="text-gray-500 text-xs">
                    {player?.nationality}
                  </span>
                </a>

                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 overflow-hidden"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  player past Team :-
                  <span className="text-gray-500 text-xs">
                    {player?.previousTeam}
                  </span>
                </a>
                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 overflow-hidden"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  player Awards :-
                  <span className="text-gray-500 font-bold text-base">
                    {player?.awards}
                  </span>
                </a>
                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 overflow-hidden"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  player Language :-
                  <span className="text-gray-500 text-xs">
                    {player?.language}
                  </span>
                </a>
                <a
                  href="#"
                  className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 overflow-hidden"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  player profile updated :-
                  <span className="text-gray-500 text-xs">
                    {player?.userId?.updatedAt}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div role="main" class="flex flex-col items-center justify-center mt-7">
          <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            Player gallery
          </h1>
        </div>

        <div className="relative overflow-x-scroll mt-4  flex flex-col min-w-0 mb-6 break-words bg-white rounded-2xl bg-clip-border m-auto p-auto border-0 shadow-2xl">
          <div className="flex   pb-10 hide-scroll-bar mt-4">
            {gallery.map((item) => (
              <div className="flex flex-nowrap md:ml-20 ml-10 hide-scroll-bar">
                {item.imageUrl.map((url, index) => (
                  <div class="flex flex-col  ">
                    <div class="flex flex-grow">
                      <div class="max-w-md bg-gray-100 shadow-xl transform transition hover:scale-95 duration-300 ease-in-out rounded-xl p-6 mr-5">
                        <div class="relative   w-[20vw]  h-[50vh] ">
                          <img
                            src={url}
                            alt="Just a flower"
                            class="object-cover  w-[40vw]  h-[50vh]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
