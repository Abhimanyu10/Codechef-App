import React, { Component } from 'react'
import Home from './pages/home/Home'
import Selector from './pages/selection/Selector'
import ContestPage from './pages/contest/ContestPage'
import ProblemSection from './pages/problem/problem_section/ProblemSection'
import Problem from './pages/problem/Problem'
import SuccessSection from './pages/problem/success_section/SuccessSection'

export default class App extends Component {
  
  render() {
    return (
      <div>
          <Home/>   
      </div>
    )
  }
}

