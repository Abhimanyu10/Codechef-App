import React, { Component } from 'react'
import ImageSlider from './image_slider/ImageSlider'
import LoginPage from './login/LoginPage'
export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <div><ImageSlider/></div>
                    <div>Image Slider Component Rendered here</div>
                </div>
                <div>
                    <LoginPage/>
                </div>
            </>
        )
    }
}
