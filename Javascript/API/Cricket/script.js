const viewBtn = document.getElementById("viewData");

viewBtn.addEventListener("click", () => {
  fetch(
    "https://api.cricapi.com/v1/cricScore?apikey=9066e13b-33dd-45b4-b18e-0f72f5b34a20"
  )
    .then((result) => result.json())
    .then((result) => {
      let movie = "";

      result.data.forEach((match) => {
        movie += match.status + "<br> <br>";
      });

      document.getElementById("displayData").innerHTML = movie;
    })
    .catch((err) => {
      console.log(err);
    });
});
