import React from 'react';
import "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';

import "./footer.css"
function Footer(){
     return(
          <div className="container">
               <div className="footer">
               <Button><InstagramIcon className="item" /></Button>
               <Button><FacebookIcon className="item"/></Button>
               <Button><MailIcon className="item"/></Button>
               <Button><GitHubIcon className="item"/></Button>
          </div>
          </div>

     )
}

export default Footer;