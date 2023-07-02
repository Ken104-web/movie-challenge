# Movie Ticket Booking System

This is a simple movie ticket booking system that allows users to view a list of movies, see the details of the first movie, and buy tickets if available.

## Description

- Displays a list of movies fetched from a server.
- Shows details of the first movie including title, poster, showtime, and available tickets.
- Updates the ticket count when a ticket is bought (up to a maximum capacity).
- Allows users to click on movie list items to view details of a specific movie.
- Handles cases where there are no movies or when tickets are sold out.

## Usage
#  user
All you need is:
A laptop

A phone(with stable internet)

# To the Developer

1. Clone the repository: `git clone <git@github.com:Ken104-web/movie-challenge.git>`
2. Open `index.html` in a web browser.
3. The movie list and details will be displayed.
4. Click on a movie in the list to view its details.
5. Click on the "Buy Ticket" button to buy a ticket (if available).

## API Server

This application relies on a server to provide movie data. The server should respond to the following endpoints:

- `GET /films`: Returns a JSON array of movie objects.
- `GET /films/{id}`: Returns a specific movie object based on the provided ID.

Make sure to update the server URL in the code if necessary.

## License

This project is licensed under the [MIT License](LICENSE).
 ## Author 
 Kenneth Mwangi
