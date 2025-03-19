import React, { useEffect, useState } from 'react'
import { MdDelete, MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";



const TodoCard = ({ id, todoItem, handleTodoCardDelete, handleTodoCardChecked }) => {

    return (
        <div className={`bg-white m-2 rounded-lg font-medium border-2 border-gray-300 pl-1 pr-2 text-lg 
                        flex justify-between items-center transition-all duration-200 hover:scale-101
                        ${todoItem.status ? 'line-through text-gray-400' : 'text-gray-800'}
                         `}>

            <div className='flex items-center'>
                {todoItem.status ? (
                    <button onClick={() => { handleTodoCardChecked(id) }}>
                        <MdCheckBox className="text-gray-800 mx-1 text-2xl transition-all duration-200 hover:scale-110" />
                    </button>
                ) : (
                    <button onClick={() => { handleTodoCardChecked(id) }}>
                        <MdOutlineCheckBoxOutlineBlank className='text-gray-800 mx-1 text-2xl transition-all duration-200 hover:scale-110' />
                    </button>
                )}

                {todoItem.title}
            </div>
            <div className='flex items-center'>
                <button onClick={() => handleTodoCardDelete(id)}>
                    <MdDelete className='text-red-500 mx-1 text-2xl transition-all duration-200 hover:scale-110' />
                </button>
            </div>
        </div >
    )
}

export default TodoCard