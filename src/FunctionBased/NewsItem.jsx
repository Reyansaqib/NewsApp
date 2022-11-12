import React from 'react'
import pic1 from "../images/noimg.jpg"
export default function NewsItem(props) {
    return (
        <>
            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="row">
            <div className="card" >
                <img src={props.img?props.img:pic1}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{height:"100px"}}>{props.title.slice(0,50)}</h5>
                    <h6>{new Date(props.date).toString()}</h6>
                    <p className="card-text" style={{height:"100px"}}>{props.des?props.des.slice(0,100):""}</p>
                    <a href={props.url} className="btn btn-primary">Read this Article</a>
                </div>
            </div>

            </div>
            </div>
            
        </>
    )
}
