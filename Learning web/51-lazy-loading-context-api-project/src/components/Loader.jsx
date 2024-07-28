import React from "react";
import { Watch } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="rgb(59 130 246)"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
