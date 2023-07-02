// Waiting for the DOM to load
document.addEventListener('DOMContentLoaded', function(){
    displayMenu(); // Display the movie list
    movieDetails(); // Display details of the first movie
});

// Fetch movie data and display movie details
function movieDetails() {
    return fetch('http://localhost:3000/films') // Makes a GET request to fetch movie data
        .then((resp) => resp.json()) // Converts the response to JSON format
        .then((json) => displayMovies(json)); // Passes the movie data to displayMovies function
}

// Display the details of the first movie on the webpage
function displayMovies(movies) {
    const div = document.querySelector('div');
    div.innerHTML = '';

    // Displaying the first movie details
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

    const filmItems = document.querySelectorAll('.film-item');
    filmItems.forEach((filmItem, index) => {
        filmItem.addEventListener('click', () => {
            if (movies[index] && movies[index].id) {
                const filmId = movies[index].id; // Get the movie ID from the movies array
                fetch(`http://localhost:3000/films/${filmId}`) // Make a GET request for the specific movie
                    .then((resp) => resp.json()) // Convert the response to JavaScript
                    .then((json) => displayMovies([json])); // Pass the movie data to displayMovies
            }
        });
    });
}

// Fetch movie data and display movie list
function displayMenu() {

    fetch('http://localhost:3000/films')
        .then((resp) => resp.json())
        .then((json) => movieList(json));
}

// Show a list of movies on the webpage
function movieList(films) {
    let showListHTML = '';
    films.forEach((film) => {
        showListHTML += `<li class="film-item">${film.title}</li>`;
    });

    let filmsList = document.getElementById('films');
    filmsList.innerHTML = ''; // Clear the existing content
    filmsList.insertAdjacentHTML('beforeend', showListHTML);
}

// Buy a movie ticket
function buyTicket(movie) {
    let { tickets_sold } = movie;
    let fullCapacity = 150;

    if (tickets_sold >= fullCapacity) {
        alert('Sorry, sold out.');
        return;
    }
    tickets_sold++;

    const ticketCountElement = document.getElementById('ticketCount');
    ticketCountElement.textContent = fullCapacity - tickets_sold;
}
