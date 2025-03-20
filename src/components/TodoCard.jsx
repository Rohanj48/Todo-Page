import React, { useEffect, useState } from 'react'
import { MdDelete, MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";



const TodoCard = ({ id, todoItem, handleTodoCardDelete, handleTodoCardChecked }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (

        <div className={`bg-white m-2 rounded-lg font-medium border-2 border-gray-300 pl-1 pr-2 text-lg 
                        transition-all duration-200 hover:scale-101
                         `}>

            <div className='flex justify-between w-full' onClick={() => { setIsExpanded(!isExpanded) }}>
                <div className={`flex items-center ${todoItem.status ? ' line-through text-gray-400' : 'text-gray-800'}`}>
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

                    <div className='flex justify-between'>
                        <div className='flex items-center space-x-1 text-sm px-2'>
                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                                ${todoItem.priority === "high" && !isExpanded ? "bg-red-100 border-red-500 text-red-800" : "hidden"}`}
                            >
                                High
                            </div>

                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                                ${todoItem.priority === "medium" && !isExpanded ? "bg-orange-100 border-orange-500 text-orange-800" : "hidden"}`}
                            >
                                Medium
                            </div>

                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                                ${todoItem.priority === "low" && !isExpanded ? "bg-blue-100 border-blue-500 text-blue-800" : "hidden"}`}
                            >
                                Low
                            </div>
                        </div>

                    </div>

                    <button onClick={() => handleTodoCardDelete(id)}>
                        <MdDelete className='text-red-500 mx-1 text-2xl transition-all duration-200 hover:scale-110' />
                    </button>

                </div>
            </div>
            {isExpanded && (
                <div className="mt-2 m-2 border-t-2 border-gray-100">
                    <div className='flex justify-between '>
                        <div className='flex-grow  px-2 items-start'>
                            <span className='font-semibold text-base block '>Notes</span>
                            <p className='text-sm text-gray-800'>
                                {todoItem.notes}
                            </p>
                        </div>

                        <div className='flex flex-col px-2 items-start'>
                            <span className='font-semibold text-base pt-1'>Due Date</span>
                            {new Date(todoItem.dueDate).toLocaleDateString()}
                        </div>
                    </div>

                    {/* {priority} */}
                    <div className='flex justify-between'>
                        <div className='flex space-x-1 text-sm px-2'>
                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                                        ${todoItem.priority === "high" ? "bg-red-100 border-red-500 text-red-800" : "hidden"}`}
                            >
                                High
                            </div>

                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                                    ${todoItem.priority === "medium" ? "bg-orange-100 border-orange-500 text-orange-800" : "hidden"}`}
                            >
                                Medium
                            </div>

                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                                         ${todoItem.priority === "low" ? "bg-blue-100 border-blue-500 text-blue-800" : "hidden"}`}
                            >
                                Low
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div >
    )
}

export default TodoCard