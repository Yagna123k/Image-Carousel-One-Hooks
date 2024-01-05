import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [curr, setCurr] = useState(0)
    const increase=()=>{
    if(curr == images.length -1){
        setCurr(0)
    }else{
        setCurr(curr+1)
    }
    }

    const decrease=()=>{
    if(curr == 0){
        setCurr(images.length-1)
    }
    else{
        setCurr(curr-1)
    }
    }
      
    return <>
    <h1>Carousel</h1>
    <div className="carousel-container flex">
        <div className="leftArrow arrowDiv flex" onClick={decrease}>
            <ArrowBackIosIcon />
        </div>

        <h2 className="title">{images[curr].title}</h2>
        <img src={images[curr].img} alt="image" />
        <h4 className="caption">{images[curr].subtitle}</h4>

        <div className="rightArrow arrowDiv flex" onClick={increase}>
            <ArrowForwardIosIcon />
        </div>
    </div>
    </>
    
}

export default Carousel;