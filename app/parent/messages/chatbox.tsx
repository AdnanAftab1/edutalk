"use client"

import { useState } from "react"

export default function Chatbox() {

    const [messages, setMessages] = useState([
        { text: "Hello, how are you?", isSender: true },
        { text: "I am fine", isSender: false }
    ]);

    const [input, setInput] = useState("") ;

    function handleSend() {
        if (input.trim() === "") return;

        setMessages(prev => [...prev, { text: input, isSender: true }]);

        setInput(""); 
    }

    return (
        <div className="w-1/2 m-3 relative p-3 border-2 border-gray-400/40 h-[80vh] rounded-2xl">
            <p className="text-xl text-center">Mariana Gomes</p>

            {/* Messages list */}
            <div className="overflow-y-scroll max-h-120">
                {messages.map((msg, index) => (
                    <Chatbubble 
                        key={index}
                        text={msg.text}
                        isSender={msg.isSender}
                    />
                ))}
            </div>

            {/* Input area */}
            <div className="absolute left-9 bottom-5 w-full flex flex-row">
                <textarea
                    className="w-[85%] max-h-20 bg-gradient-to-r from-slate-600 to-slate-400 rounded-xl p-2"
                    value={input}
                    onChange={(e) => {
                        console.log(e.currentTarget.value);
                        setInput(e.currentTarget.value);
                    }}
                    
                    rows={2}
                />

                <svg
                    onClick={handleSend}
                    className="rounded-full border-2 border-white ml-4 mt-2 hover:invert bg-black duration:1000 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#FFFFFF"
                >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
            </div>
        </div>
    )
}


function Chatbubble({text,isSender}:{text:string,isSender:boolean}){ 
    if(isSender)
    {
        return (
            <div className=" my-2 flex w-full justify-start animate-fade-left">
        <div className="max-w-[80%] flex w-fit font-['Inter'] font-semibold rounded-lg rounded-tl-none  bg-gradient-to-r from-amber-600 to-amber-400 p-2 text-wrap h-min">
            {text}
        </div>
        </div>
    )
    }
    else{
         return (
            <div className=" my-2 flex w-full justify-end animate-fade-right ">
        <div className="max-w-[80%] flex w-fit font-['Inter'] border-2 border-slate-500/50 font-semibold rounded-lg  bg-gradient-to-r bg-clip-text text-transparent rounded-tr-none from-amber-600 to-amber-400 p-2 text-wrap h-min">
            {text}
        </div>
        </div>
         )
    }
}