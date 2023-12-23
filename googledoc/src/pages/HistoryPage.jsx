import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoryPage = () => {
  const [history, setHistory] =useState([]);
  const fetchMostRecentHistory = async() =>{
      const response = await axios.get("http://localhost:5000/task/history");
      console.log(response.data.tasks);
      setHistory(response.data.tasks);
  }


 useEffect(()=>{
      fetchMostRecentHistory();

 },[])

  return (
    <div className="w-full grid grid-cols-2 px-10">
      {/* for history section
      it will show the history of the recent 5 days of tasks
      
      */}
       <div className="">

        {
          history.map((task)=>(
            <div className="flex flex-row justify-between">
              <div className="flex gap-8 bg-white shadow-2xl border mt-10">
                <div className="text-gray-900 text-xl font-semibold">{task.date}</div>
                <div className="text-gray-900 text-xl font-semibold">{task.title}</div>
              </div>
              <div className="text-gray-400 text-sm">{task.task}</div>
            </div>
          ))
        }

       </div>
      {/* for frequency section */}
      <div>

      </div>
    </div>
  );
};

export default HistoryPage;
