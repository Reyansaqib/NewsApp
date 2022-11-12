import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Navbar'
import News from './News'

export default function App() {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<News category="general"  />}></Route>
            <Route path="/politics" element={<News category="politics"  />}></Route>
            <Route path="/sports" element={<News category="sports"  />}></Route>
            <Route path="/entertainment" element={<News category="entertainment"  />}></Route>
            <Route path="/science" element={<News category="science"  />}></Route>
            <Route path="/education" element={<News category="education"  />}></Route>
            <Route path="/crime" element={<News category="crime"  />}></Route>
            <Route path="/comedy" element={<News category="comedy"  />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}


