import React, { Component } from 'react'
import ProblemSection from './problem_section/ProblemSection'
import SubmitSection from './submit_section/SubmitSection'
import Tabs from '../../global_components/tab_controller/Tabs'
import Logout from '../../global_components/logout/Logout';
import SuccessSection from './success_section/SuccessSection';

import './problem.css'

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
                
                <div className="flexed">
                    <h1>{this.state.problem_id}</h1>
                    <div className="logout"><Logout /></div>
                </div>

            <div className="flexed">    
                <div>
                    <Tabs className ="tabs">
                        <div label="Problems">
                            <ProblemSection/>
                        </div>

                        <div label="Submit">
                            <SubmitSection/>
                        </div>
                    </Tabs>
                </div>
                <div>
                    <SuccessSection/>
                </div>
            </div>
            </>
        );
    }
}
