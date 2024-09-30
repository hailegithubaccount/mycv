import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white'>
      <h1 className='text-3xl font-bold text-[#00df9a] '>react</h1>
      
      {/* Full Navbar for larger screens */}
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 block md:hidden' : 'fixed left-[-100%] block md:hidden'}>
        <h1 className='text-3xl font-bold text-[#00df9a] m-4'>react</h1>
        <ul className='uppercase'>
          <li className='p-4 border-b border-b-gray-900'>Home</li>
          <li className='p-4 border-b border-b-gray-900'>Company</li>
          <li className='p-4 border-b border-b-gray-900'>Resource</li>
          <li className='p-4 border-b border-b-gray-900'>About</li>
          <li className='p-4 border-b border-b-gray-900'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
