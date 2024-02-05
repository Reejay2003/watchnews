import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class NewsItem extends Component {
 

  render() {
    let{title,pic,description, newsUrl,author} = this.props
    return (
      <div className='container my-3 mx-3'><div className="card" >
      <img src={pic} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text my-3">{description}...</p>
        <p className="card-text my-3"><small className='text-muted'>By - {author}</small></p>
        <a href={newsUrl} target='_blank' className="btn btn-dark">Go somewhere</a>
      </div>
    </div></div>
    )
  }
}
