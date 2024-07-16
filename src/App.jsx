import React from 'react';
import './App.css'; 
import BasketballPlayerCard from './BasketballPlayerCard.jsx'; 
import Profile from './ProfilePic/Joseph.jpg';

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name="Stephen Curry" 
        image={Profile}
        position="Point Guard"
        stats={{ pointsPerGame: 30.1, assistsPerGame: 6.7, reboundsPerGame: 5.1 }}
      />
    </div>
  );
}

export default App;
