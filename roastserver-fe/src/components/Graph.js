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
import useBulkRoastData from "../hooks/useBulkRoastData";
import PropTypes from "prop-types";

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

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export const data = {
  labels,
  datasets: [
    {
      label: "Bean Temp",
      data: [],
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),÷
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "IR Bean Temp",
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Graph = (props) => {
  const { roasterData, isLoading, isError } = useRoastData();
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  const roastTime = `${roasterData.roast_minutes}:${roasterData.roast_seconds}`;
  data.datasets[0].data = { roastTime: roasterData.bean_temp };
  // .map(
  //   ({ bean_temp, roast_minutes, roast_seconds }) => {
  //     const roastTime = `${roast_minutes}:${roast_seconds}`;
  //     return { bean_temp, roastTime };
  //   }
  // );
  console.log(data.datasets[0].data[0]);
  return <Line options={options} data={data} />;
};

export default Graph;
