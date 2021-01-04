import React from "react";
import "@material-ui/core";
import { Button } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

function Navbar (){
     return (
          <div className="navbar">
               <Button><CodeIcon /></Button>
               <h1>D-Developer</h1>
               <div className="links">
               <ul className="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
               </ul>
               </div>

          </div>
     )
}

export default Navbar;