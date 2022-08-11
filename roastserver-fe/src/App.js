// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import TempsAndTimes from "./components/TempsAndTimes";

const axios = require("axios");

// const backendAddr = "http://localhost:5000";
const backendAddr = "http://192.168.88.224:5000";

let initialData = {
  roast_minutes: 4,
};

const testData = {
  bean_temp: 25.7,
  bt_ror: -0.0,
  coil_fan_1_rpm: 840,
  coil_fan_2_rpm: 0,
  delta_t: 25.5,
  drum_speed_level: 0,
  ext_t: -65.2,
  fan_level: 0,
  fan_speed: 0,
  heater_level: 0,
  ir_bt: 30.9,
  pcb_temp: 27.5,
  preheat_temp: 2560,
  roast_minutes: 48,
  roast_seconds: 17,
  roaster_state: "off",
  voltage: 121,
};

function App() {
  async function checkConnection() {
    try {
      const result = await axios.get(`${backendAddr}`);
      console.log(result);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  }

  async function initRoaster() {
    try {
      const result = await axios.post(`${backendAddr}/init`, {
        init: "",
      });
      return result.status;
    } catch (err) {
      console.error(err);
      console.log("roaster connection not initialized");
    }
  }

  async function getRoasterInfo() {
    try {
      const result = await axios.get(`${backendAddr}/info`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  }

  // async function getRoasterStatus() {
  //   try {
  //     const result = await axios.get(`${backendAddr}/status`);
  //     console.log(result.data);
  //     return result.data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // rewrite this function to use non-async
  function getRoasterStatus() {
    axios
      .get(`${backendAddr}/status`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log("roasterStatus error: " + error.response);
      });
  }

  async function changeRoasterState(button) {
    try {
      const result = await axios.post(`${backendAddr}/change`, {
        button,
      });
      return result.data;
    } catch (err) {
      console.error(err);
    }
  }

  // const connectionStatus = checkConnection();
  // initRoaster();
  // const roastData = useState(initialData, getRoasterStatus());
  // const roastData = getRoasterStatus();
  // const roastData = testData;

  const [roastData, getRoastData] = useState([]);

  useEffect(() => {
    const roastData2 = getRoastData(getRoasterStatus());
    console.log(roastData2);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Roast Server </h1>
        <nav>{/* <div connection={connectionStatus}></div> */}</nav>
      </header>
      <main>
        <TempsAndTimes roasterdata={roastData}></TempsAndTimes>
      </main>
    </div>
  );
}

export default App;
