document.querySelector("#title-button").addEventListener("click", () => {
  clearCards();
  const searchText = document.querySelector("#title-input").value;
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toUpperCase().includes(searchText.trim().toUpperCase())
  );
  filteredMovies.forEach((movie) => {
    generateCard(movie);
  });
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
  console.log("Opción seleccionada:", event.target.value);
  const filteredMovies = movies.filter((movie) =>
    movie.Genre.toUpperCase().includes(event.target.value.toUpperCase())
  );
  console.log(filteredMovies);
  filteredMovies.forEach((movie) => {
    generateCard(movie);
  });
});
