import React from "react";
import PropTypes from "prop-types";

const TempsAndTimes = (props) => {
  return (
    <div className="Temps-and-Times">
      <h3 className="Roast-Time">Time:{props.roasttime}</h3>
      <h3 className="IR-Bean-Temp">{props.irbt}</h3>
      <h3 className="TC-Bean-Temp">{props.tcbt}</h3>
      <h3 className="BT-ROR">{props.btror}</h3>
      <h3 className="Delta-T">{props.deltat}</h3>
      <h3 className="Dev-Percentage">{props.devperc}</h3>
      <h3 className="Time-Since-FC">{props.timesincefc}</h3>
      <section className="Extra-Info">
        <h4 className="Ext-Temp">{props.exttemp}</h4>
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
