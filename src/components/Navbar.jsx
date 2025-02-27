import React from 'react'
import { FiFilePlus } from "react-icons/fi";

const Navbar = ({ toggle }) => {
    return (
        <div className='flex justify-between m-4'>
            <h1 className='text-6xl text-black m-4 ' > Todo...</h1>
            <button className=" flex items-center gap-2 rounded-lg bg-black text-xl text-white font-medium px-6 py-4 h-fit" type="button"
                onClick={toggle}>
                <FiFilePlus />
                Add . .
            </button>
        </div>
    )
}

export default Navbar