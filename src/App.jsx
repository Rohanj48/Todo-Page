import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import TodoArea from './components/TodoArea';


function App() {

    return (
        <>
            <Navbar />
            <TodoArea />
        </>
    )
}

export default App
