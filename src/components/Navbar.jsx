import React from 'react'
import { FiFilePlus } from "react-icons/fi";

const Navbar = ({ toggle }) => {



    return (
        <div className='flex justify-between my-4 align-middle items-center border-b-2 border-gray-400 '>
            <h1 className='text-6xl text-black m-4 ' > Todo...</h1>
            {/* <button className=" flex align-middle items-center gap-2 rounded-lg bg-black text-xl text-white font-medium px-6 py-4 h-fit transition-transform duration-200 hover:scale-105" type="button"
                onClick={toggle}>
                <FiFilePlus />
                Add . .
            </button> */}
        </div>
    )
}

export default Navbar

