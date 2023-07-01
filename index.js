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
function displayMovies(movies) {
    const div = document.querySelector('div');
    div.innerHTML = '';
  
    let firstMovie = movies[0];
    let { poster, title, runtime, showtime, tickets_sold } = firstMovie;
    let fullCapacity = 150;
  
    let availableTickets = fullCapacity - tickets_sold;
  
    let movieDetailsHTML = `
      <div id='film'>
        <img src='${poster}' alt='Movie Poster'>
        <h2>${title}</h2>
        <p>Showtime: ${showtime}</p>
        <p>Available Tickets: <span id="ticketCount">${availableTickets}</span></p>
        <button id="buyTicketButton" ${availableTickets === 0 ? 'disabled' : ''}>Buy Ticket</button>
      </div>
    `;
  
    div.innerHTML = movieDetailsHTML;
  
    const buyTicketButton = document.getElementById('buyTicketButton');
    buyTicketButton.addEventListener('click', () => buyTicket(firstMovie));
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
  function buyTicket(movie){
    let { tickets_sold } = movie;
    let fullCapacity = 100;

    if (tickets_sold >= fullCapacity) {
        alert('Sorry, sold out.');
        return;
    }
    tickets_sold++;

    const ticketCountElement = document.getElementById('ticketCount');
    ticketCountElement.textContent = fullCapacity - tickets_sold;
}
  
 


