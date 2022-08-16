import React from "react";
import useSWR from "swr";
import fetcher from "../api/fetcher";
import { backendAddr } from "../App";

// const backendAddr = "http://192.168.88.224:5000";

function useRoastData() {
  const { data, error } = useSWR(`${backendAddr}/status`, fetcher, {
    refreshInterval: 1000,
  });

  return {
    roasterData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useRoastData;
