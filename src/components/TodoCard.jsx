import React, { useState } from 'react'

const TodoCard = (todoItem) => {

    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [priority, setPriority] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("");


    return (
        <div className='bg-white m-2 rounded-lg border-2 border-gray-100 text-xl pl-4 text-lg'>
            TodoCard
        </div>
    )
}

export default TodoCard