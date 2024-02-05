import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  articles = []
  constructor(){
    super();
    this.state =  {
      articles: this.articles,
      loading: false,
      page: 1   
    }
  }
  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5e02ccc5860a4eeaa988ebe8352c81d3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading:false
      })
      this.props.setProgress(100);
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5e02ccc5860a4eeaa988ebe8352c81d3&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles, totalArticles: parseData.totalResults, loading:false});  

  }

  handleNext = async()=>{
    
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5e02ccc5860a4eeaa988ebe8352c81d3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parseData.articles,
    //   loading:false
    //   })
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }
  
  handlePrev = async()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5e02ccc5860a4eeaa988ebe8352c81d3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false
    //   })
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  render() {
    let{pageSize, category, setProgress} = this.props;
    return (<div className='container my-3'>
      <h2 className='text-center text-uppercase' style={{margin: '35px 0px'}}> <p className='text-uppercase'>Top News  - {this.props.category}</p></h2>
      {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key = {element.url} >
            <NewsItem title = {!element.title?"":element.title.slice(0,50)} author = {!element.author?"UNKNOWN AUTHOR":element.author} description = {!element.description?"":element.description.slice(0,90)} pic = {!element.urlToImage?'https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=cae8s_ncw2axGBVrD5vJR6DBqmVbQkKfAP1ecKUvQzQ=':element.urlToImage} newsUrl = {element.url}/>
            </div>
          })}
        
       
        </div>
        <div className='container d-flex justify-content-between my-3'>
        <button disabled = {this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrev}>&larr; Prev</button>
        <button disabled = {Math.ceil(this.state.totalArticles/this.props.pageSize) < (this.state.page+1)} type="button" className="btn btn-dark mx-3 " onClick={this.handleNext}>Next &rarr;</button>
        </div>
        </div>              
     
    )
  }

}