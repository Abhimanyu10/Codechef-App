import React, {Component} from "react";

export default class Timer extends Component{
    state = {
        min:60,
        sec:30
    }

    componentDidMount(){
        this.myinterval = setInterval(()=>{
            const { min, sec } = this.state
            if(sec > 0){
                this.setState(({sec}) =>({
                    sec : sec - 1
                }))
            }
            if(sec === 0){
                if(min === 0){
                    clearInterval(this.myinterval)
                }
                else{
                    this.setState(({min}) =>({
                        min : min - 1,
                        sec : 59
                    }))
                }
            }
            
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.myinterval)
    }
    
    render(){

        const { min, sec} = this.state
        return(
            <div>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</div>
            
            // <div>
            //     { min === 0 && sec === 0 
            //     ? <h3> Time's up will do something about it</h3> 
            //     : <div><h3>Time Left :</h3><br/><h3>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</h3> </div>
            //     }
            // </div>
        )

    }

}
