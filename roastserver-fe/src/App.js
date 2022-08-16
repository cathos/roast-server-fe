// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import TempsAndTimes from "./components/TempsAndTimes";
import RoasterButtons from "./components/RoasterButtons";
import NavBar from "./components/NavBar";
import useRoastData from "./hooks/useRoastData";
import useConnectionStatus from "./hooks/useConnectionStatus";
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
  //   async function checkConnection() {
  //     try {
  //       const result = await axios.get(`${backendAddr}`);
  //       console.log(result);
  //       return result.data;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

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
    // const config = {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // };
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
      console.log(`BLUBBLUB ${result.data}`);
      // if (result.data) {
      //   return result.data;
      // } else {
      //   return initialData;
      // }
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

  // async function getBulkRoastData() {
  //   try {
  //     const result = await axios
  //       .get(`${backendAddr}/bulkdata`)
  //       .then((response) => {
  //         console.log(`inside axios`, response.data);
  //         return response;
  //       })
  //       .catch((error) => {
  //         console.log(`BulkDataError ${error.response}`);
  //       });
  //     console.log(`BulkDataResult ${result.data}`);
  //     return result.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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

  // const connectionStatus = checkConnection();
  // initRoaster();
  // const roastData = useState(initialData, getRoasterStatus());
  // const roastData = getRoasterStatus();
  // const roastData = testData;

  // const [roastData, getRoastData] = useState(initialData);

  // const [bulkRoastData, getBulkData] = useState(testGraphData);

  // useEffect(() => {
  //   getRoastData(getRoasterStatus());
  //   console.log(`inside useEffect`, roastData);
  // }, []);

  // async function effectRoastData() {
  //   const result = await getRoasterStatus();
  //   getRoastData(result.data);
  //   console.log(`inside effectRoastData`, result.data);
  // }

  // useEffect(() => {
  //   // effectRoastData();
  //   (async () => {
  //     const result = await getRoasterStatus();
  //     const resultdata = await result.data;
  //     getRoastData(resultdata);
  //     console.log(`inside effectRoastData`, resultdata);
  //   })();

  //   return () => {};
  // }, [roastData.id]);

  // useEffect(() => {
  //   (async () => {
  //     const bulkRoastData2 = await getBulkRoastData();
  //     getBulkData(bulkRoastData2);
  //     // console.log(`inside useEffect`, bulkRoastData2);
  //   })();

  //   return () => {
  //     // this now gets called when the component unmounts
  //   };
  // }, []);

  // const [connectionStatus, checkConnection] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Roast Server</h1>
        <nav>
          <NavBar />
          {/* <button onClick={() => startDataRecording()}>
            Record Roast Data
          </button> */}
        </nav>
      </header>
      <main>
        {/* {roastData ? ( */}
        <TempsAndTimes
        // roasterdata={roastData}
        />
        {/* ) : null} */}
        <RoasterButtons
          // roasterdata={roastData}
          changeStateCallback={changeRoasterState}
        />
        <Graph></Graph>
      </main>
    </div>
  );
}

export { initialData, backendAddr };
export default App;
