import React from "react";
import arr from "./data";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { CLOUDY, SUNNY, RAINNY } from "../assets/images";

export default function Temp() {
  return (
    <>
      <div className="d-flex justify-content-between my-5 mx-5">
        {arr?.map((item) => (
          <div className="cardTemp">
            <p>{item?.days}</p>
            {item?.weather === "sunny" && (
              <img src={SUNNY} alt="img" width={130} height={100} />
            )}
            {item?.weather === "rainy" && (
              <img src={RAINNY} alt="img" width={130} height={100} />
            )}
            {item?.weather === "cloudy" && (
              <img src={CLOUDY} alt="img" width={130} height={100} />
            )}
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start">
                <p className="d-flex justify-content-start">{item?.highTemp}</p>
                <span className="d-flex justify-content-start mt-1">
                  <CircleOutlinedIcon
                    style={{ height: "10px", width: "10px" }}
                  />
                </span>
              </div>

              <div className="d-flex justify-content-end">
                <p className="d-flex justify-content-start">{item?.lowTemp}</p>
                <span className="d-flex justify-content-start mt-1">
                  <CircleOutlinedIcon
                    style={{ height: "10px", width: "10px" }}
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
