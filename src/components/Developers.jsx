import React from "react";
import terminal from "../assets/terminal.png";

const Developers = () => {
  return (
    <div className="w-full text-[#E1E2E2] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 ">
        <div className='flex flex-col sm:flex-row m-auto gap-6 '>
          <div className="my-auto " >
            <h1>Superpowers for DEFI developers.</h1>
            <p>
              Checkout the <span className="text-[#00d8ff]">documentation</span>
              , the <span className="text-[#00d8ff]">quick start</span> or a
              guide below to integrate your project with thousands of tokens and
              billions of liquidity.
            </p>
          </div>
          <div className=" flex py-8 justify-center">
            <img
              className="max-w-[250px] shadow-lg shadow-cyan-500/50"
              src={terminal}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
