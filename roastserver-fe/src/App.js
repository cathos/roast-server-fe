import "./App.css";
import React, { useState, useEffect } from "react";
// import useSWR from "swr";
import TempsAndTimes from "./components/TempsAndTimes";
import RoasterButtons from "./components/RoasterButtons";
// import NavBar from "./components/NavBar";
// import useRoastData from "./hooks/useRoastData";
// import useConnectionStatus from "./hooks/useConnectionStatus";
import Graph from "./components/Graph";

const axios = require("axios");

// const backendAddr = "http://localhost:5000";
const backendAddr = "http://192.168.88.224:5000";

let initialData = {
  roast_minutes: -0,
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
  roast_minutes: 0,
  roast_seconds: 17,
  roaster_state: "off",
  voltage: 121,
};

const testGraphData = { testData };

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

  async function getRoasterStatus() {
    try {
      const result = await axios
        .get(`${backendAddr}/status`)
        .then((response) => {
          console.log(`inside axios`, response.data);
          return response;
        })
        .catch((error) => {
          console.log(`BLARGH ${error.response}`);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function startDataRecording() {
    try {
      const result = await axios.post(`${backendAddr}/record/start`, {
        start: "",
      });
      return result.status;
    } catch (err) {
      console.error(err);
    }
  }

  function changeRoasterState(button) {
    const config = { request: button };
    axios
      .post(`${backendAddr}/change`, config)
      .then((response) => {
        console.log(`inside axios`, response.data);
        return response;
      })
      .catch((error) => {
        console.log(`BLARGH ${JSON.stringify(error.response)}`);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1 className="Title">Roast Server</h1>
          <div class="controls-and-feedback">
            <RoasterButtons changeStateCallback={changeRoasterState} />
            <TempsAndTimes />
          </div>
        </nav>
      </header>
      <main>
        <Graph></Graph>
      </main>
    </div>
  );
}

export { initialData, backendAddr };
export default App;
