import React from 'react';
import { ArrowRight } from 'lucide-react';

const page = () => {
  return (
    <div className="bg-emerald-950 h-screen z-0 w-screen ">
      <div className="flex justify-between items-center h-full w-full px-20 relative">
        <div className="flex flex-col text-left max-w-xl ">
          <h2 className="text-8xl font-bold mb-4 text-white ">
            SUSTAINABLE LIVING SIMPLIFIED
          </h2>
          <p className="text-lg text-white">
            Foundation® merges expert insight with cutting-edge technology to
            redefine investment property financing – making it smarter, faster,
            and more efficient.
          </p>
        </div>
        <img
          src="/image.png"
          alt="Illustration de vie durable"
          className="w-180 h-auto ml-8"
        />
        <button className="absolute bottom-0 left-0 z-10 bg-[#FB9434] px-8 py-3 text-white flex gap-6">
          Apply Now
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default page;
