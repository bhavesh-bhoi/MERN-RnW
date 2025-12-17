const getMovies = document.getElementById("fetchMovies");
getMovies.addEventListener("click", () => {
  fetch(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  )
    .then((response) => response.json())
    .then((data) => {
      const movieData = data;
      let movies = "";

      movieData.forEach((movie) => {
        movies += movie.Title + "<br/>";
      });
      document.getElementById("movData").innerHTML = movies;
    })
    .catch((err) => console.log(err));
});
