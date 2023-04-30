import React from 'react';
import Navbar from './Navbar';
import VideoComponent from './VideoComponent';
import Audio from './Audio';
import AutoVideo from './AutoVideo';
import './Home.css'

const Home = () => {
    console.log('Enter Home');
    const introPath = process.env.PUBLIC_URL + '/video/self-intro.mp4'
    const musicPath = process.env.PUBLIC_URL + '/audio/background-music.mp3'
    const autoVideoPath = process.env.PUBLIC_URL + '/video/autoplay.mp4'
    return (
      <div className="Home">
        <Navbar />
        {/* Background music */}
        <Audio
          src={musicPath}
        />
        <div>
            <h1>Welcome to the Xin's Page</h1>
        </div>
        {/* Intro Video */}
        <VideoComponent
          src={introPath}
          width="480"
          height="640"
          controls
        />
        {/* Auto Video */}
        <AutoVideo
          src={autoVideoPath}
          widtd="480"
          height="640"
          controls
        />
      </div>
    );
};

export default Home;