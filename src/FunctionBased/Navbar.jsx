import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="politics">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="crime">Crime</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="education">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="comedy">Comedy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="comedy">science</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

