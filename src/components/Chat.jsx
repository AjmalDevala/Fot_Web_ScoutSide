import axios from "axios";
import React, { useEffect, useState } from "react";

  // const [connections, setConnections] = useState([]);
  // const [message, setMessage] = useState([]);
  // const [inputMessage, setInputMessage] = useState("");
  // const [arrivalMessage, setArrivalMessage] = useState(null);

  // const token = localStorage.getItem('token')
  // const {userId} = jwtDecode(token)
  // const { chatUser } = useSelector((state) => state.currentChat);
  // const scrolRef = useRef();
  // const socket = useRef();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const getConnections = async () => {
  //     const { data } = await axios.get("/api/user/getConnections", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setConnections(data.connections);
  //   };
  //   getConnections();
  // }, []);

  // useEffect(() => {
  //   const fetchMessages = async (user) => {
  //     if (user) {
  //       const token = localStorage.getItem("token");
  //       const { data } = await axios.get(`/api/user/getMessages?to=${user}`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setMessage(data);
  //     }
  //   };
  //   fetchMessages(chatUser._id);
  // }, []);

  // useEffect(() => {
  //   scrolRef.current.scrollIntoView({ behavior: "smooth" });
  // });

  // const handleSelect = (user) => {
  //   dispatch(setChatUser(user))
  // };

  // useEffect(() => {
  //   if (chatUser !== "") {
  //     socket.current = io(import.meta.env.VITE_SERVER_DOMAIN);
  //     socket.current.emit("addUser", userId);
  //   }
  // }, [userId]);

  //   const messages = {
  //     myself: true,
  //     message: inputMessage,
  //   };

  //   socket.current.emit("send-msg", {
  //     to: chatUser._id,
  //     message: inputMessage,
  //   });

    // let token = localStorage.getItem("token");
    // let data = {
    //   to: token,
        // chatUser._id,
      // message}

    // await axios.post("/api/user/sendMessage", {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    // setMessage(message.concat(messages));
  

  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on("msg-receive", (msg) => {
  //       setArrivalMessage({ myself: false, message: msg });
  //     });
  //   }
  // }, [arrivalMessage]);

  // useEffect(() => {
  //   arrivalMessage && setMessage((pre) => [...pre, arrivalMessage]);
  // }, [arrivalMessage]);

function Chat() {
  return (
      <div>
        <div class="flex h-screen antialiased text-gray-800">
          <div class="flex flex-row h-full w-full overflow-x-hidden">
            <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
              <div class="flex flex-row items-center justify-center h-12 w-full">
                
                
                <div class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </div>
                
                <div class="ml-2 font-bold text-2xl">Chat</div>
              </div>
              <div class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
                <div class="h-20 w-20 rounded-full border overflow-hidden">
                  <img
                    src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                    alt="Avatar"
                    class="h-full w-full"
                  />
                </div>
                <div class="text-sm font-semibold mt-2">Players </div>
                <div class="text-xs text-gray-500"></div>
                <div class="flex flex-row items-center mt-3">
                  <div class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                    <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                  </div>
                  <div class="leading-none ml-1 text-xs">Active</div>
                </div>
              </div>
              <div class="flex flex-col mt-8">
                <div class="flex flex-row items-center justify-between text-xs">
                  <span class="font-bold">Active Conversations</span>
                  <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                    
                  </span>
                </div>
               
                
              </div>
            </div>
            <div class="flex flex-col flex-auto h-full p-6">
              <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                <div class="flex flex-col h-full overflow-x-auto mb-4">
                  <div class="flex flex-col h-full">

                    
                  </div>
                </div>
                <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                  <div>
                    <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">

                    </button>
                  </div>
                  <div class="flex-grow ml-4">
                    <div class="relative w-full">
                      <input
                      onChange={(e) => setInputMessage(e.target.value)}
                        type="text"
                        class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      />
                      <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      </button>
                    </div>
                  </div>
                  <div class="ml-4">
                    <button  onClick={""} class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                      <span>Send</span>
                      <span class="ml-2">
                        <svg
                          class="w-4 h-4 transform rotate-45 -mt-px"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Chat;
