import React from "react";
// import PropTypes from "prop-types";
import useRoastData from "../hooks/useRoastData";

const TempsAndTimes = (props) => {
  console.log(props);
  // const CheckValidData = () => {
  //   if props.roasterdata.roast_minutes
  // }
  const { roasterData, isLoading, isError } = useRoastData();
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  console.log(roasterData);
  const roastTime = `${roasterData.roast_minutes}:${roasterData.roast_seconds}`;
  // const timeSinceFC =
  // const devPerc = (timeSinceFC / roastTime)
  return (
    <ul className="TempsAndTimes, fancy-text">
      <li className="Roast-Time" alt="Roast Time">
        Roast Time: {roastTime}
      </li>
      <li className="IR-Bean-Temp" alt="Infrared Bean Temperature">
        IR Bean Temp: {roasterData.ir_bt}
      </li>
      <li className="TC-Bean-Temp" alt="Thermocouple Bean Temperature">
        TC Bean Temp: {roasterData.bean_temp}
      </li>
      <li className="BT-ROR" alt="Bean Temperature Rate of Rise">
        BT-ROR: {roasterData.bt_ror}
      </li>
      <li className="Delta-T" alt="Delta Temperature">
        Delta-T: {roasterData.delta_t}
      </li>
      <li className="Dev-Percentage" alt="Development Percent" hidden>
        {/* Development: {roasterData.devPerc} */}
      </li>
      <li className="Time-Since-FC" alt="Time Since First Crack" hidden>
        {/* Time Since FC: {roasterData.timeSinceFC} */}
      </li>
      <section className="Extra-Info" hidden>
        <li className="Ext-Temp" alt="Exhaust Temperature">
          {/* Ext Temp: {roasterData.ext_t} */}
        </li>
      </section>
    </ul>
  );
};

// TempsAndTimes.propTypes = {
//   roasttime: PropTypes.string.isRequired,
// };

export default TempsAndTimes;
