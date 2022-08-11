import React from "react";
import PropTypes from "prop-types";

const TempsAndTimes = (props) => {
  console.log(props);
  const roasterdata = props.roasterdata;
  const roastTime = `${roasterdata.roast_minutes}:${roasterdata.roast_seconds}`;
  // const timeSinceFC =
  // const devPerc = (timeSinceFC / roastTime)
  return (
    <div className="Temps-and-Times">
      <h3 className="Roast-Time" alt="Roast Time">
        Time: {roastTime}
      </h3>
      <h3 className="IR-Bean-Temp" alt="Infrared Bean Temperature">
        IR Bean Temp: {roasterdata.ir_bt}
      </h3>
      <h3 className="TC-Bean-Temp" alt="Thermocouple Bean Temperature">
        TC Bean Temp: {roasterdata.bean_temp}
      </h3>
      <h3 className="BT-ROR" alt="Bean Temperature Rate of Rise">
        BT-ROR: {roasterdata.bt_ror}
      </h3>
      <h3 className="Delta-T" alt="Delta Temperature">
        Delta-T: {roasterdata.delta_t}
      </h3>
      <h3 className="Dev-Percentage" alt="Development Percent">
        {/* Development: {roasterdata.devPerc} */}
      </h3>
      <h3 className="Time-Since-FC" alt="Time Since First Crack">
        {/* Time Since FC: {roasterdata.timeSinceFC} */}
      </h3>
      <section className="Extra-Info">
        <h4 className="Ext-Temp" alt="Exhaust Temperature">
          {/* Ext Temp: {roasterdata.ext_t} */}
        </h4>
      </section>
    </div>
  );
};

// TempsAndTimes.propTypes = {
//   roasttime: PropTypes.string.isRequired,
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string.isRequired,
//   liked: PropTypes.bool,
//   onLike: PropTypes.func,
// };

export default TempsAndTimes;