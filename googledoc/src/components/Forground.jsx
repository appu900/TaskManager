import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import ShiftDropdown from "./ShiftDropdown";
import ScheduleDropdown from "./ScheduleDropDown";
import axios from "axios";

export default function Forground() {
  const ref = useRef(null);
  //   const data = [
  //     {
  //       title: "DSA",
  //       desc: "Lorem ipsum dolor sit amet  consectetur adipisicing elit. Quo praesentium voluptate corrupti voluptatibus",
  //       footer: true,
  //       footercolor: "green",
  //     },
  //     {
  //       title: "Development",
  //       desc: "Lorem ipsum dolor sit amet  consectetur adipisicing elit. Quo praesentium voluptate corrupti voluptatibus",
  //       footer: true,
  //       footercolor: "blue",
  //     },
  //     {
  //       title: "system design",
  //       desc: "Lorem ipsum dolor sit amet  consectetur adipisicing elit. Quo praesentium voluptate corrup",
  //       footer: true,
  //       footercolor: "green",
  //     },
  //   ];

  const [data, setData] = React.useState([]);
  async function fetchData() {
    const response = await axios.get("http://localhost:5000/task");
    setData(response.data.allTasks);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full fixed z-[3] h-full flex gap-5 flex-wrap p-5 "
    >
      {data.map((item) => (
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
    </div>
  );
}
