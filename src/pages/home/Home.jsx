import React, { Component } from 'react'
import ImageSlider from './image_slider/ImageSlider'
import LoginPage from './login/Login'
import './home.css'
import Login from './login/Login'
import { Grid } from '@material-ui/core'
import Slider from './image_slider/Slider'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="imag">
                    <ImageSlider />
                </div>
                <div className = "login">
                    <Login/>
                    
                </div>
            </div>
        )
    }
}
