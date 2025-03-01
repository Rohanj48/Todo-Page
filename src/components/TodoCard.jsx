import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { useState } from 'react';
import { TiBatteryLow } from 'react-icons/ti';


const TodoCard = ({ Title, handleTodoCardChecked, handleTodoCardDelete, handleTodoCardProgressToggle }) => {

    const [done, setDone] = useState(false);

    const handleCheck = () => {
        setDone(!done);
        handleTodoCardChecked(Title.id);
    }

    if (Title.stat == 0)
        return (
            <div className="p-2 m-4 bg-gray-200 rounded list-none text-xl flex items-center justify-between transition-transform duration-200 hover:scale-101">

                {Title.title}

                <div className='flex align-middle text-3xl gap-x-2'>

                    {!Title.progress ?
                        (
                            <button onClick={() => handleTodoCardProgressToggle(Title.id)}>
                                <div className="bg-white text-red-800 rounded-2xl text-sm p-1 px-2 flex items-center gap-x-1 transition-transform duration-200 hover:scale-105">
                                    <FaCircle />
                                    Not Started
                                </div>
                            </button>
                        ) :
                        (
                            <button onClick={() => handleTodoCardProgressToggle(Title.id)}>
                                <div className="bg-white text-orange-500 rounded-2xl text-sm p-1 px-2 flex items-center gap-x-1 transition-transform duration-200 hover:scale-105 animate-pulse">
                                    <FaCircle />
                                    In Progress
                                </div>
                            </button>
                        )}


                    <button onClick={() => { handleTodoCardDelete(Title.id) }}>
                        <MdDelete className='text-red-800 transition-transform duration-200 hover:scale-120' />
                    </button>

                    <button className='font-extrabold text-3xl' type="button"
                        onClick={handleCheck}>
                        < MdOutlineCheckBoxOutlineBlank className='transition-transform duration-200 hover:scale-120' />
                    </button>

                </div>
            </div>);
    else
        return (
            <div className="p-2 m-4 bg-gray-200 rounded list-none  line-through text-xl flex items-center justify-between text-gray-400 transition-transform duration-200 hover:scale-101">

                {Title.title}

                <div className='flex align-middle text-3xl gap-x-2'>

                    <button onClick={() => { handleTodoCardDelete(Title.id) }}>
                        <MdDelete className='text-red-800 transition-transform duration-200 hover:scale-120' />
                    </button>

                    <button className='font-extrabold text-3xl' type="button"
                        onClick={handleCheck}>
                        <MdOutlineCheckBox className='transition-transform duration-200 hover:scale-120' />
                    </button>

                </div>
            </div>);
}

export default TodoCard