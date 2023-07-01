// Waiting for the DOM to load
document.addEventListener('DOMContentLoaded', function(){
    displayMenu();
    movieDetails();
});
function movieDetails(){
return fetch('http://localhost:3000/films')// Makes a GET request
 .then((resp) => resp.json())// Converts the responce
 .then((json) => displayMovies(json));// Passes the movie date to displayMovies 
}
// Show the details of the first on the webpage
function displayMovies(movies){
 const div = document.querySelector('div');
 div.innerHTML = ''; //clear the div element before rendering
 
 let firstMovie = movies[0]; // Get the first movie from the array
 let { poster, title, runtime, showtime, tickets_sold } = firstMovie;
 let fullCapacity = 100; // Based on assumption

 let availableTickets = fullCapacity - tickets_sold;
 let movieDetailsHTML = `
 <div id='film'>
 <img src='${poster}' alt= 'Movie Poster'>
 <h2>${title}</h2>
 <p>Showtime: ${showtime}</p>
 <p>Available Tickecks: ${availableTickets}</p>
 </div>
 `;
 div.innerHTML = movieDetailsHTML;
 displayMenu()
}
function displayMenu(){
    // Make a GET request
 fetch('http://localhost:3000/films')
  .then((resp) => resp.json())// Convert the resp to a javascript
  .then((json) => movieList(json));// pass the data to movieList
}
// show a list of movies on the webpage
function movieList(films) {
    let showListHTML = '';
    films.forEach((film) => {
      showListHTML += `<li class="film-item">${film.title}</li>`;
    });
  
    const filmsList = document.getElementById('films');
    if (!filmsList) {
      // Create the <ul> element if it doesn't exist
      const ul = document.createElement('ul');
      ul.id = 'films';
      document.body.appendChild(ul); 
      filmsList = ul;
    }
  
    filmsList.innerHTML = ''; // Clear the existing content
    filmsList.insertAdjacentHTML('beforeend', showListHTML);
  }
  
 


