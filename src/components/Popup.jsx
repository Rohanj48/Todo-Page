import React from 'react'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import { FiFilePlus } from "react-icons/fi";


const Popup = ({ toggle, handleAdd }) => {

    const [title, setTitle] = useState('');

    const addClicked = () => {
        if (title.length > 0) {
            handleAdd(title);
        }
    }

    return (
        <div className=' w-[40vh] p-3  fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black text-white rounded-lg'>
            <div className='flex justify-between p-4 text-2xl'>
                Add Todo . .
                <button className='text-white' onClick={toggle}>
                    <FiX className='transition-transform duration-200 hover:scale-120' />
                </button>
            </div>
            <input name="Title" value={title} onChange={e => setTitle(e.target.value)}
                className="bg-white text-black p-2 w-full " placeholder='Title' />
            <div className='flex  justify-end my-4 gap-x-4 '>
                <button className='text-white bg-slate-700 p-2 rounded-2xl flex items-center gap-2 text-md transition-transform duration-200 hover:scale-110'
                    onClick={toggle} >
                    <FiFilePlus />
                    Cancel
                </button>
                <button className='text-white bg-slate-700 p-2 rounded-2xl flex items-center gap-2 text-md transition-transform duration-200 hover:scale-110'
                    onClick={addClicked} >
                    <FiFilePlus />
                    ADD . .
                </button>

            </div>

        </div>
    )
}

export default Popup