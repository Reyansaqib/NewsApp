 import React, { Component } from "react";

 export default class Spinners extends Component{
    render(){
        return(
            <>
            <div className="container text-center">
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
</div>
</div>
            </>
        )
    }
 }