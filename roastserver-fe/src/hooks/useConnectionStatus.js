import React from "react";
import useSWR from "swr";
import fetcher from "../api/fetcher";
import { backendAddr } from "../App";

// const backendAddr = "http://192.168.88.224:5000";

function useConnectionStatus() {
  const { data, error } = useSWR(`${backendAddr}`, fetcher, {});

  return {
    connectionStatus: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useConnectionStatus;
