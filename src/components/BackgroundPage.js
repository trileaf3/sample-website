import React from 'react';
import './BackgroundPage.css';

function BackgroundPage({ children, image }) {
    const backgroundImageStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/${image})`,
    };

    return (
        <div className="background-page" style={backgroundImageStyle}>
            {children}
        </div>
    );
}

export default BackgroundPage;
