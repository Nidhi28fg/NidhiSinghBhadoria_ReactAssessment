import React from 'react';
import './App.css'; // Import CSS if needed
import BasketballPlayerCard from './BasketballPlayerCard.jsx'; // Assuming BasketballPlayerCard.js
import Profile from './ProfilePic/Joseph.jpg';

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name="Stephen Curry" // Provide player information as props
        image={Profile}
        position="Point Guard"
        stats={{ pointsPerGame: 30.1, assistsPerGame: 6.7, reboundsPerGame: 5.1 }}
      />
    </div>
  );
}

export default App;
