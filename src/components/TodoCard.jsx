import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";


const TodoCard = ({ id, todoItem, handleTodoCardDelete }) => {

    return (
        <div className='bg-white m-2 rounded-lg font-medium border-2 border-gray-300 pl-4 pr-2 text-lg
                        flex justify-between transition-all duration-200 hover:scale-101'>
            <div>

                {todoItem.title}
            </div>
            <div>
                <button onClick={() => handleTodoCardDelete(id)}>
                    <MdDelete className='text-red-500 m-1 text-xl transition-all duration-200 hover:scale-110' />
                </button>
            </div>
        </div>
    )
}

export default TodoCard