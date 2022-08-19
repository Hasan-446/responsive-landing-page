import React,{useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const[nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
            <h1 className="text-[#00d8ff] ">DEFI</h1>
        </div>
        <div className="hidden md:flex">
            <ul className="flex text-[#E1E2E2] items-center" >
                <li>Platform</li>
                <li>Developers</li>
                <li>Community</li>
                <li>About</li>
                <button className="bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 rounded-3xl ml-4">use defi</button>
            </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
        </div>
        <div className={nav? "w-full bg-black text-[#E1E2E2] absolute top-[90px] flex left-0 justify-center text-center md:hidden " : 'absolute left-[-100%]'}>
        <ul >
                <li className="text-xl">Platform</li>
                <li className="text-xl">Developers</li>
                <li className="text-xl">Community</li>
                <li className="text-xl">About</li>
                <button className="bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 rounded-3xl m-8">use defi</button>
            </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;