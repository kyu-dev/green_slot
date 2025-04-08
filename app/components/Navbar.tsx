import React from 'react';
import LetterSwapForward from './LetterSwapForward';

const Navbar = () => {
  return (
    <div className="flex z-10 fixed items-center justify-between w-full py-4 px-8">
      <h1 className="text-white text-2xl font-semibold">Green Slot</h1>
      <nav className="rounded-full bg-white/20 backdrop-blur-xs w-fit border-white/30 border py-4 px-8 ">
        <ul className="flex text-white gap-4 font-medium">
          <LetterSwapForward label="First" staggerFrom={'first'} />
          <LetterSwapForward
            label="Center"
            staggerFrom={'center'}
            className=""
          />
          <LetterSwapForward label="Last" staggerFrom={'last'} />
        </ul>
      </nav>
      <button className="rounded-full bg-white py-4 px-6 font-normal">
        Contact
      </button>
    </div>
  );
};

export default Navbar;
