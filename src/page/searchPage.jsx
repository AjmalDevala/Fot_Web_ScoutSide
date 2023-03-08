import React, { useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Search from "../components/Search";

function searchPage() {
  const scoutId = localStorage.getItem("scoutId");

  useEffect
  return (
    <div>
      <Navbar />
      <Search />
      <Footer/>
    </div>
  );
}

export default searchPage;
