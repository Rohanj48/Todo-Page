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
        // localStorage.removeItem("todoItems");
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
        setTodoItems((oldTodos) => {
            return oldTodos.map((todo) => {
                if (todo.id == id) {
                    let oldstatus = todo.status;
                    return { ...todo, status: !oldstatus };
                }
                else return todo;
            })
        })
        console.log(todoItems)

    }

    const handleAddTask = (data) => {
        setTodoItems((prevTodoItems) => [...prevTodoItems, data]);
        console.log(todoItems);
    };

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
        <div className=' max-w-2xl md:max-w-7xl mx-auto'>
            <div>
                {todoItems
                    .filter((todo) => todo.status === false)
                    .map((todo) => (
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                            todoItem={todo}
                            handleTodoCardDelete={handleTodoCardDelete}
                            handleTodoCardChecked={handleTodoCardChecked}
                        />
                    ))}
                <AddTodoCard handleAddTask={handleAddTask} />
            </div>
            <div className='border-t-2 border-gray-700 mt-5'>
                {todoItems
                    .filter((todo) => todo.status === true)
                    .map((todo) => (
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                            todoItem={todo}
                            handleTodoCardDelete={handleTodoCardDelete}
                            handleTodoCardChecked={handleTodoCardChecked}
                        />
                    ))}
            </div>
        </div>
    )
}

export default TodoArea