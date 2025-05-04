import { useState } from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css'
import Board from './components/Board';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <DndProvider backend={HTML5Backend}>
      <Board />
    </DndProvider>
    </>
  )
}

export default App
