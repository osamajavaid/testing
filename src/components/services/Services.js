import React from "react";
import "./styling/services.css";
import Cards from "../cards/Cards";
import heart from "../../img/heartemoji.png";
import developer from "../../img/glasses.png";
import uiux from "../../img/humble.png";
import resume from '../../resume.pdf'

const Services = () => {
  return (
    <div className="services">
      {/* left side       */}
      <div className="awesome">
        <span>MY Awesome</span> 
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Tenetur voluptates rerum alias, temporibus corrupti laboriosam!
        </span>
        {/* <div> */}
        <a href={resume} download>
            <button className="button s-button">Download CV</button>
        </a>
        {/* </div> */}
        <div className="blur s-blur1" style={{backgroundColor:'#abf1ff94'}}></div>
      </div>

      {/* rightside */}
      <div className="card">
        <div style={{ left: "14rem" }}>
          <Cards
            emoji={heart}
            heading={"Design"}
            detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit"}
          />
        </div>
        <div style={{top:'12rem', left: "-4rem" }}>
          <Cards
            emoji={developer}
            heading={"Developer"}
            detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit"}
          />
        </div>
        <div style={{top:'19rem', left: "12rem" }}>
          <Cards
            emoji={uiux}
            heading={"UI/UX"}
            detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit"}
          />
        </div>
        <div className="blur s-blur2" style={{backgroundColor:'var(--purple)'}}></div>
      </div>
    </div>
  );
};

export default Services;
