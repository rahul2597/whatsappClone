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
import { IoIosAddCircleOutline } from "react-icons/io";
import Chating from "./Components/Chating";
import Conversationbox from "./Components/Conversationbox";

function App() {
  const [toggleform, setToggleForm] = useState(false);
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Naruto",
      mobile: 1234567890,
      content: "Hii naruto",
      profile:
        "https://m.media-amazon.com/images/I/81Lx3cD6HQL._AC_UF1000,1000_QL80_.jpg",
    },
  ]);

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };
  return (
    <>
      <div
        className="bg-[#00a884] h-36 p-1 pl-7 pr-7 bg-slate 200 absolute w-screen"
        style={{ zIndex: "-1" }}
      ></div>
      <div className="h-screen overflow-hidden flex p-5 ml-6 mr-6">
        <div className="w-1/3 overflow-hidden bg-slate-10  border-r">
          <Nav
            showForm={handleToggleForm}
            icon1={
              <IoPeopleSharp style={{ fontSize: "2rem", color: "Gray" }} />
            }
            icon2={<MdAddComment style={{ fontSize: "2rem", color: "Gray" }} />}
            icon3={<GoHistory style={{ fontSize: "2rem", color: "Gray" }} />}
          />
          <Textbox
            placeholder={"Search or start new chat"}
            icone4={<FaSearch className="absolute left-5 top-4" />}
          />
          <div className="h-4/5 overflow-y-auto scrollbar">
            {user.map((item) => (
              <div>
                <Chatbox key={item.id} data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-between h-full">
          <Nav
            name={"Itachi"}
            icon1={<FaSearch style={{ fontSize: "1.5rem", color: "Gray" }} />}
            icon2={
              <CiMenuKebab style={{ fontSize: "1.5rem", color: "Gray" }} />
            }
            icon3={<MdAddCall style={{ fontSize: "1.5rem", color: "Gray" }} />}
          />
          <Conversationbox />
          {toggleform && (
            <Chating setUserData={setUser} hideForm={handleToggleForm} />
          )}
          <Textbox
            className="item items-center"
            placeholder={"Type a message"}
            icone4={
              <CgSmileMouthOpen
                className="absolute left-5 top-3"
                style={{
                  fontSize: "2rem",
                  color: "gray",
                  fontWeight: "bolder",
                }}
              />
            }
            icone5={
              <IoIosAddCircleOutline
                style={{
                  fontSize: "2rem",
                  color: "Gray",
                  fontWeight: "36rem",
                }}
              />
            }
            icone6={
              <MdKeyboardVoice
                style={{
                  fontSize: "2rem",
                  color: "Gray",
                  fontWeight: "36rem",
                }}
              />
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
