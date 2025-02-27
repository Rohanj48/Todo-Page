import { useState, useEffect } from 'react'
import TodoCard from './components/TodoCard'
import Navbar from './components/Navbar'
import Popup from './components/Popup';


function App() {

    // popups state
    const [popupActive, setPopupActive] = useState(false);

    const [titles, setTitles] = useState([]);

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
        setTitles([...titles, data]);
    }

    // handles what happens when a task is added
    const handleAdd = (data) => {
        console.log(data);
        addTittle(data);
        togglePopup();
    };

    return (
        <>
            <Navbar toggle={togglePopup} />
            {popupActive && <Popup toggle={togglePopup} handleAdd={handleAdd} />}
            {titles.map((title, index) => (
                <li key={index} className="p-2 bg-gray-200 rounded">
                    {<TodoCard Title={title} />}
                </li>
            ))}


        </>
    )
}

export default App
