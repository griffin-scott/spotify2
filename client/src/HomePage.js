// import './HomePage.css';

import { useEffect, useState } from "react";

function HomePage() {
    const [token, setToken] = useState("");

    const getToken = async () => {
        /*
            Need to look at Auth section in
            Postman to see whats going on
            and how to turn into a function
        */


        setToken('token123')
        window.localStorage.setItem('token', token)
    };

    useEffect(() => {
        setToken(window.localStorage.getItem("token"));
    }, []);

    return (
        <div className="HomePage container">
            <div className="col-5 mx-auto d-flex flex-column justify-content-center">
                <h1 className="display-1 text-center">Home Page</h1>
                {token ? (
                    <p className="lead text-center">Token active!</p>
                ) : (
                    <button onClick={getToken} className="btn btn-lg btn-success mx-5">
                        Get Token
                    </button>
                )}
            </div>
        </div>
    );
}

export default HomePage;
