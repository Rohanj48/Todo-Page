import React from 'react'
import { FiX } from "react-icons/fi";

const Popup = ({ toggle }) => {
    return (
        <div className='h-[40vh] w-[60vh] p-4  fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black text-white'>
            <div className='flex justify-between p-4 text-2xl'>
                Add Todo . .
                <button className='text-white' onClick={toggle}>
                    <FiX />
                </button>
            </div>

        </div>
    )
}

export default Popup