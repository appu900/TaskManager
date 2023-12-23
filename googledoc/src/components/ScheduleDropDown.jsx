import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { FaHistory } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const ScheduleDropdown = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function doAmessage() {
    navigate('/')
  }

  function taskFromTomorrow() {
    navigate('/tomorrow')
  }
  

  async function fetchTasksForToday(){
    try {

      
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className=" flex items-center justify-center  overflow-visible">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-green-500 hover:bg-green-500 transition-colors"
        >
          <span className="font-medium tracking-wider text-sm">Schedules</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          {/* <Option setOpen={setOpen} Icon={FiEdit} text="Edit" /> */}
          <Option
            fn={doAmessage}
            setOpen={setOpen}
            Icon={SlCalender}
            text="today"
          />

          <Option setOpen={setOpen} Icon={SlCalender} fn={taskFromTomorrow} text="tomorrow" />
       
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, fn }) => {
  return (
    <motion.li
      onClick={fn}
      variants={itemVariants}
      // onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default ScheduleDropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
