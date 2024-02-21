# Cinemania

Cinemania is a comprehensive platform that provides a centralized repository for cinema-related data. Whether you're a movie enthusiast, a filmmaker, or a cinema buff, Cinemania offers a one-stop solution to access information about various cinemas worldwide.

**Live Website:** [Cinemania Live](https://cinemania.pratikgaikwad.in)

## Features

- **Extensive Cinema Database:** Cinemania hosts a vast database of cinemas, including details such as location, facilities, showtimes, and more.

- **User-friendly Interface:** Our website boasts an intuitive and user-friendly interface, making it easy for users to navigate and find the information they need.

- **Search Functionality:** Use our powerful search feature to find cinemas based on location, movie availability, or specific criteria.

- **Up-to-date Information:** Cinemania ensures that the data is regularly updated, providing users with the latest information about cinemas and their offerings.

## Getting Started

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed.
- Clone the repository: `git clone https://github.com/ghpratik/cinemania.git`
- Navigate to the project directory: `cd cinemania`

### API Key Setup

To fetch movie-related data, Cinemania uses The Movie Database (TMDb) API. To set up the API key, follow these steps:

1. Visit [TMDb website](https://www.themoviedb.org/) and create an account.

2. Once logged in, go to your account settings and create an API key.

3. Create a `.env` file in the project root and add your API key:

   ```plaintext
   VITE_APP_TMDB_TOKEN=your_tmdb_api_key
   ```
Replace `your_tmdb_api_key` with the actual API key you obtained from TMDb.

### Installation

1. Install dependencies: `npm install`
2. Start the development server: `npm dev`

The application will be accessible at [http://localhost:5173](http://localhost:5173).

## Author

- **Pratik Gaikwad**
  - Contact: pratik2000gaikwad@outlook.com

## Contributing

We welcome contributions from the community. If you find a bug or have an idea for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing valuable movie-related data.

Happy exploring cinemas with Cinemania!
