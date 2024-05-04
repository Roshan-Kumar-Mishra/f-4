import React from 'react';

function GenreFilter({ genres }) {
  const handleClick = (genre) => {
    console.log(`Filtering by ${genre}`);
  };

  return (
    <div className='filter'>
      <h2>Filter by Genre</h2>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;