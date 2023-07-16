"use client"
import {AiOutlineClose} from "react-icons/ai"
import {GoPaperAirplane} from "react-icons/go"
import { useState } from "react"

export type ButtonClickHandler = () => void;

interface ChatBotProps {
    onExit: ButtonClickHandler;
  }
const ChatBot: React.FC<ChatBotProps>= ({onExit}) => {
    const [chatHistory, setChatHistory] = useState([{sender:"bot", message:"Hello! What would you like to know!"}, {sender:"user", message:"Just a lil somethin."}])
    const [message, setMessage] = useState("")
    const addMessage = (text:string, sender:string) => {
        setChatHistory([...chatHistory, {sender: sender, message:text}])
        setMessage("")
        fetch("http://127.0.0.1:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({"message":text})
        }).then((response) => 
            console.log(response)
        ).catch(error => console.log(error))
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setMessage(newValue)
    }
    const handleExit = () => {
        onExit()
    }
    return (
    <div className={"relative h-full"}>
        <button className={"w-full justify-end"} onClick={handleExit}>
            <AiOutlineClose className="h-5 w-5 fill-black"/>
        </button>
        <div className="flex flex-col w-full">
            {chatHistory.map((chat, index) => (
                <div key={index} className={`${chat.sender=="bot" ? "bg-light-pastel-green self-start" : "bg-gray self-end"} text-black z-40 m-2 p-2.5  min-w-0 max-w-5/6 drop-shadow-sm rounded-2xl`}>{chat.message}</div>
            ))}
        </div>
        <div className="flex flex-row w-full bottom-0 absolute items-center rounded-lg border-2 border-light-pastel-green">
            <input className=" p-2 w-5/6 text-black focus:outline-none" value={message} onChange={handleChange} placeholder="Message"></input>
            <button onClick={() => addMessage(message, "user")}>
                <GoPaperAirplane className="fill-light-pastel-green h-5 w-5 m-4 "/>
            </button>
        </div>
        
    </div>)
}

export default ChatBot