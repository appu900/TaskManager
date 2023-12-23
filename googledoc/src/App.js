import React from "react";
import Backgroud from "./components/Backgroud";
import Forground from "./components/Forground";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Lodingpage from "./pages/Lodingpage";
import Tomorrow from "./pages/Tomorrow";
import NextDay from "./pages/NextDay";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loding" element={<Lodingpage />} />
        <Route path="/nextday" element={<Tomorrow />} />
        <Route path="/tomorrow" element={<NextDay />} />
        <Route path="/history" element={<HistoryPage />} />

      </Routes>
    </div>
  );
}

export default App;
