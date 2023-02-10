import React from "react";

function Profile() {
  return (
    <div class="h-full bg-gray-200 p-8">
      <div class="bg-white rounded-lg shadow-xl pb-8">
        <div
          x-data="{ openSettings: false }"
          class="absolute right-12 mt-4 rounded"
        >
          <button
            class="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
            title="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </button>
          {/* <div x-show="openSettings"  class="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl" style={{display:" none;"}}>
                    <div class="py-2 border-b">
                        <p class="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
                        <button class="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                            </svg>
                            <span class="text-sm text-gray-700">Share Profile</span>
                        </button>
                        <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                            </svg>
                            <span class="text-sm text-gray-700">Block User</span>
                        </button>
                        <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-sm text-gray-700">More Info</span>
                        </button>
                    </div>
                    <div class="py-2">
                        <p class="text-gray-400 text-xs px-6 uppercase mb-1">Feedback</p>
                        <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <span class="text-sm text-gray-700">Report</span>
                        </button>
                    </div>
                </div> */}
        </div>
        <div class="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            class="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div class="flex flex-col items-center -mt-20">
          <img
            src="../assets//images/undraw_junior_soccer_6sop.png"
            class="w-40 border-4 border-white rounded-full"
          />
          <div class="flex items-center space-x-2 mt-2">
            <p class="text-2xl">Akash</p>
            <span class="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p class="text-gray-700">Scout</p>
          <p class="text-sm text-gray-500">India</p>
        </div>
        <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div class="flex items-center space-x-4 mt-2">
            <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
              </svg>
              <span>Connect</span>
            </button>
            <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Message</span>
            </button>
          </div>
        </div>

        <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div class="w-full flex flex-col 2xl:w-1/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">
                Scout Personal Info
              </h4>
              <ul class="mt-2 text-gray-700">
                <li class="flex border-y py-2">
                  <span class="font-bold w-24">Full name:</span>
                  <span class="text-gray-700">Akash</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Birthday:</span>
                  <span class="text-gray-700">24 Jul, 1991</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Joined:</span>
                  <span class="text-gray-700">10 Jan 2022 (25 days ago)</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Mobile:</span>
                  <span class="text-gray-700">(123) 123-1234</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Email:</span>
                  <span class="text-gray-700">akash@example.com</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Location:</span>
                  <span class="text-gray-700">India</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Languages:</span>
                  <span class="text-gray-700">English,hindi</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Age:</span>
                  <span class="text-gray-700">45</span>
                </li>
               
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Languages:</span>
                  <span class="text-gray-700">English,hindi</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Scout exp:</span>
                  <span class="text-gray-700">4 years</span>
                </li>
                <li class="flex items-center border-b py-2 space-x-2">
                  <span class="font-bold w-24">Elsewhere:</span>
                  <a href="#" title="Facebook">
                    <svg
                      class="w-5 h-5"
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 506.86 506.86"
                    >
                      <defs></defs>
                      <path
                        class="cls-1"
                        d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                      ></path>
                      <path
                        class="cls-2"
                        d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" title="Twitter">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 333333 333333"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                        fill="#1da1f2"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" title="LinkedIn">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 333333 333333"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                        fill="#0077b5"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" title="Github">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="0"
                      height="0"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 640 640"
                    >
                      <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 class="text-xl text-gray-900 font-bold">Activity log</h4>
              <div class="relative px-4">
                <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                {/* <!-- start::Timeline item --> */}
                <div class="flex items-center w-full my-6 -ml-1.5">
                  <div class="w-1/12 z-10">
                    <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div class="w-11/12">
                    <p class="text-sm">Profile informations changed.</p>
                    <p class="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div class="flex items-center w-full my-6 -ml-1.5">
                  <div class="w-1/12 z-10">
                    <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div class="w-11/12">
                    <p class="text-sm">
                      Connected with{" "}
                      <a href="#" class="text-blue-600 font-bold">
                        Colby Covington
                      </a>
                      .
                    </p>
                    <p class="text-xs text-gray-500">15 min ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div class="flex items-center w-full my-6 -ml-1.5">
                  <div class="w-1/12 z-10">
                    <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div class="w-11/12">
                    <p class="text-sm">
                      Invoice{" "}
                      <a href="#" class="text-blue-600 font-bold">
                        #4563
                      </a>{" "}
                      was created.
                    </p>
                    <p class="text-xs text-gray-500">57 min ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div class="flex items-center w-full my-6 -ml-1.5">
                  <div class="w-1/12 z-10">
                    <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div class="w-11/12">
                    <p class="text-sm">
                      Message received from{" "}
                      <a href="#" class="text-blue-600 font-bold">
                        Cecilia Hendric
                      </a>
                      .
                    </p>
                    <p class="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div class="flex items-center w-full my-6 -ml-1.5">
                  <div class="w-1/12 z-10">
                    <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div class="w-11/12">
                    <p class="text-sm">
                      New order received{" "}
                      <a href="#" class="text-blue-600 font-bold">
                        #OR9653
                      </a>
                      .
                    </p>
                    <p class="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div class="flex items-center w-full my-6 -ml-1.5">
                  <div class="w-1/12 z-10">
                    <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div class="w-11/12">
                    <p class="text-sm">
                      Message received from{" "}
                      <a href="#" class="text-blue-600 font-bold">
                        Jane Stillman
                      </a>
                      .
                    </p>
                    <p class="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full 2xl:w-2/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">About</h4>
              <p class="mt-2 text-gray-700">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 year Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consecteturLorem ipsum dolor
                sit amet consectetur adipisicing elit. Nesciunt voluptates
                obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad
                incidunt laboriosam, laudantium est unde natus cum numquam,
                neque facere. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas
                eveniet aperiam at maxime, iste id dicta autem odio laudantium
                eligendi commodi distinctio!
              </p>
            </div>
            <div class="flex justify-center items-center">
              {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

              <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div
                  role="main"
                  class="flex flex-col items-center justify-center"
                >
                  <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                    Scout gallery
                  </h1>
                  <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                    If you're looking for random paragraphs
                  </p>
                </div>
                <div class="lg:flex items-stretch md:mt-12 mt-8">
                  <div class="lg:w-1/2">
                    <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                      <div class="sm:w-1/2 relative">
                        <div>
                          <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                            12 April 2021
                          </p>
                          <div class="absolute bottom-0 left-0 p-6">
                            {/* <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2> */}
                            {/* <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                            <a
                              href="javascript:void(0)"
                              class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                            >
                              <p class="pr-2 text-sm font-medium leading-none">
                                Read More
                              </p>
                              <svg
                                class="fill-stroke"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.75 12.5L10.25 8L5.75 3.5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <img
                          src="/src/assets/images/playerdata.jpg"
                          class="w-full"
                          alt="chair"
                        />
                      </div>
                      <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
                        <div>
                          <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                            12 April 2021
                          </p>
                          <div class="absolute bottom-0 left-0 p-6">
                            {/* <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2> */}
                            {/* <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                            <a
                              href="javascript:void(0)"
                              class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                            >
                              <p class="pr-2 text-sm font-medium leading-none">
                                Read More
                              </p>
                              <svg
                                class="fill-stroke"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.75 12.5L10.25 8L5.75 3.5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <img
                          src="/src/assets/images/player.jpg"
                          class="w-full"
                          alt="wall design"
                        />
                      </div>
                    </div>
                    <div class="relative">
                      <div>
                        <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          12 April 2021
                        </p>
                        <div class="absolute bottom-0 left-0 md:p-10 p-6">
                          {/* <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2> */}
                          {/* <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                          <a
                            href="javascript:void(0)"
                            class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p class="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              class="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        src="/src/assets/images/player 2.jpg"
                        alt="sitting place"
                        class="w-full mt-8 md:mt-6 hidden sm:block"
                      />
                      <img
                        class="w-full mt-4 sm:hidden"
                        src="/src/assets/images/player 2.jpg"
                        alt="sitting place"
                      />
                    </div>
                  </div>
                  <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                    <div class="relative">
                      <div>
                        <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          12 April 2021
                        </p>
                        <div class="absolute bottom-0 left-0 md:p-10 p-6">
                          <h2 class="text-xl font-semibold 5 text-white">
                            The Decorated Ways
                          </h2>
                          <p class="text-base leading-4 text-white mt-2">
                            Dive into minimalism
                          </p>
                          <a
                            href="javascript:void(0)"
                            class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p class="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              class="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        src="/src/assets/images/player 2.jpg"
                        alt="sitting place"
                        class="w-full sm:block hidden"
                      />
                      <img
                        class="w-full sm:hidden"
                        src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                        alt="sitting place"
                      />
                    </div>
                    <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                      <div class="relative w-full">
                        <div>
                          <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                            12 April 2021
                          </p>
                          <div class="absolute bottom-0 left-0 p-6">
                            <h2 class="text-xl font-semibold 5 text-white">
                              The Decorated Ways
                            </h2>
                            <p class="text-base leading-4 text-white mt-2">
                              Dive into minimalism
                            </p>
                            <a
                              href="javascript:void(0)"
                              class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                            >
                              <p class="pr-2 text-sm font-medium leading-none">
                                Read More
                              </p>
                              <svg
                                class="fill-stroke"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.75 12.5L10.25 8L5.75 3.5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <img
                          src="https://i.ibb.co/3yvZBpm/img-5.png"
                          class="w-full"
                          alt="chair"
                        />
                      </div>
                      <div class="relative w-full sm:mt-0 mt-4">
                        <div>
                          <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                            12 April 2021
                          </p>
                          <div class="absolute bottom-0 left-0 p-6">
                            <h2 class="text-xl font-semibold 5 text-white">
                              The Decorated Ways
                            </h2>
                            <p class="text-base leading-4 text-white mt-2">
                              Dive into minimalism
                            </p>
                            <a
                              href="javascript:void(0)"
                              class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                            >
                              <p class="pr-2 text-sm font-medium leading-none">
                                Read More
                              </p>
                              <svg
                                class="fill-stroke"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.75 12.5L10.25 8L5.75 3.5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <img
                          src="https://i.ibb.co/gDdnJb5/img-6.png"
                          class="w-full"
                          alt="wall design"
                        />
                      </div>
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

export default Profile;
