import React from 'react';
import './Banner.css';

interface BannerProps {
  onAboutMeClick: () => void;
}

const Banner: React.FC<BannerProps> = ({ onAboutMeClick }) => {
  return (
    <div className="banner">
      <h1 className="banner-title">Welcome to Greenbyte</h1>
      <button className="about-me-button" onClick={onAboutMeClick}>
        About Me
      </button>
    </div>
  );
};

export default Banner;