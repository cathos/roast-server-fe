import React from "react";
// import PropTypes from "prop-types";
import useConnectionStatus from "../hooks/useConnectionStatus";

const NavBar = (props) => {
  let connection = "Roaster Not Connected";
  const { connectionStatus, isLoading, isError } = useConnectionStatus();
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  if (connectionStatus) {
    connection = "Roaster Connected";
  }
  return (
    <ul className="NavBar">
      <li className="Connection_Status" alt="Connection Status">
        {connection}
      </li>
    </ul>
  );
};

export default NavBar;
