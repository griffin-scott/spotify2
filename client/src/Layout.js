import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black py-0 mb-1">
                <div className="container-fluid justify-content-between d-flex flex-row my-0">
                    <div className="col-4">
                        <Link className="nav-link active navbar-brand fs-2 me-0" to="/">
                            <img id="cat-logo" src="catIcon.png" alt="" />
                            New Spotify
                        </Link>
                    </div>
                    <div className="col-4">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">
                                Search
                            </button>
                        </form>

                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-end text-center">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item nb-link me-1">
                                <Link className="nav-link active lead" to="/discover">
                                    Discover
                                </Link>
                            </li>
                            <li className="nav-item nb-link">
                                <Link className="nav-link active lead" to="/todo">
                                    Todos
                                </Link>
                            </li>
                            <li className="nav-item nb-link ms-1">
                                <Link className="nav-link active lead" to="/account">
                                    Account
                                </Link>
                            </li>
                            <Link className="nav-link active lead" to="/account">
                                <img id="acc-logo" src="accIconWhite.png" alt="" />
                            </Link>
                        </ul>

                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
