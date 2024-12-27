import React from "react";
import Lottie from "react-lottie";
import animationData from './assets/animations/Loading.json'

const Loader = () => {
    const defaultOptions ={
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
  return (
    <div><Lottie options={defaultOptions}/></div>
  )
}

export default Loader