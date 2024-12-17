document.querySelector("#btn-titulo").addEventListener("click", () => {
    clearCards();
    const searchText = document.querySelector("#titulo").value;
    const filteredMovies =
        movies.filter(movie =>
            movie.Title
                .toUpperCase()
                .includes(searchText.trim().toUpperCase()));
        filteredMovies.forEach(movie => {
        generateCard(movie);
    });
});