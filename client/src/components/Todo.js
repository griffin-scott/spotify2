// import './HomePage.css';
import { useState, useEffect } from 'react';

function Todo() {

    const [todos, setTodos] = useState({})



    return (
        <div className="Todo">
            <div className="col-6 mx-auto">
                <h2 className="display-3 mb-1">Todo List</h2>
                <p className="lead">
                    -Set up API to feed data, postman is set up on laptop<br />
                    -Component structure for Albums, Artists, Songs<br />
                    -Create React components for pages + cards
                </p>


            </div>
        </div>
    );
}

export default Todo;
