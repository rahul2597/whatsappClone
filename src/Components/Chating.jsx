import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";

const Chating = ({ hideForm, setUserData }) => {
  let [name, setName] = useState("");
  let [content, setContent] = useState("");
  let [phone, setPhone] = useState("");

  function handleSubmit() {
    if (name) {
      let newObj = { id: Date.now(), name, content, mobile: phone };
      setUserData((prev) => [...prev, newObj]);
      setName("");
      setPhone("");
      setContent("");
    }
  }

  return (
    <>
      <div className="bg-slate-300 w-1/4 rounded-md text-center text-2xl font-semibold pt-2 border-2 border-black absolute top-1/3 left-1/2 ">
        <button onClick={hideForm}>
          <MdOutlineCancel className="font-medium absolute top-0 right-0 text-3xl" />
        </button>
        <FaRegImage className="font-medium absolute bottom-0 left-0 text-4xl pl-2" />
        ADD-DATA
        <form action="">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 mb-2 border-2 border-black rounded-xl font-medium text-nm w-9/12 text-center"
            type="text"
            placeholder="Enter The Name"
            required
          />
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-2 border-2 border-black rounded-xl font-medium text-nm w-9/12 text-center"
            type="text"
            placeholder="Enter Content"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-2 border-2 border-black rounded-xl font-medium text-nm w-9/12 text-center"
            type="text"
            placeholder="Enter mobile No"
          />
        </form>
        <button
          onClick={handleSubmit}
          className=" mt-4 mb-2 border-2 bg-green-500 rounded-xl border-black"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Chating;
