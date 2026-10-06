import { FaRibbon } from "react-icons/fa"
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { MdOutlineHorizontalSplit } from "react-icons/md";
import { useState } from "react";

const TeamHeading = ({ action, setAction, grid, setGrid }) => {


  return (
    <div className="flex justify-between items-start">

      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-green-700 text-white flex justify-center items-center rounded-md"><FaRibbon /></div>
        <div className="-mt-2">
          <h1 className="text-lg font-semibold">Team Members</h1>
          <p className="text-xs text-gray-700">Real Estate Department</p>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5">
          <button onClick={()=> setGrid(false)}>
            <TfiLayoutGrid2Alt size={18} className={`${!grid ? "bg-green-700 text-white" : "text-green-700 bg-transparent" } w-8 h-8  p-1.5  hover:bg-gray-300 transition cursor-pointer`} />
          </button>
          <button onClick={() => setGrid(true)}>
            <MdOutlineHorizontalSplit size={25} className={`${grid ? "bg-green-700 text-white" : "text-green-700 bg-transparent"} w-8 h-8  p-1  hover:bg-gray-300 transition cursor-pointer`} />
          </button>
        </div>

        <div className="border-2 border-green-700 rounded-full relative overflow-hidden font-semibold">
          <span className={`${action ? "translate-x-0" : "translate-x-19"} w-19 h-full bg-green-700 absolute -z-3 transition transform`}></span>
          <button onClick={() => { setAction(true) }} className={`${action && "text-white"} p-1.5 cursor-pointer`}>All Team</button>
          <button onClick={() => setAction(false)} className={`${!action && "text-white"} p-1.5 cursor-pointer`}>My Team</button>
        </div>
      </div>
    </div>
  )
}

export default TeamHeading
