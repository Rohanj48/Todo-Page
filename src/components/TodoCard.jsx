import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { useState } from 'react';


const TodoCard = ({ Title, handleTodoCardChecked }) => {

    const [done, setDone] = useState(false);

    const handleCheck = () => {
        setDone(!done);
        handleTodoCardChecked(Title.id);
    }
    return (
        <div className="p-2 m-4 bg-gray-200 rounded list-none text-xl flex items-center justify-between">
            {Title.title}
            <button className='font-extrabold text-3xl' type="button"
                onClick={handleCheck}>
                {Title.stat == 0 && < MdOutlineCheckBoxOutlineBlank />}
                {Title.stat == 1 && <MdOutlineCheckBox />}

            </button>
        </div>
    )
}

export default TodoCard