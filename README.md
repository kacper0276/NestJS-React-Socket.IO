# Chat App

Chat App is a web application for real-time messaging, developed with NestJS for the backend and React for the frontend. The application allows users to engage in instant chat, join multiple chat rooms, and view the online status of other users.

## Features

- **Real-time Messaging**: Users can send and receive messages instantly.

## Technologies

### Backend

- **NestJS**: A Node.js framework for building efficient and scalable server-side applications.
- **Socket.IO**: Provides real-time, bidirectional communication between clients and servers.
- **TypeORM**: An ORM for TypeScript and JavaScript, facilitating database interaction.

### Frontend

- **React**: A library for building user interfaces, especially single-page applications.
- **Socket.IO Client**: A library for connecting to the Socket.IO server and managing real-time communication.
- **Redux**: A state management library for handling application state in a predictable manner.
- **React Router**: A library for handling routing in React applications.

## Installation

To set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/kacper0276/NestJS-React-Socket.IO.git
    ```

2. **Navigate to the backend directory**:
    ```bash
    cd NestJS-React-Socket.IO/backend
    ```

3. **Install backend dependencies**:
    ```bash
    npm install
    ```

4. **Start the NestJS server**:
    ```bash
    npm run start:dev
    ```

5. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

6. **Install frontend dependencies**:
    ```bash
    npm install
    ```

7. **Start the React development server**:
    ```bash
    npm start
    ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Configuration

### Backend

Adjust PostgreSQL database settings in `src/config/database.config.ts`.

### Frontend

Configure API endpoints and other settings in `src/config/api.config.js`.

## Contributing

Contributions are welcome! To contribute, please fork the repository and create a pull request. Be sure to review the contribution guidelines and coding standards before submitting changes.
