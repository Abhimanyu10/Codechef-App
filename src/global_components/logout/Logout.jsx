import React, { Component } from 'react'
import './out.css';
import {Link , withRouter} from "react-router-dom";
import Button from '@material-ui/core/Button';
class Logout extends Component {

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        return <Link to = "/" />
    }

    render() {
        return (
            <div><Link to = "/">
                    <Button variant="outlined" color="secondary" onClick = {this.handleLogout}>Logout</Button>
                </Link>
            </div>
        )
    }
}

export default Logout