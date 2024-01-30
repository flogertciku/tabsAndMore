import { useState } from "react"

const Todo = () => {
    

    const [todo,setTodo]= useState("")
    const [todos,setTodos] = useState([])
    const AddTodo=(e)=>{
        console.log("addTodo is called")
        e.preventDefault()
        setTodos([...todos,{item:todo,isFinished:false}])
    }

    const DeleteTodo = (todoName)=>{
        const updatedList = todos.filter(todo=> todo.item != todoName)
        setTodos([...updatedList])
    }
    const ChangeTodo=(todoItem) =>{
        
        const updatedList = todos.filter(todo=> todo.item != todoItem.item)
        todoItem.isFinished = !todoItem.isFinished
        setTodos([...updatedList,todoItem])
    }

    return (
        <div>
           
            <div>
                <form onSubmit={AddTodo}>
                    <label htmlFor="">Add Todo</label>
                    <input type="text" placeholder="Todo Name" onChange={(e)=> setTodo(e.target.value)} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
            <h2>Your Todos</h2>
         
            <ol>
            { todos.map((item,index)=>{
              return <li style={ item.isFinished? {textDecoration: 'line-through'} : {textDecoration: 'none'} } key={index}> <p> {item.item}</p> <input type="checkbox" onChange={(e)=>ChangeTodo(item)} checked={item.isFinished}  /> <button onClick={(e)=>DeleteTodo(item.item)}>Delete</button> </li>
            })}
            </ol>
        </div>
    )
}
export default Todo