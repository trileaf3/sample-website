import React, { useState, useRef } from "react";
import './Audio.css'

const AudioPlayer = ({src}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className="audio-player">
            {/* <audio ref={audioRef} src={src} autoPlay muted preload='metadata' /> */}
            <audio ref={audioRef} src={src} type="audio/mp3" preload='metadata' />
            {isPlaying? (
                <button onClick={handlePause}>Pause</button>
            ): (
                <button onClick={handlePlay}>Play</button>
            )}
        </div>
    );

};

export default AudioPlayer;