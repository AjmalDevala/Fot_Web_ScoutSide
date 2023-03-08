import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Instance from "../config/Instance";
import ReactPaginate from "react-paginate";
import "../pagenation.css"

function Player() {
  const scoutId = localStorage.getItem("scoutId");
  const token =localStorage.getItem("token")
  const [search, setSearch] = useState("");
  const [connectedPlayers, setConnectedPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [change, setChange] = useState(false);
  const navigate = useNavigate();

  //  Pagination......................
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const dataToRender = player.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const searchData = (player) => {
    return search === ""
      ? player
      : player.userId.fullname.toLowerCase().includes(search) ||
          player.position.toLowerCase().includes(search);
  };





  useEffect(() => {
    Instance.get("/admin/allplayer",{
      headers:{Authorization:`Bearer ${token}`}
    }).then((response) => {
      setPlayer(response.data.player);
      connected();
    });
  }, [change]);

  const connected = () => {
    Instance
      .get(`/admin/connectedPlayers`,{
        headers:{Authorization:`Bearer ${token}`},
      })
      .then((response) => {
        setConnectedPlayers(response.data.connectPlayer);
      });
  };

  const Connect = (id) => {
    Instance
      .post(
        `/scout/connectPlayer?userId=${id}`,{},{
          headers:{Authorization:`Bearer ${token}`}
        })
      .then((response) => {
        toast.success(response.data.msg);
        change === true ? setChange(false) : setChange(true);
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
      <Toaster position="top-center"></Toaster>
      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className="flex flex-col">
          <div className="flex flex-col ">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center ">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold mb-7">
                    Meet the players
                  </h1>
                  {/* <!-- Description --> */}
                  <p className="text-gray-700 text-lg font-light">
                    A player scout typically attends as many football matches as
                    possible to evaluate targets first hand. Scouts who wish to
                    identify promising young players typically attend
                    lower-league club games,.
                  </p>
                  <p className="text-center text-bold">Connect and Message!</p>
                </div>
              </div>

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
                    {dataToRender.filter(searchData).map((player) => (
                      <div key={player?.id} className="group relative">
                        <Link to={"/singlePage"} state={player?.userId._id}>
                          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                              src={player?.profileUrl}
                              alt="add"
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full sm:h-full sm:w-full md:w-full md:h-full"
                            />
                          </div>
                        </Link>
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
                        <div className="flex justify-center">
                          {connectedPlayers.includes(player.userId._id) ? (
                            <button
                              onClick={() => navigate("/chat")}
                              className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            >
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
      <ReactPaginate
        pageCount={Math.ceil(player.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel="Previous"
        nextLabel="Next"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </div>
  );
}

export default Player;
