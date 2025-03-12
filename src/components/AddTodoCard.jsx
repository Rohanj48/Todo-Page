import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';


const AddTodoCard = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='bg-white m-2 rounded-lg border-2 border-gray-100 text-xl transition-all duration-200'>
            <div className='flex justify-between'>
                AddTodoCard

                <button className=" px-2 transition-all duration-200 hover:scale-110 font-medium"
                    onClick={toggleExpand} >
                    {isExpanded ? <FaMinus /> : <FaPlus />}
                </button>
            </div>

            {isExpanded && (
                <div className="mt-4 bg-amber-300 m-2">
                    <div className='flex justify-between '>
                        <div className='bg-green-400 w-2/3'>
                            notes
                        </div>
                        <div className='bg-amber-800 flex-grow'>
                            dueDate
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <div>
                            low medium high
                        </div>
                        <div>
                            <button className=" px-2 mx-1 transition-all duration-200 hover:scale-110 font-medium bg-amber-900 rounded-2xl"
                                onClick>
                                cancel
                            </button>
                            <button className=" px-2 mx-1 transition-all duration-200 hover:scale-110 font-medium bg-green-600 rounded-2xl"
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