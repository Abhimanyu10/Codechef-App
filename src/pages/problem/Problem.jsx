import React, { Component } from 'react'
import ProblemSection from './problem_section/ProblemSection'
import SubmitSection from './submit_section/SubmitSection'
import Tabs from '../../global_components/tab_controller/Tabs'

export default class Problem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            problem_id : ""
        }
        this.test = this.test.bind(this)
    }

    test() {
        this.setState({
            problem_id : "ANJKD123"
        })
    }
    
    componentDidMount() {
        this.test();
    }

    render() {
        return (
            <>
                <h1>{this.state.problem_id}</h1>
                <div>
                <Tabs>
                    <div label="Problems">
                        <ProblemSection/>
                    </div>

                    <div label="Submit">
                        <SubmitSection/>
                    </div>
                </Tabs>
                </div>
            </>
        );
    }
}
