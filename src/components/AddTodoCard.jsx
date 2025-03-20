import React, { useState } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodoCard = ({ handleAddTask }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium"); // Default priority
    const [createdAt] = useState(new Date()); // Set to current date
    const [dueDate, setDueDate] = useState(new Date());
    const [progress, setProgress] = useState(0);
    const [notes, setNotes] = useState("");

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const addTask = () => {
        if (!title.trim()) return; // Prevent empty tasks

        const newTodo = {
            id: uuidv4(),
            title,
            status: false,
            progress,
            priority,
            createdAt,
            dueDate,
            notes
        };

        handleAddTask(newTodo);

        // Reset the fields
        setTitle("");
        setPriority("medium");
        setDueDate(new Date());
        setProgress(0);
        setNotes("");

        setIsExpanded(false); // Collapse form
    };

    const handleCancel = () => {
        setTitle("");
        setPriority("medium");
        setDueDate(new Date());
        setProgress(0);
        setNotes("");
        setIsExpanded(false);
    };

    return (
        <div className='bg-white m-2 items-center rounded-lg border-2 border-gray-300 text-xl transition-all duration-200 hover:scale-101  '>

            <div className='flex'>
                <button className="px-2.5   text-gray-700"
                    onClick={toggleExpand} >
                    {isExpanded ? <FiMinus className='transition-all duration-200 hover:scale-115 text-xl' /> : <FiPlus className='transition-all duration-200 hover:scale-115 text-xl' />}
                </button>
                {isExpanded ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="rounded-md text-lg flex-grow outline-none focus:ring-0 focus:border-gray-400"
                        placeholder="Enter Todo Title"
                        autoFocus
                    />
                ) : (
                    <span className="font-medium text-lg text-gray-500">Add Todo</span>
                )}


            </div>

            {isExpanded && (
                <div className="mt-2 m-2 border-t-2 border-gray-100">
                    <div className='flex justify-between h-40'>
                        <div className='flex-grow px-2 items-start'>
                            <span className='font-semibold text-base'>Notes</span>
                            <textarea
                                rows="5"
                                className="resize-none block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-300 focus:border-blue-300"
                                placeholder="Write your description here..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col px-2 items-start'>
                            <span className='font-semibold text-base pt-1'>Due Date</span>
                            <DatePicker
                                className='border-2 border-gray-300 rounded-md bg-gray-50 text-base'
                                selected={dueDate}
                                onChange={(date) => setDueDate(date)}
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                    </div>

                    {/* Priority Selection */}
                    <div className='flex justify-between'>
                        <div className='flex space-x-1 text-sm px-2'>
                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                            ${priority === "high" ? "bg-red-100 border-red-500 text-red-800" : ""}`}
                            >
                                <input
                                    type="radio"
                                    value="high"
                                    name="priority-radio"
                                    className="w-4 h-4 mx-1"
                                    checked={priority === "high"}
                                    onChange={(e) => setPriority(e.target.value)}
                                />
                                High
                            </div>

                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                        ${priority === "medium" ? "bg-orange-100 border-orange-500 text-orange-800" : ""}`}
                            >
                                <input
                                    type="radio"
                                    value="medium"
                                    name="priority-radio"
                                    className="w-4 h-4 mx-1"
                                    checked={priority === "medium"}
                                    onChange={(e) => setPriority(e.target.value)}
                                />
                                Medium
                            </div>

                            <div
                                className={`flex items-center ps-3 border-2 rounded-lg pr-2 
                                             ${priority === "low" ? "bg-blue-100 border-blue-500 text-blue-800" : ""}`}
                            >
                                <input
                                    type="radio"
                                    value="low"
                                    name="priority-radio"
                                    className="w-4 h-4 mx-1"
                                    checked={priority === "low"}
                                    onChange={(e) => setPriority(e.target.value)}
                                />
                                Low
                            </div>
                        </div>

                        <div>
                            <button
                                className="px-2 mx-1 transition-all duration-200 hover:scale-110 font-medium rounded-2xl"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-2 mx-1 transition-all duration-200 hover:scale-110 font-medium rounded-2xl"
                                onClick={addTask}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddTodoCard;
