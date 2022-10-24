import React from "react";

//created a footer below with the current year
function Footer() {

  const currentDate = new Date();
  const year = currentDate.getFullYear();

    return(
        <div>
          <p className="footer" >Created by Ansone {year}</p>
        </div>
    );
}

export default Footer;