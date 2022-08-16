import React from "react";
import PropTypes from "prop-types";
import useRoastData from "../hooks/useRoastData";

const RoasterButtons = (props) => {
  const { roasterData, isLoading, isError } = useRoastData();
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  return (
    <ul>
      <h2>
        {/* {name} */}
        <button onClick={() => props.changeStateCallback("PRS")}>PRS</button>
        <span> {roasterData.roaster_state}</span>
      </h2>
      <h3>
        <button onClick={() => props.changeStateCallback("Heat-")}>-</button>
        <span> Heat: {roasterData.heater_level} </span>
        <button onClick={() => props.changeStateCallback("Heat+")}>+</button>
      </h3>
      <h3>
        <button onClick={() => props.changeStateCallback("Fan-")}>-</button>
        <span> Fan: {roasterData.fan_level} </span>
        <button onClick={() => props.changeStateCallback("Fan+")}>+</button>
      </h3>
    </ul>
  );
};

// RoasterButtons.propTypes = {
//   roasttime: PropTypes.string.isRequired,
// };

export default RoasterButtons;
