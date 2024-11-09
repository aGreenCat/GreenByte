import React from 'react';
import './Banner.css';
// import clearGB from '../assets/clearGB.png'; // Adjust the file path and extension as needed

interface BannerProps {
  onAboutMeClick?: () => void ;
  onLeaderboardClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({ onAboutMeClick, onLeaderboardClick}) => {
  return (
    <div className="banner">
		<img src="src/assets/gb.svg" alt="GreenByte Logo" className="logo" width={50}/>
		<h1 className="banner-title">GreenByte</h1>
		
		<div className="button">
			<button className="about-me-button" onClick={onAboutMeClick}>
			About Us 
			</button>
			<button className="leaderboard-button" onClick={onLeaderboardClick}>
				Leaderboard
			</button>
		</div>
    </div>
  );
};

export default Banner;