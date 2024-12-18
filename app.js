const URL = "https://soniajv-ionic.github.io/movies-250.json";

let movies;

function generateCard(movie) {
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
  // 6. Año
  const newParagraphYear = document.createElement("p");
  const newBoldYear = document.createElement("strong");
  newParagraphYear.appendChild(newBoldYear);
  newBoldYear.textContent = "Año: ";
  newContent.appendChild(newParagraphYear);
  const movieYear = document.createTextNode(movie.Year);
  newParagraphYear.appendChild(movieYear);
  // 7. Genero
  const newParagraphGenre = document.createElement("p");
  const newBoldGenre = document.createElement("strong");
  newParagraphGenre.appendChild(newBoldGenre);
  newBoldGenre.textContent = "Género: ";
  newContent.appendChild(newParagraphGenre);
  const movieGenre = document.createTextNode(movie.Genre);
  newParagraphGenre.appendChild(movieGenre);
  // 8. Duración
  const newParagraphRuntime = document.createElement("p");
  const newBoldRuntime = document.createElement("strong");
  newParagraphRuntime.appendChild(newBoldRuntime);
  newBoldRuntime.textContent = "Duración: ";
  newContent.appendChild(newParagraphRuntime);
  const runtime = document.createTextNode(movie.Runtime);
  newParagraphRuntime.appendChild(runtime);

  document.querySelector("#movieContainer").appendChild(newCard);
}

function processGenre(movie) {
  let setGenre = new Set();
  let genres = movie.Genre.split(',').map(genre =>genre.trim());
  genres.forEach(genre => setGenre.add(genre));

  setGenre.forEach(genre => {
    let genreOption = document.createElement('option');
    genreOption.setAttribute('value', genre.toLowerCase());
    genreOption.textContent=genre;
    document.querySelector('#genre-select').appendChild(genreOption);
  })
}

function processMovie(data) {

  data.movies.forEach((movie) => {

    generateCard(movie);
    generareGenre(movie)
  });
}

function clearCards() {
  document.querySelectorAll(".movie-card").forEach((card) => card.remove());
}

doGetRequest(URL, processMovie);
