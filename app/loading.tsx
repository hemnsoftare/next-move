import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div>
      <Image src={"newload.svg"} fill alt="loading" />
    </div>
  );
};

export default loading;
