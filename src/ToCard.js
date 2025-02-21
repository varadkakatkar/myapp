import { useState,useEffect } from 'react';


const ToCard = () => {
   const [toDoList,setToDoList] = useState([])
   
   
   
    useEffect(()=>{
        getToDoList()
    },[])

    const getToDoList = () => {
        async function getText(file) {
            let x = await fetch(file);
            let y = await x.text();
            myDisplay(y);
          }
    }

    return (
   
    <div>
        <div className="todo-container">
            <input type="checbox"> </input>
            <input type="text"></input>
        </div>
    </div>
    )

}


export default ToCard