import React from "react";
import AboutCard from "./AboutCard";
import data from "../data";

const About = () => {

    const cardElements = data.map(card =>{
        return (
            <AboutCard icon={card.icons} heading= {card.heading} text={card.text} />
        )
    })
   return(
    <div className="w-full bg-black text-[#E1E2E2] text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div classname="py-16">
          <div>
            <h1>A Growing Protocol Ecosystem</h1>
            <p className="py-10 text-xl">
                The Defi protocol system empowers developers, liquidity providers,
                and traders to participate in a financial marketplace that is open
                and accessible to all.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardElements}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
