// import './HomePage.css';
import { useState, useEffect } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");
    const [completed, setCompleted] = useState(false);

    const initialTodos = [
        {
            id: 0,
            task: "Set up API to feed data, postman is set up on laptop",
            completed: false,
        },
        {
            id: 1,
            task: "Component structure for Albums, Artists, Songs",
            completed: false,
        },
        {
            id: 2,
            task: "Create React components for pages + cards",
            completed: false,
        },
    ];

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value);
    };

    const addTodo = (event) => {
        event.preventDefault();
        let newTodos = [
            ...todos,
            {
                id: todos.length,
                task: value,
                completed: false,
            },
        ]
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setValue("");
    };

    const completeTodo = (event) => {
        const id = event.target.id;
        const arr = todos;
        todos[id].completed = true;
        setTodos(arr);
        localStorage.setItem("todos", JSON.stringify(todos));
        setCompleted(true);
    };

    const deleteTodo = (event) => {
        const id = event.target.id;
        const arr = todos;
        arr.splice(id, 1);
        for (let i = 0; i < arr.length; i++) {
            arr[i].id = i;
        }
        setCompleted(true);
        setTodos(arr);
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    useEffect(() => {
        //maybe set this up to feed from database <--- lol yeah right
        let checkStorage = localStorage.getItem("todos");
        if (checkStorage.length) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        } else {
            setTodos(initialTodos);
        }
    }, []);

    useEffect(() => {
        if (completed) {
            setCompleted(false);
        }
    }, [completed]);

    return (
        <div className="Todo">
            <div className="col-4 mx-auto">
                <h2 className="display-3 fw-bold mb-3 text-center">Todo List</h2>
                {/* <h3 className="lead fs-1 mb-0 pb-0">Add Todo</h3> */}
                <form className="row ms-0 mb-4" onSubmit={addTodo}>
                    <div className="col-11">
                        <label htmlFor="todo-input" className="form-label fs-2">
                            Add Todo
                        </label>
                        <input value={value} onChange={handleChange} type="text" className="form-control" id="todo-input" />
                    </div>
                    <div className="col-1 d-flex align-items-end">
                        <button onClick={addTodo} className="btn btn-outline-light mt-2" type="button">
                            Add
                        </button>
                    </div>
                </form>
                <div className="container">
                    {todos.map((todo) => (
                        <div key={todo.id} className="row my-2">
                            <div className="col-11">
                                <p
                                    style={todo.completed ? { textDecoration: "line-through" } : {}}
                                    key={todo.task}
                                    className="lead fs-4"
                                >
                                    -{todo.task}
                                </p>
                            </div>
                            <div className="col-1">
                                {todo.completed ? (
                                    <button id={todo.id} onClick={deleteTodo} className="btn btn-outline-danger">
                                        Delete
                                    </button>
                                ) : (
                                    <button id={todo.id} onClick={completeTodo} className="btn btn-outline-success">
                                        Done
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Todo;
