# Movie Ticket Booking System

This is a simple movie ticket booking system that allows users to view a list of movies, see the details of each movie, and buy tickets if available.

## Description

- Displays a list of movies fetched from a server.
- Shows details of each movie, including title, poster, showtime, and available tickets.
- Updates the ticket count when a ticket is bought (up to a maximum capacity).
- Allows users to click on movie list items to view details of a specific movie.
- Handles cases where there are no movies or when tickets are sold out.

# Usage

To use this application, you will need:

- A computer or laptop.

- A smartphone with a stable internet connection.

## For Developers

To set up the project locally, follow these steps:

1. Clone the repository: `git clone <git@github.com:Ken104-web/movie-challenge.git>`
2. Open `index.html` in your preferred text editor (e.g., VS Code) or run the following command in your Terminal: `json-server --watch ken.json`.
3. Open `index.html` in a web browser.
4. The movie list and details will be displayed.
5. Click on a movie in the list to view its details.
6. Click on the "Buy Ticket" button to buy a ticket (if available).

## Alternatively

 you can click the link on the right side under the `about` section part
 
## API Server

This application relies on a server to provide movie data. The server should respond to the following endpoints:

- `GET /films`: Returns a JSON array of movie objects.
- `GET /films/{id}`: Returns a specific movie object based on the provided ID.

Make sure to update the server URL in the code if necessary.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Kenneth Mwangi

