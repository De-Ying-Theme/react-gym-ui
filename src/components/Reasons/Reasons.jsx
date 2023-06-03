import React from "react";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Nb from "../../assets/nb.png";
import Adidas from "../../assets/adidas.png";
import Nike from "../../assets/nike.png";
import Tick from "../../assets/tick.png";

import "./Reasons.css";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>

        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={Tick} alt="" />
            <span>Over 140+ expert coachs</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>Train smarter and faster than before</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>1 Free program for new member</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>Reliable partners</span>
          </div>
        </div>

        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          Our Partners
        </span>

        <div className="partners">
          <img src={Nb} alt="" />
          <img src={Adidas} alt="" />
          <img src={Nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
