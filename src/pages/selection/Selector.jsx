import React, { Component } from 'react'
import Logout from '../../global_components/logout/Logout'
import './selector.css'
export default class Selector extends Component {
    constructor(props) {
      super(props);

        this.state = {
            isContestCodeSelected: 0,
            problem_id : "Enter Problem Code",
        }

        this.onRadioChange = this.onRadioChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onRadioChange() {
        let c = this.state.isContestCodeSelected ^ 1
        this.setState({
            isContestCodeSelected : c
        })
    }

    onTextChange(evt){
        this.setState({
          problem_id : evt.target.value
        })
    }

    onButtonClick(){
        //Make a request for the stored problem id according to the radio button selected
    }

    render() {
        
       let radio_buttons = 
       <div>
           <input type="radio" value="contest-name" checked={!this.state.isContestCodeSelected} onChange={this.onRadioChange}/>
            Contest Name
           <input type="radio" value="contest-code" checked={this.state.isContestCodeSelected} onChange={this.onRadioChange}/>
           Contest Code
       </div>;

        return (
            <>
                <div>
                    <Logout />
                </div>
                <div>
                    {radio_buttons}
                    <input type="text" value= {this.state.problem_id} onChange = {this.onTextChange} />
                    <button onClick = {this.onButtonClick}>Open</button>
                </div>
            </>
        );
    }
}
