
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'




export default class App extends Component {
  pageSize = 5
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
             color='#f11946'
             progress={this.state.progress}
             />
          <Navbar/>   
          <Routes>
          <Route exact path='/' element={<News setProgress = {this.setProgress}  pageSize={this.pageSize}  category="general" />}></Route>
          <Route exact path='/business' element={<News News setProgress = {this.setProgress}  pageSize={this.pageSize}  category="business" />}></Route>
          <Route exact path='/entertainment' element={<News News setProgress = {this.setProgress}  pageSize={this.pageSize}  category="entertainment" />}></Route>
          <Route exact path='/technology' element={<News News setProgress = {this.setProgress}  pageSize={this.pageSize}  category="technology" />}></Route>
          <Route exact path='/health' element={<News News setProgress = {this.setProgress}  pageSize={this.pageSize}  category="health" />}></Route>
          <Route exact path='/science' element={<News News setProgress = {this.setProgress}  pageSize={this.pageSize}  category="science" />}></Route>
          <Route exact path='/sports' element={<News News setProgress = {this.setProgress}  pageSize={this.pageSize}  category="sports" />}></Route>
          </Routes>
        </Router>
      
      </div>
    )
  }
}
