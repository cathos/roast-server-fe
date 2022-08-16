import React from "react";
import useSWR from "swr";
import fetcher from "../api/fetcher";
import { backendAddr } from "../App";

// const backendAddr = "http://192.168.88.224:5000";

function useBulkRoastData() {
  const { data, error } = useSWR(`${backendAddr}/bulkdata`, fetcher, {
    refreshInterval: 5000,
  });

  return {
    roasterData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useBulkRoastData;
