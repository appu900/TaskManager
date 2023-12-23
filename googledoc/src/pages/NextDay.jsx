import React, { useEffect, useRef } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import ShiftDropdown from "../components/ShiftDropdown";
import ScheduleDropdown from "../components/ScheduleDropDown";
import axios from "axios";

export default function NextDay() {
  const ref = useRef(null);

  const [data, setData] = React.useState([]);
  async function fetchData() {
    const response = await axios.get("http://localhost:5000/task/nextday");
    console.log(response.data.tasks);
    setData(response.data.tasks);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full fixed z-[3] h-full flex gap-5 flex-wrap p-5 bg-[#18181B] "
    >
      {data?.map((item) => (
        <Card key={item.desc} data={item} referance={ref} />
      ))}

      <motion.div drag dragConstraints={ref} className="flex gap-5  ml-[30%]">
        <div drag dragConstraints={ref} className="">
          <ShiftDropdown />
        </div>
        <div drag dragConstraints={ref} className="">
          <ScheduleDropdown />
        </div>
      </motion.div>
      <div className="absolute top-[50%] left-[15%] opacity-20 text-4xl -z-40 font-bold text-zinc-200 ">
        <p>Hey, don't forget to complete the tasks pending from yesterday.</p>
      </div>
    </div>
  );
}
