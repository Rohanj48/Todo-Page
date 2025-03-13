import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodoCard = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [priority, setPriority] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [dueDate, setDueDate] = useState(new Date());
    const [status, setStatus] = useState("");

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='bg-white m-2 rounded-lg border-2 border-gray-100 text-xl transition-all duration-200 p-0.5'>
            <div className='flex justify-between px-4'>
                {isExpanded ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className=" rounded-md text-lg flex-grow outline-none focus:ring-0 focus:border-gray-400"
                        placeholder="Enter Todo Title"
                        autoFocus
                    />
                ) : (
                    <span className="font-medium text-lg">Add Todo</span>
                )}

                <button className=" px-2 transition-all duration-200 hover:scale-110 font-medium"
                    onClick={toggleExpand} >
                    {isExpanded ? <FaMinus /> : <FaPlus />}
                </button>
            </div>

            {isExpanded && (
                <div className="mt-2 m-2 border-t-2 border-gray-100">
                    <div className='flex justify-between h-40'>
                        <div className=' flex-grow px-2 items-start'>
                            <span className='font-semibold text-base'>Notes</span>
                            <textarea id="message" rows="5" class=" resize-none block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-300 focus:border-blue-300 " placeholder="Write your Description here..."></textarea>
                        </div>

                        <div className='flex flex-col  px-2 items-start'>
                            <span className='font-semibold text-base pt-1'>Due Date</span>

                            <DatePicker className='border-2 border-gray-300 rounded-md bg-gray-50 text-base'
                                selected={dueDate}
                                onChange={(date) => setDueDate(date)}
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex space-x-1 text-sm px-2'>
                            <div className="flex items-center ps-3 border-2 rounded-lg pr-2 bg-red-100 border-red-500 text-red-800">
                                <input type="radio" value="" name="priority-radio" class="w-4 h-4 mx-1" />
                                High
                            </div>
                            <div className="flex items-center ps-3 border-2 rounded-lg pr-2  bg-orange-100 border-orange-500 text-orange-800">
                                <input type="radio" value="" name="priority-radio" class="w-4 h-4 mx-1" />
                                Medium
                            </div>
                            <div className="flex items-center ps-3 border-2 rounded-lg pr-2  bg-blue-100  border-blue-500 text-blue-800">
                                <input type="radio" value="" name="priority-radio" class="w-4 h-4 mx-1" />
                                Low
                            </div>
                        </div>
                        <div>
                            <button className=" px-2 mx-1 transition-all duration-200 hover:scale-110 font-medium  rounded-2xl"
                                onClick>
                                cancel
                            </button>
                            <button className=" px-2 mx-1 transition-all duration-200 hover:scale-110 font-medium  rounded-2xl"
                                onClick>
                                add taskDD
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default AddTodoCard