import { useState } from 'react'
import TodoCard from './components/TodoCard'
import Navbar from './components/Navbar'
import Popup from './components/Popup';


function App() {

    const [popupActive, setPopupActive] = useState(false);

    const togglePopup = () => {
        setPopupActive(!popupActive);
        console.log("toggled");

    }

    const handleAdd = () => {
        togglePopup();
    };

    return (
        <>
            <Navbar handleAdd={handleAdd} />
            {popupActive && <Popup toggle={togglePopup} />}
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
        </>
    )
}

export default App
