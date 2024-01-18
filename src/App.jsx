import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Textbox from "./Components/Textbox";
import Chatbox from "./Components/Chatbox";
import { IoPeopleSharp } from "react-icons/io5";
import { MdAddComment } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex p-5 ">
        <div className="w-1/3 overflow-hidden bg-slate-800 border-r">
          <Nav
            icon1={
              <IoPeopleSharp style={{ fontSize: "2rem", color: "white" }} />
            }
            icon2={
              <MdAddComment style={{ fontSize: "2rem", color: "white" }} />
            }
            icon3={<GoHistory style={{ fontSize: "2rem", color: "white" }} />}
          />
          <Textbox
            placeholder={"Search or start new chat"}
            icone4={<FaSearch className="absolute left-5 top-4" />}
          />
          <div className="h-4/5 overflow-y-auto scrollbar">
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
          </div>
        </div>
        <div className="w-2/3 bg-slate-800 flex flex-col justify-between h-full">
          <Nav
            name={"Naruto"}
            icon1={<FaSearch style={{ fontSize: "1.5rem", color: "white" }} />}
            icon2={
              <CiMenuKebab style={{ fontSize: "1.5rem", color: "white" }} />
            }
            icon3={<MdAddCall style={{ fontSize: "1.5rem", color: "white" }} />}
          />
          <Textbox
            placeholder={"Type a message"}
            icone4={
              <CgSmileMouthOpen
                className="absolute left-5 top-3"
                style={{ fontSize: "1.5rem", color: "yellow" }}
              />
            }
            icone5={
              <MdKeyboardVoice style={{ fontSize: "2rem", color: "black" }} />
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
