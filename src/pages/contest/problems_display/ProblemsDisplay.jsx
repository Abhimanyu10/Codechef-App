import React, { Component } from 'react'

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
            prob_array: [
                {
                    id: 1,
                    text: "Chef and Blah"
                },
                {
                    id: 2,
                    text: "Chef and Bleh"
                
                },
                {
                    id: 3,
                    text: "Chef and Bloo"
                }
            ]
        })
    }

    fetch_problems() {
        //get problems
    }

    componentDidMount() {
        // this.fetch_problems()
        this.test()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}