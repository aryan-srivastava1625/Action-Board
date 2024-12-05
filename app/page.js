"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle(""); // Reset title input field
    setdesc("");  // Reset desc input field
    console.log(mainTask);
  };


  const deleteHandler =(i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task is here</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className='flex items-center justify-between mb-8' key={i}> {/* Add a unique key here */}
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} className="bg-black text-white 
          px-4 py-2 rounded font-bold">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Aryan's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Make Your List"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Tasks
        </button>
      </form>
      <hr />
      <div className="p-8 bg-red-400">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
