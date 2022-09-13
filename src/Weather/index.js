/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Temp from "./Temp";
import "./index.css";
import { SUNNY } from "../assets/images";

export default function Index() {
  const [temp, setTemp] = useState(true);
  const [Precipitation, setPrecipitation] = useState(false);
  const [Wind, setWind] = useState(false);
  return (
    <div>
      <div className="d-flex mx-5 my-3">
        <img src={SUNNY} alt="image" width={80} height={100} />
        <h1 className="mx-3 my-3">43</h1>
        <h4>C</h4>
        <span>
          <CircleOutlinedIcon style={{ height: "10px", width: "10px" }} />
        </span>
        <h4>|F</h4>
        <span>
          <CircleOutlinedIcon style={{ height: "10px", width: "10px" }} />
        </span>
        <div className="mx-3">
          <p>Precipitation : 0%</p>
          <p>Humidity : 16%</p>
          <p>Wind : 8km/h</p>
        </div>
      </div>

      <div className="d-flex justify-content-start mx-5">
        <h3
          className={temp ? "bottomBrdr" : "mx-3"}
          onClick={() => {
            setTemp(true);
            setPrecipitation(false);
            setWind(false);
          }}
        >
          Temperature
        </h3>
        <h3
          className={Precipitation ? "bottomBrdr" : "mx-3"}
          onClick={() => {
            setTemp(false);
            setPrecipitation(true);
            setWind(false);
          }}
        >
          Precipitation
        </h3>
        <h3
          className={Wind ? "bottomBrdr" : "mx-3"}
          onClick={() => {
            setTemp(false);
            setPrecipitation(false);
            setWind(true);
          }}
        >
          Wind
        </h3>
      </div>
      {temp && <Temp />}
    </div>
  );
}
