/**
 * Función de búsqueda
 *
 * @param {*} idSearchComponent Nombre del elemento en el que está el texto de búsqueda
 * @param {*} nameAttributeSearch Nombre del atributo del JSON sobre el que hay que buscar
 */
function filterElements(idSearchComponent, nameAtributeSearch) {
  clearCards();
  const searchText = document.querySelector(idSearchComponent).value;
  filteredMovies = allMovies.filter((movie) =>
    movie[nameAtributeSearch]
      .toUpperCase()
      .includes(searchText.trim().toUpperCase())
  );
  filteredMovies.forEach((movie) => {
    generateCard(movie);
  });
  //filteredMovies.map(generateCard);
  // Se podria utilizar el map, pero no seria del todo correcto, ya que no se
  // quiere generar un nuevo array transformado, sino ejecutar una acción por
  // cada elemento del array, por lo que el foreach seria mas apropiado
}

document.querySelector("#title-button").addEventListener("click", () => {
  filterElements("#title-input", "Title");
});

document.querySelector("#actor-button").addEventListener("click", () => {
  filterElements("#actor-input", "Actors");
});

document.querySelector("#genre-select").addEventListener("change", () => {
  filterElements("#genre-select", "Genre");
});

document.querySelector("#year-button").addEventListener("click", () => {
  filterElements("#year-input", "Year");
});

let orderedMovies = (movieList) => {
  movieList.sort((movie1, movie2) => {
    return parseInt(movie1.Runtime) - parseInt(movie2.Runtime);
  });
  return movieList;
};

document.querySelector("#runtime-button").addEventListener("click", () => {
  clearCards();
  const selectionOrder = document.querySelector(
    'input[name="runtime"]:checked'
  ).value;
  if (selectionOrder === "runtime-asc") {
    filteredMovies = orderedMovies(filteredMovies);
  } else {
    filteredMovies = orderedMovies(filteredMovies).reverse();
  }
  filteredMovies.forEach((movie) => {
    generateCard(movie);
  });
});
