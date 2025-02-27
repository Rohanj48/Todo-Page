import { useState } from 'react'
import TodoCard from './components/TodoCard'
import Navbar from './components/Navbar'
import Popup from './components/Popup';


function App() {

    // popups state
    const [popupActive, setPopupActive] = useState(false);


    const [title, setTitle] = useState("");



    const togglePopup = () => {
        setPopupActive(!popupActive);
        console.log("toggled");

    }

    // handles what happens when a task is added
    const handleAdd = (data) => {
        console.log(data);
        setTitle(data);
        togglePopup();
    };

    return (
        <>
            <Navbar toggle={togglePopup} />
            {popupActive && <Popup toggle={togglePopup} handleAdd={handleAdd} />}
            <TodoCard Title={title} />

        </>
    )
}

export default App
