import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import InputEmoji from "react-input-emoji";

function Chat() {

  const [connectedplayer, setConnectedplayer] = useState([]);
  const [count,setScoutCount]=useState("")
  const [message, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [read,setUnread]=useState('')
   
  const token = localStorage.getItem("token");
  const fullname = localStorage.getItem("fullname");
  const  scoutId  = localStorage.getItem("scoutId")
  const  userId = currentChat?._id
  const scrolRef = useRef();
  const socket = useRef();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const connectedPlayer = async () => {
      const { data } = await axios.post(
        "http://localhost:7007/api/admin/connectedUsers",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        });
      setConnectedplayer(data.connectedPlayers)
      setScoutCount(data.connectedPlayers.length);
    };
    connectedPlayer();
  }, []);

  const handleSelect = (user) => {
    setCurrentChat(user);
  };

  useEffect(() => {
    const getMessages = async (userId) => {
      const  scoutId  = localStorage.getItem("scoutId")
      const { data } = await axios.get(
        `http://localhost:7007/api/admin/getMessage/${scoutId}/${userId}`,);
      setMessages(data);
    };
    getMessages(currentChat._id);
  }, [currentChat._id]);


  const UnreadMsg =async()=>{
    const { data } = await axios.get(
      `http://localhost:7007/api/admin/scoutUnread/${scoutId}`
    )
    setUnread(data.count)
  }


  useEffect(() => {
    scrolRef.current.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    if (currentChat !== "") {
      socket.current = io("http://localhost:7007");
      socket.current.emit("addUser", scoutId);
      UnreadMsg();
    }
  }, [scoutId]);

  const sendmsg = async () => {
    const messages = {
      myself: true,
      message: inputMessage,
    };

    socket.current.emit("send-msg", {
      to: currentChat._id,
      message: inputMessage,
      type: "text",
    });

    let data = {
      to: currentChat._id,
      from: scoutId,
      message: inputMessage,
      type: "text",
    };

    await axios.post("http://localhost:7007/api/admin/sendMessage", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages(message.concat(messages));
    setInputMessage("")
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (data) => {
        setArrivalMessage({ myself: false, message:  data.message, type:data.type});
      });
    }
  }, [arrivalMessage]);

  useEffect(() => {
    arrivalMessage && setMessages((pre) => [...pre, arrivalMessage]);
  }, [arrivalMessage]);

  return (
    <div>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div className="flex flex-row items-center justify-center h-10 w-full">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                  className="w-6 h-6"
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
              <div className="ml-2 font-bold text-2xl">Chat</div>
            </div>
            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm font-semibold mt-2 online-dot">{currentChat.fullname} </div>
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Notificaion</span>
                <span className="flex items-center justify-center ml-1 bg-emerald-500 h-4 w-4 rounded-full">
                  {read}
                </span>
              </div>
              <div className="flex flex-row items-center mt-3">
                <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                  <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div className="leading-none ml-1 text-xs">Active</div>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {count}
                </span>
              </div>

              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {connectedplayer.map((player) => (
                  <button onClick={()=>handleSelect(player)} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      {player.fullname[0]}
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      {player.fullname}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    {message.map((msg) =>
                      msg.myself ? (
                        <div
                          key={msg._id}
                          className="col-start-6 col-end-13 p-3 rounded-lg"
                        >
                          <div className="flex items-center justify-start flex-row-reverse">
                            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                              {/* <div>{msg.message}</div> */}
                              {msg?.type === "video" ? (
                                <video src={msg.message} controls></video>
                                
                              ):
                              msg.type === "image" ? (
                                <img src={msg.message}></img>
                              ):
                              (
                                <span>{msg.message ? msg.message : ""}</span>
                              )}
                              {/* <span className="date">
                                {format(msg.createdAt)}
                              </span> */}
                              {/* <div>{msg.message}</div> */}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={msg._id}
                          className="col-start-1 col-end-8 p-3 rounded-lg"
                        >
                          <div className="flex flex-row items-center">
                            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                              {/* <div>{msg.message}</div> */}
                              {msg?.type === "video" ? (
                                <video src={msg.message} controls></video>
                                
                              ):
                              msg.type === "image" ? (
                                <img src={msg.message}></img>
                              ):
                              (
                                <span>{msg.message ? msg.message : ""}</span>
                              )}
                              {/* <span className="date">
                                {format(msg.createdAt)}
                              </span> */}
                              {/* <div>{msg.message}</div> */}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    <div ref={scrolRef} />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      onChange={(e) => setInputMessage(e.target.value)}
                      type="text"
                      value={inputMessage}
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <InputEmoji value={inputMessage} onChange={setInputMessage} />
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={sendmsg}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <spanv className=" ">Send</spanv>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform = rotate-45 -mt-px"
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
