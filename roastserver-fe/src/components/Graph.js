import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";
import useRoastData from "../hooks/useRoastData";
// import useBulkRoastData from "../hooks/useBulkRoastData";
// import PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      min: 0,
      max: 20,
    },
    y: {
      min: 0,
      max: 300,
    },
    yd: {
      min: 0,
      max: 30,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

// const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export const data = {
  // labels,
  datasets: [
    {
      label: "Bean Temp",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "IR Bean Temp",
      borderColor: "rgb(200, 162, 200)",
      backgroundColor: "rgba(200, 162, 200, 0.5)",
    },
  ],
};

const Graph = (props) => {
  const { roasterData, isLoading, isError } = useRoastData();
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  const roastTime = `${roasterData.roast_minutes}:${roasterData.roast_seconds}`;
  data.datasets[0].data = [{ x: roastTime, y: roasterData.bean_temp }];
  data.datasets[1].data = [{ x: roastTime, y: roasterData.ir_bt }];

  return (
    <div class="graph-container">
      <Line options={options} data={data} />
    </div>
  );
};

export default Graph;
