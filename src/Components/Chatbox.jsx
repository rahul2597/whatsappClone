import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const Chatbox = ({ data }) => {
  return (
    <div className="relative bg-white">
      <div className="flex items-center ">
        <div className="bg-black rounded-full">
          {" "}
          <img
            className="h-12 w-12 rounded-full"
            src={data.profile}
            alt=""
          />{" "}
        </div>
        <div className="block ml-5 text-black">
          <h4 className="text-2xl">{data.name}</h4>
          <p>{data.content}</p>
        </div>
        <AiTwotoneDelete className="absolute right-5 text-3xl font-extrabold" />
        <hr className=" border-t-2 border-slate-500 absolute bottom-0 right-8 w-10/12" />
      </div>
    </div>
  );
};

export default Chatbox;
