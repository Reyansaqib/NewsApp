import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export default class NewsItem extends Component {
    render() {
        return (
            <>
                
                
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 " >
                    <div className="card" >
                        <img src={this.props.image} className="card-img-top" height="250px" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ height: "80px" }}>{this.props.title.slice(0, 50) + "..."}</h5>
                            <h5>{new Date(this.props.date).toString()} </h5>
                            <p className="card-text" style={{ height: "100px" }}>{this.props.description ? this.props.description.slice(0, 100) : ""}</p>
                            <a href={this.props.url} className="btn btn-primary" >Read this Article</a>
                        </div>
                    </div>
                </div>
             
            </>
        )

    }
}
