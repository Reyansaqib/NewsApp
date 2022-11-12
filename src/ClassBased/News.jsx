import React, { Component } from "react";
import NewsItem from "./NewsItem"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinners from "./Spinners";

export default class News extends Component{
    constructor(){
        super()
        this.state={
            articles:[],
            page:1,
            totalResults:0
        }
    }
    async getArticles(){
        var rawdata=await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=b141a966f4d04d328c77de532cd37b9f&page=${this.state.page}&pageSize=8`)
        var data= await rawdata.json()
        console.log(data);
        this.setState({articles:data.articles})
        this.setState({totalResults:data.totalResults})
        console.log(data.totalResults);
    }
    
    refresh=()=>{
        this.getArticles()
    }
    componentDidMount(){
        this.getArticles()

    }
    componentDidUpdate(old){
        if(old.category!=this.props.category)
        this.getArticles()
    }
    fetchData= async ()=>{
        this.setState({page:this.state.page+1})
        var rawdata=await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=b141a966f4d04d328c77de532cd37b9f&page=${this.state.page}&pageSize=8`)
        var data= await rawdata.json()
        
        this.setState({articles:this.state.articles.concat(data.articles)})

    }

    render(){
        return(
            <>
            <InfiniteScroll
                    dataLength={this.state.articles.length} 
                    next={this.fetchData}
                    hasMore={this.state.articles.length!=this.state.totalResults}
                    loader={<Spinners/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    // below props only if you need pull down functionality
                    refreshFunction={this.refresh}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                >
            <h1 className="bg-primary text-light text-center pt-5 mb-2">News Articles</h1>
            <div className="container-fluid">
                <div className="row">
                    {
                        this.state.articles.map((item,index)=>{
                            return <NewsItem
                            title={item.title}
                            author={item.author}
                            description={item.description}
                            date={item.publishedAt}
                            image={item.urlToImage}
                            url={item.url}
                            key={index}
                            
                            
                            />
                        })
                    }
                </div>
            </div>
            </InfiniteScroll>
            
            </>
        )
    }
}