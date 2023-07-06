import React from 'react';

function UserFavoriteColors(props) {
  const favoriteAnimals = props.favoriteAnimals.map((animal, index) => (
    <li key={index}>{animal}</li>
  ));

  return (
    <div>
      <h3>Favorite Animals:</h3>
      <ul>{favoriteAnimals}</ul>
    </div>
  );
}

export default UserFavoriteColors;