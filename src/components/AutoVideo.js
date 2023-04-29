import React, { useEffect, useRef } from 'react'
import './AutoVideo.css'

const AutoVideo = ({ src, width, height, controls }) => {
    console.log('start on auto video component')
    const videoRef = useRef(null);

    useEffect(() => {
        console.log('in auto video use effect');
        videoRef.current.play();
    }, []);

    return (
        <div className="video-container">
            <video ref={videoRef} width={width} height={height} controls={controls} autoPlay muted>
                <source src={src}/> 
                Your auto video starts
            </video>
        </div>
    );
}

export default AutoVideo;