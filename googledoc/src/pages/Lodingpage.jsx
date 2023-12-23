import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Forground from "../components/Forground";
import { CircularProgress, Skeleton } from "@mui/material";

export default function Lodingpage() {
  const navigate = useNavigate();
    useEffect(()=>{
      setTimeout(()=>{
        navigate('/')
      },500)
    },[])

  return (
    <div className="w-full h-screen bg-zinc-900 flex justify-evenly">
      <div className="mt-[20%]">
        <CircularProgress color="success" />
      </div>
    </div>
  );
}
