import React, {useRef} from 'react'
import './VideoComponent'

const VideoComponent = ({src, width, height, controls}) => {
    console.log('start on video component')
    const videoRef = useRef(null);
    
    const handlePlay = () => {
        console.log('Video started playing');
    }

    const handlePause = () => {
        console.log('Video stopped pause');
    }
    
    // const handleMouseEnter = () => {
    //     console.log('mouse enter');
    //     if (videoRef.current) {
    //         videoRef.current.play();
    //     }
    // }

    // const handleMouseLeave = () => {
    //     console.log('mouse leave');
    //     if (videoRef.current) {
    //         videoRef.current.pause();
    //     }
    // }

    return (
        <div className="video-container">
            <video ref={videoRef} src={src} type="video/mp4" width={width} height={height} controls={controls} onPlay={handlePlay} onPause={handlePause}>
                Your browser starts
            </video>
        </div>
    );
}

export default VideoComponent;