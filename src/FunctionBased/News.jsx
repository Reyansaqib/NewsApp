import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinners from './Spinners';
export default function News(props) {
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1);
  const [totalSize, settotalSize] = useState(0);

  async function getArticles() {
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=6fa61aa48e27481a9a4d74ca2ff4fb85&page=${page}&pageSize=8`)
    var data = await rawdata.json()
    setarticles(data.articles)
    settotalSize(data.totalResults)
    console.log(setarticles);
  }
useEffect(() => {
  getArticles()
}, [props.category])
var fetchData=async ()=>{
  setpage(page+1)
  var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=6fa61aa48e27481a9a4d74ca2ff4fb85&page=${page}&pageSize=8`)
    var data = await rawdata.json()
    setarticles(articles.concat(data.articles))

}


  return (
    <>
    <h1>Articles</h1>
    <InfiniteScroll
  dataLength={articles.length}
  next={fetchData}
  hasMore={articles.length!=totalSize}
  loader={<Spinners/>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }

>
<div className="container-fluid">
        <div className="row">
          {
            articles.map((item, index) => {
              return <NewsItem 
                      articles={item.articles}
                      title={item.title}
                      date={item.publishedAt}
                      des={item.description}
                      img={item.urlToImage}
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
