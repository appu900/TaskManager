import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { CircularProgress, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Tomorrow = () => {
  const navigate = useNavigate();  
  const date = new Date();
  let day = date.getDate() + 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPendingData() {
    const response = await axios.get("http://localhost:5000/task/nextday");
    console.log(response.data.tasks);
    setData(response.data.tasks);
    console.log(data)
  }

  useEffect(() => {
    getPendingData();
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[200px] bg-[#F3f6f8] justify-center">
        <h1 className="text-3xl font-bold text-gray-700 pt-10">👋 Hi friend</h1>
        <p className="text-[#269289] text-3xl font-bold  capitalize ml-6 mt-[2px]">
        These are some pending tasks from today, and they have been added to tomorrow's tasks
        </p>
       <button
       onClick={()=>navigate('/tomorrow')}
       className=" ml-7 mt-5 bg-[#269289] px-4 py-3 rounded font-semibold text-white">
           check tomorrow's tasks
       </button>
      </div>

      <div className="px-10">
        {loading ? (
          <div className="mt-[20%] ml-[45%]">
            <CircularProgress color="success" />
          </div>
        ) : (
          <div className="mt-[140px]">
            {data?.map((item) => (
              <Card data={item} />
            ))}
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Tomorrow;
