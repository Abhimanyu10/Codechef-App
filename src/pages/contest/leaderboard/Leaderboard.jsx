  
import React, {Component} from "react";

const leaders = [
    {
        id:1,
        Name: "Utkarsh"
    },
    {
        id:1,
        Name: "Abhimanyu"
    },
    {
        id:1,
        Name: "Abhishoya"
    }
];


export default class Leaderboard extends Component{
    
    constructor(){
        super();
        this.state = {
            list : []
        };
        this.pushleaders = this.pushleaders.bind(this);
    }
    // componentDidMount(){
    //     //fetch and all will be here 
    // }
    pushleaders(){
        this.setState({
            list : leaders
        });
    }
    componentWillMount(){
        this.pushleaders();
    }
    render(){
        console.log(this.state.list);

        const ldr = (
            <ul>
              {this.state.list.map(leader => (
                <li key={leader.id}>{leader.Name}</li>
              ))}
            </ul>
          );
        return(
            <div>
                {ldr}
            </div>
        )
    }

    
}