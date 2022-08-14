import React from "react";
import PropTypes from "prop-types";

const RoasterButtons = (props) => {
  return (
    <ul>
      <h2>
        {/* {name} */}
        <button onClick={() => props.changeStateCallback("PRS")}>PRS</button>
        <span> {props.roasterdata.roaster_state}</span>
      </h2>
      <h3>
        <button onClick={() => props.changeStateCallback("Heat-")}>-</button>
        <span> Heat: {props.roasterdata.heater_level} </span>
        <button onClick={() => props.changeStateCallback("Heat+")}>+</button>
      </h3>
      <h3>
        <button onClick={() => props.changeStateCallback("Fan-")}>-</button>
        <span> Fan: {props.roasterdata.fan_level} </span>
        <button onClick={() => props.changeStateCallback("Fan+")}>+</button>
      </h3>
    </ul>
  );
};

// RoasterButtons.propTypes = {
//   roasttime: PropTypes.string.isRequired,
// };

export default RoasterButtons;
