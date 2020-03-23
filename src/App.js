import React, { Component } from 'react'
import Home from './pages/home/Home'
import ContestPage from './pages/contest/ContestPage'
import ProblemSection from './pages/problem/problem_section/ProblemSection'
import Problem from './pages/problem/Problem'

export default class App extends Component {
  
  render() {
    return (
      <div>
          <Problem/>   
      </div>
    )
  }
}

