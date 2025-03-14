import React from 'react'
import { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import AddTodoCard from './AddTodoCard';


const TodoArea = () => {

    const [todoItems, setTodoItems] = useState([]); // array with alll the todo items
    // {
    //     id :  fdsds ,
    //     title: "name",
    //     stat:"1 or 0",
    //     progress : 0 - not started , 1 - in progress
    //     priority : low medium high
    //     createdAt :  creation time 
    //     dueDate   :  due data
    //     notes : text 
    //
    // }

    // for each change in todoItems we update the local storage
    useEffect(() => {
        if (todoItems.length > 0) {
            localStorage.setItem('todoItems', JSON.stringify(todoItems));
        }
    }, [todoItems]);

    // on mount we load the local storage
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todoItems'));
        if (items) {
            setTodoItems(items);
        }
    }, []);

    // adds tittle of the data to tittles array
    const addTodoItem = (data) => {
        setTodoItems([...todoItems, { id: uuidv4(), title: data, stat: 0, progress: 0 }]);
    }

    const handleTodoCardDelete = (id) => {
        // code to clear the localtodoItem 
        // setTodoItems([]);
        // localStorage.removeItem("todoItems");
        setTodoItems((oldTitles) => oldTitles.filter((title) => title.id !== id));
    }

    const handleTodoCardChecked = (id) => {
        // updaataes the stat of id 
        setTodoItems((oldTitles) => {
            return oldTitles.map((title) => {
                if (title.id == id) {
                    let oldstat = title.stat;
                    return { ...title, stat: !oldstat };
                }
                else return title;
            })
        })

    }

    const handleTodoCardProgressToggle = (id) => {
        setTodoItems((oldTitles) => {
            return oldTitles.map((title) => {
                if (title.id === id) {
                    console.log(title.title);
                    return { ...title, progress: !title.progress };
                }
                else return title;
            })
        })

    }

    return (
        <div className='bg-green-100 max-w-2xl md:max-w-7xl mx-auto'>
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <AddTodoCard />
        </div>
    )
}

export default TodoArea