document.querySelector("#title-button").addEventListener("click", () => {
  clearCards();
  const searchText = document.querySelector("#title-input").value;
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toUpperCase().includes(searchText.trim().toUpperCase())
  );
  /*filteredMovies.forEach((movie) => {
    generateCard(movie);
  }); */
  filteredMovies.map(generateCard);
});

document.querySelector("#actor-button").addEventListener("click", () => {
  clearCards();
  const searchText = document.querySelector("#actor-input").value;
  const filteredMovies = movies.filter((movie) =>
    movie.Actors.toUpperCase().includes(searchText.trim().toUpperCase())
  );
  filteredMovies.forEach((movie) => {
    generateCard(movie);
  });
});

document.querySelector("#genre-select").addEventListener("change", (event) => {
  clearCards();
  const filteredMovies = movies.filter((movie) =>
    movie.Genre.toUpperCase().includes(event.target.value.toUpperCase())
  );
  filteredMovies.forEach((movie) => {
    generateCard(movie);
  });
});

document.querySelector("#year-button").addEventListener("click", () => {
  clearCards();
  const searchText = document.querySelector("#year-input").value;
  const filteredMovies = movies.filter((movie) =>
    movie.Year.toUpperCase().includes(searchText.trim().toUpperCase())
  );
  filteredMovies.forEach((movie) => {
    generateCard(movie);
  });
});


let orderedMovies = () => {
  movies.sort((movie1, movie2) => {
    return parseInt(movie1.Runtime) - parseInt(movie2.Runtime);
  });
  return movies;
}

document.querySelector("#runtime-button").addEventListener("click", () => {
  clearCards();
  const selectionOrder = document.querySelector('input[name="runtime"]:checked').value;
  let movieList;
  if (selectionOrder === 'runtime-asc') {
    movieList = orderedMovies().reverse();
  } else {
    movieList = orderedMovies();
  }
  movieList.forEach((movie) => {
    generateCard(movie);
  });
});