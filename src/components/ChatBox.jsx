"use client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL); // backend URL

export default function ChatBox({openModal, handleModal}) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");
  const messagesRef = useRef(null);

  // Assign username (localStorage)
  useEffect(() => {
    let storedName = localStorage.getItem("chatUserName");
    if (!storedName) {
      storedName = "user_" + Math.floor(Math.random() * 10**8).toString(36);
      localStorage.setItem("chatUserName", storedName);
    }
    setUserName(storedName);
  }, []);

    useEffect(() => {
      socket.on("newMessageForAdmin", (msg) => {
        if(msg.sessionId === userName)setMessages((prev) => [msg, ...prev]); //********temporary fix */
        scrollToBottom();
      }
      );
      return () => {
        socket.off("newMessageForAdmin");
      };
    }, []);

  // Connect to backend & load messages
  useEffect(() => {
    if (!userName) return;

    socket.emit("register", userName);
    socket.emit("loadUserMessages", userName);

    socket.on("chatHistory", (msgs) => setMessages(msgs));
    
    socket.on("chatMessage", (msg) => {
      setMessages((prev) => [msg, ...prev]);
    });

        socket.on("messageFromAdmin", (msg) => {
      setMessages((prev) => [msg, ...prev]);
    });

    return () => {
      socket.off("chatHistory");
      socket.off("chatMessage");
      socket.off("messageFromAdmin");
    };
  }, [userName]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    socket.emit("chatMessage", { sessionId: userName, text: text });
    setText("");
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, 100);
  };

  return (
    <div
  className={`${openModal? 'block scale-100' : 'hidden scale-0'} fixed bottom-12  md:bottom-0 md:top-auto md:right-0 z-200 grid md:h-1/2 w-screen h-96 md:w-1/4 md:bg-none transition md:p-8`}
>
    <div className="mx-auto w-full shadow-sm z-300 flex flex-col justify-between  bg-white shadow-xl rounded-sm md:ml-auto border-t border-neutral-200 ">
        <div className="flex justify-between items-start bg-white text-neutral-700 w-full shadow-md p-4">
          <div className="block">
          <h1 className="text-lg font-semibold">Maria Concepts</h1>
            <div className="text-sm opacity-80 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span>
              Online
              </span>
              </div>
          </div>
            <button className="hover:bg-neutral-200 rounded-full text-4xl text-center transition"
                onClick={handleModal}
            >
            <svg className="m-2" width="0.75em" height="0.75em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="#000000" d="M6.5 8.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V9.584l-3.732 3.733a.45.45 0 1 1-.636-.636L5.413 8.95H2.5a.449.449 0 1 1 0-.9zm6.182-6.368a.45.45 0 0 1 .637.636L9.586 6.05H12.5a.45.45 0 0 1 0 .9h-4l-.09-.01a.45.45 0 0 1-.36-.44v-4a.45.45 0 0 1 .9 0v2.914z"/></svg>  
            </button>
        </div>
          {messages.length === 0?
        <div className=" text-md text-left p-4 self-start">
          <p className="my-6 px-6 py-2 w-full block bg-primary-300 text-neutral rounded-e-full rounded-es-full">How can we assist you?</p>
        </div> 
        :
        
                <div ref={messagesRef} className="flex flex-col-reverse w-full h-64 overflow-y-auto pb-4  gap-y-6 p-4">


          {messages.map((msg, i) => (
<div key={i} className={`max-w-3/4 ${msg.isAdmin? 'text-left mr-auto' : 'text-right ml-auto' }`}>
    <span className="text-xs font-normal text-neutral-400 mx-2">{new Date(msg.createdAt).toLocaleTimeString( 'en-IN',
      { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
}
    )}</span>
   <div className={`shadow-lg md:py-3 py-2 px-4 text-left ${msg.isAdmin? 'rounded-e-full rounded-es-full bg-amber-100 text-neutral-600' :'rounded-s-full rounded-se-full bg-amber-200 text-neutral-600'}`}>
      {msg.text}
   </div>
</div>
            
          ))}
        </div>
        }


      <form onSubmit={sendMessage} className="block w-full flex justify-between p-4 bg-white">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-neutral-200 rounded-full p-3 px-6 text-neutral-900 foxus:ring-1"
            />
          <button className="bg-none text-neutral-600 hover:text-neutral:500 transition px-4 rounded-s-full rounded-se-full cursor-pointer">
            <svg width="2.286em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="currentColor" d="m0 0l8 3.5L0 7l1-3q5-.5 0-1"/></svg>
          </button>
        </form>
    </div>
            </div>
  );
}