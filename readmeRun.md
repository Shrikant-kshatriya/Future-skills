# Help Center Project

This project is a Help Center application built with a Vite-powered React frontend and a Node.js/Express backend. The frontend uses Tailwind CSS for styling, and the backend connects to MongoDB.

## Prerequisites

- Node.js installed on your system.
- MongoDB database connection string.
- Basic knowledge of npm and how to run commands in the terminal.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Setting Up the Backend

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create an `.env` file in the `backend` directory with the following content:

   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. **Start the Backend Server**:
   ```bash
   node index.js
   ```
   The backend server will start on `http://localhost:3050`.

### Setting Up the Frontend

1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**:
   ```bash
   npm run dev
   ```
   The frontend development server will start on `http://localhost:5173` by default.

### Access the Application

- **Frontend**: Visit `http://localhost:5173` in your browser.
- **Backend**: The backend runs on `http://localhost:3050`.

## Project Structure

- **backend**: Contains the Express server code.
- **frontend**: Contains the Vite/React application code.

## API Endpoints

- `GET /cards`: Fetch all cards.
- `POST /cards`: Create a new card.
- `GET /cards/:title`: Fetch a single card by title.

## Notes

- The backend requires a MongoDB database connection string stored in the `.env` file.
- The frontend and backend must be run separately. Make sure both are running simultaneously for the application to function correctly.

## Contributing

Feel free to submit issues and pull requests if you find any bugs or want to contribute to the project.

## License

This project is licensed under the MIT License.
