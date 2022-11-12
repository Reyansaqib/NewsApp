import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";
import News from "./News";
export default class  App extends Component{
  
  render(){
    return(
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<News category="general"/>}></Route>
        <Route path ="/science" element={<News category="science"/>}></Route>
        <Route path ="/entertainment" element={<News category="entertainment"/>}></Route>
        <Route path ="/politics" element={<News category="polictics"/>}></Route>
        <Route path ="/crime" element={<News category="crime"/>}></Route>
        <Route path ="/comedy" element={<News category="comedy"/>}></Route>
        <Route path ="/sports" element={<News category="sports"/>}></Route>
        <Route path ="/education" element={<News category="education"/>}></Route>
        <Route path ="/technology" element={<News category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
      
      </>
    )
  }
}