import React, { useEffect, useRef, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { motion } from "framer-motion";
import ShiftDropdown from "./ShiftDropdown";
import ScheduleDropdown from "./ScheduleDropDown";
import axios from "axios";
import ShiftPopup from "./ShiftPopup";
import { useLocation, useNavigate } from "react-router-dom";

export default function Card({ data, referance }) {
  const [pendingPage, setPendingPage] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  

  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);
  const handleComplete = async () => {
    const response = await axios.put(`http://localhost:5000/task/${data._id}`);
    setComplete(!complete);
  };

  function dayAfterTommowrowDate() {
    const date = new Date();
    let day = date.getDate() + 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    console.log(currentDate);
    return currentDate;
  }

  async function shiftTask() {
    const response = await axios.put(
      `http://localhost:5000/task/shift/${data._id}`,
      {
        date: dayAfterTommowrowDate(),
      }
    );
    navigate("/loding");
    console.log(response);
  }

  useEffect(() => {
    setComplete(data.status);
    if (pathName === "/nextday") {
      setPendingPage(true);
    }
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={referance}
      whileDrag={{ scaleX: 1.2 }}
      className="w-60 h-64 bg-zinc-200    rounded-[30px] py-10 px-8 relative overflow-hidden "
    >
      <div className="flex itmes-center gap-4">
        <FaRegFileAlt className="text-xl mt-1" />
        <h1 className="text-[15px] font-bold uppercase ">{data.title}</h1>
      </div>
      <p className="text-sm mt-5 font-semibold leading-tight ">
        {data.description}
      </p>
      {pendingPage ? (
        ""
      ) : (
        <div
          className={`footer  absolute bottom-0 h-10 ${
            data.footercolor === "green" ? "bg-green-600" : "bg-blue-600"
          } w-full left-0 px-0  `}
        >
          <div className="flex items-center justify-between mb-3  px-8 mt-1">
            <h5
              onClick={shiftTask}
              className="font-semibold text-xs   p-1 uppercase cursor-pointer  text-white"
            >
              {/* <ShiftPopup data={data} /> */} shift to tomorrow
            </h5>
            <span className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
              <MdFileDownloadDone
                onClick={handleComplete}
                className="cursor-pointer text-xl font-bold"
                size=".7em"
              />
            </span>
          </div>
        </div>
      )}

      {/* popup shift task popup window */}
      {/* <ShiftPopup data={data} /> */}

      {/* hover div */}
      {complete && (
        <div className="absolute w-full h-full bg-zinc-900 top-0 left-0 opacity-80">
          <div className="w-full h-full  justify-evenly flex ">
            <span className="mt-[50%]  text-green-600 text-6xl">
              <MdFileDownloadDone />
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
