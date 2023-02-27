import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Search from "../components/Search";

function searchPage() {
  const scoutId = localStorage.getItem("scoutId");

  useEffect
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  );
}

export default searchPage;
