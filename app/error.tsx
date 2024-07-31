"use client";
import React, { useEffect } from "react";
const ErrorComponent = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="dark:text-white m-6 ">Error: {error.message}</p>
      <button
        className="border-amber-400 border-4 py-2 px-6 transition-all duration-200 rounded-lg  hover:bg-amber-600 dark:text-white"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorComponent;
