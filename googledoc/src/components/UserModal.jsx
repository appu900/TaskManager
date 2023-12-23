import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoCreateSharp } from "react-icons/io5";
import { TextField, TextareaAutosize } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  borderRadius: "10px",

  // height:"400px"
};

export default function UserModal() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate);

  const [task, setTask] = React.useState({
    title: "",
    description: "",
    date: `${currentDate}`,
  });

  async function onCreateTask() {
    console.log(task);
    const response = await axios.post("http://localhost:5000/task", task);
    navigate('/loding')

  }
 
  return (
    <div className="rounded">
      <div className="flex items-center px-2 gap-1 mt-2 p-1 cursor-pointer hover:bg-indigo-100 hover:rounded-md hover:text-indigo-400">
        <span className="border">
          <IoCreateSharp />
        </span>
        <button
          className="text-xs font-semibold text-gray-800 hover:text-indigo-400  tracking-wide"
          onClick={handleOpen}
        >
          create a new One
        </button>
      </div>
      <Modal
        className="rounded"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="" sx={style}>
          <TextField
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="w-full rounded"
            type="text"
            label="title"
            variant="outlined"
          />
          <TextareaAutosize
            height="400px"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            label="description"
            className="border rounded p-4 mt-5 border-gray-700 w-full"
          />
          <button
            onClick={onCreateTask}
            className="w-full py-3 bg-indigo-700 rounded text-white font-semibold tracking-wide mt-8 active:bg-indigo-900"
          >
            Create Task
          </button>
        </Box>
      </Modal>
    </div>
  );
}
