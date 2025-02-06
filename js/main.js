// (()=>{
//     console.log('iife fired')

//     const names = document.querySelectorAll('.name')
//     const infoBox = document.querySelector('.info-div')
//     const title = document.querySelector('.movie-title')
//     const baseUrl = "https://swapi.dev/api/";

//     function getMovies() {
//         fetch(${baseUrl}?q=terminator)
//         .then(response => response.json())
//         .then(function(response) {
//             console.log(response);
//             const movies = response.description;
//             const ul = document.createElement("ul");
//             movies.forEach(movie => {
//                 const li = document.createElement("li");
//                 const a = document.createElement("a");
//                 a.textContent = movie["#TITLE"];
//                 a.dataset.review = movie["#IMDB_ID"];
//                 li.appendChild(a);
//                 ul.appendChild(li);
//             })
//             movieBox.appendChild(ul);
//         })
//         .then(function() {
//             const links = document.querySelectorAll("#movie-box li a");
//             links.forEach(function(link){
//                 link.addEventListener("click", getReview)
//             })
//         })
//         .catch(function(err) {
//             console.log(err);
//         })
//     }
// })();