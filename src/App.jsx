import { useState, useEffect } from 'react'
import TodoCard from './components/TodoCard'
import Navbar from './components/Navbar'
import Popup from './components/Popup';
import { v4 as uuidv4 } from 'uuid';

function App() {

    // popups state
    const [popupActive, setPopupActive] = useState(false);

    const [titles, setTitles] = useState([]);
    // {
    //     id :  fdsds ,
    //     title: "name",
    //     stat:"1 or 0"
    // }

    useEffect(() => {
        if (titles.length > 0) {
            localStorage.setItem('titles', JSON.stringify(titles));
        }
    }, [titles]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('titles'));
        if (items) {
            setTitles(items);
        }
    }, []);

    const togglePopup = () => {
        setPopupActive(!popupActive);
        console.log("toggled");

    }

    // adds tittle of the data to tittles array
    const addTittle = (data) => {
        setTitles([...titles, { id: uuidv4(), title: data, stat: 0 }]);
    }

    // handles what happens when a task is added
    const handleAdd = (data) => {
        console.log(data);

        // code to clear the local titles
        // setTitles([]);
        // localStorage.removeItem("titles");

        addTittle(data);
        togglePopup();
    };

    const handleTodoCardDelete = (id) => {

        setTitles((oldTitles) => oldTitles.filter((title) => title.id !== id));
    }

    const handleTodoCardChecked = (id) => {

        // updaataes the stat of id 
        setTitles((oldTitles) => {
            return oldTitles.map((title) => {
                if (title.id == id) {
                    let oldstat = title.stat;
                    return { ...title, stat: !oldstat };
                }
                else return title;
            })
        })

    }

    return (
        <>
            <Navbar toggle={togglePopup} />
            {popupActive && <Popup toggle={togglePopup} handleAdd={handleAdd} />}

            {titles.map((title, index) => (
                title.stat == 0 ? <TodoCard key={title.id} Title={title} handleTodoCardChecked={handleTodoCardChecked}
                    handleTodoCardDelete={handleTodoCardDelete} /> : null
            ))}

            <hr />

            {titles.map((title, index) => (
                title.stat == 1 ? <TodoCard key={title.id} Title={title} handleTodoCardChecked={handleTodoCardChecked}
                    handleTodoCardDelete={handleTodoCardDelete} /> : null
            ))}

        </>
    )
}

export default App
