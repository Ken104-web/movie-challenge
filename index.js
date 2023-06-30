// Waiting for the DOM to load
document.addEventListener('DOMContentLoaded', function(){
    movieDetails();
});
function movieDetails(){
return fetch('http://localhost:3000/films')// Makes a GET request
 .then((resp) => resp.json())// Converts the responce
 .then((json) => displayMovies(json));// Passes the movie date to displayMovies 
}
// Show a list of films on the webpage
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
};
