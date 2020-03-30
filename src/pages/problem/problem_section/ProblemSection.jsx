import React, { Component } from 'react'
import "./problem_section.css"

export default class ProblemSection extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            maxTimeLimit: "",
            body: ""
        }

        this.test = this.test.bind(this);
    }

    test() {
        this.setState({
            body: 
                        `You are given a sequence a1,a2,…,an consisting of n non-zero integers (i.e. ai≠0).

                        You have to calculate two following values:

                        the number of pairs of indices (l,r) (l≤r) such that al⋅al+1…ar−1⋅ar is negative;
                        the number of pairs of indices (l,r) (l≤r) such that al⋅al+1…ar−1⋅ar is positive;
                        
                        Input:
                        The first line contains one integer n (1≤n≤2⋅10^5) — the number of elements in the sequence.

                        The second line contains n integers a1,a2,…,an (−10^9≤ai≤10^9;ai≠0) — the elements of the sequence.

                        Output
                        Print two integers — the number of subsegments with negative product and the number of subsegments with positive product, respectively.`,
            
        })

        //sample_io is an array object {input : " " , output = " "}
    }

    componentDidMount() {
        // fetch_problem();
        this.setState({
            body: this.props.data.body,
            maxTimeLimit: this.props.maxTimeLimit,
        })
    }


    render() {

       
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.state.body}}></div>
                <div>{this.state.maxTimeLimit}</div>
            </div>
        )
    }
}
