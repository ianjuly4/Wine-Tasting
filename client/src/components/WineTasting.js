import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import Filter from "./Filter";

function WineTasting() {
  return(
    <div className="WineTasting">
      <Header/>
      <Filter/>
    </div>
  )
}

export default WineTasting;
