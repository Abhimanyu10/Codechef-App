import React, {Component} from "react";
import './leaderboard.css'

export default class Leaderboard extends Component{
    
    constructor(){
        super();
        this.state = {
            list : []
        };
        this.test = this.test.bind(this);
        this.fetch_leaderboard = this.fetch_leaderboard.bind(this);
    }

    fetch_leaderboard() {
        //
    }

    // componentDidMount(){
    //     //fetch and all will be here 
    // }

    // test() {
    //     this.setState())
    // }

    test(){
        this.setState({
            list : [
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
            ]
        });
    }
    
    componentWillMount() {
        //fetch_leaderboard()
        this.test();
    }

    render(){
        console.log(this.state.list);

        const ldr = (
            <ul className = "ldr">
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