import React, { useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Search from "../components/Search";

function SearchPage() {
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

export default SearchPage;
