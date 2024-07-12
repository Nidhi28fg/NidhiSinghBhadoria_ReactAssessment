import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  const { pointsPerGame, assistsPerGame, reboundsPerGame } = stats;
  return ( 
    <div className="player-card">
      <img className="player-image" src={image} alt={`${name}'s portrait`} />
      <div className="player-info">
        <h3 className="player-name">{name}</h3>
        <p className="player-position">{position}</p>
        <ul className="player-stats">
          <li>
            <span className="stat-label">Points per Game:</span>
            <span className="stat-value">{pointsPerGame}</span>
          </li>
          <li>
            <span className="stat-label">Assists per Game:</span>
            <span className="stat-value">{assistsPerGame}</span>
          </li>
          <li>
            <span className="stat-label">Rebounds per Game:</span>
            <span className="stat-value">{reboundsPerGame}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
