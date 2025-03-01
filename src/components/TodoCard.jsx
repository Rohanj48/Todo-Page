import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';

const TodoCard = ({ Title, handleTodoCardChecked, handleTodoCardDelete }) => {

    const [done, setDone] = useState(false);

    const handleCheck = () => {
        setDone(!done);
        handleTodoCardChecked(Title.id);
    }

    if (Title.stat == 0)
        return (
            <div className="p-2 m-4 bg-gray-200 rounded list-none text-xl flex items-center justify-between ">

                {Title.title}

                <div className='flex align-middle text-3xl'>

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
            <div className="p-2 m-4 bg-gray-200 rounded list-none  line-through text-xl flex items-center justify-between text-gray-400">

                {Title.title}

                <div className='flex align-middle text-3xl'>

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