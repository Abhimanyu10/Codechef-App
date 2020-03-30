import React, { Component } from 'react'
import './problems_display.css'
import data from '../../../data/contest';
import {Route, Link , BrowserRouter as Router} from 'react-router-dom';
import Problem from '../../problem/Problem';
export default class ProblemsDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prob_array:[]
        }
        this.fetch_problems = this.fetch_problems.bind(this)
        this.test = this.test.bind(this)
    }

    test() {
        this.setState({
            prob_array: data.result.data.content.problemsList
        })
    }

    fetch_problems = async endpoint =>{
        const response = await fetch(endpoint)
        //console.log("this",response);
        const json = await response.json()
        //console.log(json)
        this.setState({
            results : json
        });
    }

    options = {
        method : "GET",
        headers : {
            Authorization: '',
            "Content-Type": "application/json",
        },
    }

    componentDidMount() {
        // this.fetch_problems()
        this.test()
    }

    render() {
        const bar = this.state.prob_array.map(prob => (
                <div className="prob" key={prob.problemCode} ><Link to={`problem/${prob.problemCode}`}>{prob.problemCode}</Link></div>
        ));
    
        return (
            <div className="probs">
               {bar} 
            </div>
        )
    }
}
