import React, { Component } from 'react'
import loading from './Book.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3 ' style={{margin: '105px 105px'}}>
        <i class="bi bi-house-door h1">
        <img src = {loading} alt = 'Loadig...'/></i>
      </div>
    )
  }
}
