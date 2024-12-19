// const URL = "https://soniajv-ionic.github.io/movies-250.json";
const API_KEY = 'ce56ccb0';
const COMMON_REQUEST = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

let allMovies;
let filteredMovies;

function generateCard(movie) {
  // 0. Se cambia el contador de número de peliculas
  document.querySelector(".movie-counter").textContent = filteredMovies.length;

  //1. Crear la tarjeta
  const newCard = document.createElement("div"); //Crea un elemento de tipo div
  newCard.setAttribute("class", "movie-card");

  //2. Crear la imagen
  const newImage = document.createElement("img");
  newImage.setAttribute("src", movie.Poster);
  newImage.setAttribute("alt", `Póster de la película ${movie.Title}`);
  newCard.appendChild(newImage);

  //3. Crear el contenido de la tarjeta
  const newContent = document.createElement("div");
  newContent.setAttribute("class", "card-content");
  newCard.appendChild(newContent);

  //4. Crear el h2 del título <h2>El Padrino</h2>
  const newTitle = document.createElement("h2");
  newTitle.textContent = movie.Title;
  newContent.appendChild(newTitle);

  //5. Crear el director <p><strong>Director:</strong> Francis Ford Coppola</p>
  const newParagraphDirector = document.createElement("p");
  const newBoldDirector = document.createElement("strong");
  newParagraphDirector.appendChild(newBoldDirector);
  newBoldDirector.textContent = "Director: ";
  newContent.appendChild(newParagraphDirector);
  const nameDirector = document.createTextNode(movie.Director);
  newParagraphDirector.appendChild(nameDirector);

  // 6. Crear el año <p><strong>Año: </strong>1985</p>
  const newParagraphYear = document.createElement("p");
  const newBoldYear = document.createElement("strong");
  newParagraphYear.appendChild(newBoldYear);
  newBoldYear.textContent = "Año: ";
  newContent.appendChild(newParagraphYear);
  const movieYear = document.createTextNode(movie.Year);
  newParagraphYear.appendChild(movieYear);

  // 7. Crear el genero <p><strong>Año: </strong>Sci-Fi</p>
  const newParagraphGenre = document.createElement("p");
  const newBoldGenre = document.createElement("strong");
  newParagraphGenre.appendChild(newBoldGenre);
  newBoldGenre.textContent = "Género: ";
  newContent.appendChild(newParagraphGenre);
  const movieGenre = document.createTextNode(movie.Genre);
  newParagraphGenre.appendChild(movieGenre);

  // 8. Crear la duración <p><strong>Duración: </strong>122 min</p>
  const newParagraphRuntime = document.createElement("p");
  const newBoldRuntime = document.createElement("strong");
  newParagraphRuntime.appendChild(newBoldRuntime);
  newBoldRuntime.textContent = "Duración: ";
  newContent.appendChild(newParagraphRuntime);
  const runtime = document.createTextNode(movie.Runtime);
  newParagraphRuntime.appendChild(runtime);

  // 9. Se agrega la ficha al contenedor de peliculas
  document.querySelector(".movie-container").appendChild(newCard);
}

function generateGenre(movies) {
  let setGenre = new Set();
  movies.forEach((movie) => {
    let genres = movie.Genre.split(",").map((genre) => genre.trim());
    genres.forEach((genre) => setGenre.add(genre));
  });

  let arrayGenre = Array.from(setGenre); // se convierte el conjunto en un array
  arrayGenre.sort().forEach((genre) => {
    let genreOption = document.createElement("option");
    genreOption.setAttribute("value", genre.toLowerCase());
    genreOption.textContent = genre;
    document.querySelector("#genre-select").appendChild(genreOption);
  });
}

function processMovie(data) {
  allMovies = data.movies; // Son los datos de la peliculas que vienen del json
  filteredMovies = Array.from(allMovies);
  generateGenre(allMovies);
  allMovies.forEach((movie) => {
    generateCard(movie);
  });
}

function clearCards() {
  document.querySelectorAll(".movie-card").forEach((card) => card.remove());
}

doGetRequest(URL, processMovie);
