# Google Books Search Engine

## Description

A full-stack MERN application that allows users to search for books via the Google Books API. Users can create an account, search for books, and save their favorite books to their profile. The application uses React for the front end, MongoDB for the database, Node.js/Express.js for the server, and GraphQL with Apollo Server for API queries and mutations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Features

- User authentication (signup/login)
- Book search functionality using Google Books API
- Save books to user profile
- View saved books
- Remove books from saved list
- Responsive design
- GraphQL API
- JWT authentication

## Technologies Used

### Frontend
- React
- Apollo Client
- Bootstrap
- JWT-decode
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Apollo Server
- GraphQL
- JSON Web Tokens
- bcrypt

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/google-books-search.git


2. Install dependencies for both client and server:

npm install
cd client && npm install
cd ../server && npm install


3. Create a `.env` file in the server directory and add your MongoDB URI:

MONGODB_URI=your_mongodb_uri_here


4. Start the development server:

npm run develop


## Usage

1. Navigate to the deployed application or localhost:3000
2. Create an account or log in
3. Search for books using the search bar
4. Click "Save" on any books you'd like to save to your profile
5. View your saved books by clicking "See Your Books" in the navigation
6. Remove books from your saved list by clicking "Delete this Book!"

## Screenshots

[Add screenshots of your application here]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Questions

If you have any questions about the repo, open an issue or contact me directly at [your-email@example.com](mailto:your-email@example.com).

You can find more of my work at [LIstopalfuturo](https://github.com/LIstopalfuturo)