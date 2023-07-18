"use client"
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import {BsChatFill} from "react-icons/bs";
import { useState } from "react";
import ChatBot from '@/components/ChatBot';
import {ButtonClickHandler} from "@/components/ChatBot"

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const handleChatBotExit: ButtonClickHandler = () => {
    toggleShowSidebar(); // Toggle the sidebar when the chat bot is exited
  };
  return (
    <main className="flex min-h-screen w-full flex-col items-center lg:justify-between p-16 lg:p-32">
      {showSidebar && 
        <div className=" fixed lg:w-1/4 self-center h-5/6 lg:right-10 bg-white z-30 rounded-lg drop-shadow-md ">
          <div className="w-full h-full p-2 ">
            <ChatBot onExit={handleChatBotExit}></ChatBot>
          </div>
        </div>}
      {!showSidebar && <button className="fixed right-10 bottom-10 bg-light-pastel-green p-5 rounded-full drop-shadow-md">
        <BsChatFill onClick={toggleShowSidebar} className=" fill-white h-10 w-10"/>
      </button>}
      
      <div className="z-10 w-full justify-between font-mono flex-col lg:flex">
        <p className="pl-20 pt-20 text-5xl">
          Hi! I'm Finn, and I'm a 
        </p>
        <p className="pl-20 pt-5 pb-20 text-8xl">
          <strong>Software Engineer</strong>
        </p>
        <div className="">
          <section id="Education" className="py-5">
            <Education/>
          </section>        
          <section id="Experience" className="py-5">
            <Experience/>
          </section>        
          <section id="Skills" className="py-5">
            <Skills/>
          </section>
          <section id="Projects" className="py-5">
            {/* <Projects/> */}
          </section>
        </div>
      </div>
    </main>
  )
}
