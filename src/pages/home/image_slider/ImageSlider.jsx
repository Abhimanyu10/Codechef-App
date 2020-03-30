import React from 'react';
import './image_slider.css';

class ImgSlider extends React.Component{
    state = {
        images : [
            "https://s3.amazonaws.com/codechef_shared/download/1-HP-LC-Apr.jpg",
            "https://s3.amazonaws.com/codechef_shared/download/1-HP-CO-Apr.jpg", 
            "https://s3.amazonaws.com/codechef_shared/download/1-HP-CCDSA_SEB.jpg"
        ],
        idx : 0,
        sz : 3
    };

    // ele =

    next = ()=>{
        this.setState({
            idx : (this.state.idx + 1) % this.state.sz
        });
    }

    render(){
        return  (
            <div id = 'img-slider-outer-div'>
                <div >
                    <img src = {this.state.images[this.state.idx] } className = "image" onClick = {this.next}/>
                </div>
            </div>
        );
    }
    
}
// ReactDOM.render(<ImgSlider/>,document.getElementById('test'));

export default ImgSlider;