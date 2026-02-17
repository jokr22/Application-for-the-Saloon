# Apon Saloon - Full Stack Web Application

A modern saloon management website built with React.js, Node.js, Express, PostgreSQL, and Docker.

## Features

- **Home Page**: Hero section, featured services, why choose us, call-to-action
- **Services**: Complete list of saloon services with pricing
- **Booking**: Online appointment booking system
- **Gallery**: Image gallery with category filtering
- **Contact**: Contact form and business information

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose

## Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker)

## Project Structure

```
apon-saloon/
├── backend/              # Node.js API server
│   ├── src/
│   │   ├── config/     # Database configuration
│   │   ├── controllers/ # Request handlers
│   │   ├── routes/     # API routes
│   │   └── index.js    # Server entry point
│   ├── package.json
│   └── Dockerfile
├── frontend/            # React.js application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/     # Page components
│   │   ├── App.jsx    # Main App component
│   │   └── index.jsx  # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
├── docker-compose.yml   # Docker orchestration
└── README.md          # Project documentation
```

## Getting Started

### Option 1: Using Docker (Recommended)

1. Clone the repository
2. Navigate to the project directory
3. Run the following command:

```
bash
docker-compose up --build
```

This will start:

- PostgreSQL database on port 5432
- Backend API server on port 5000
- Frontend React application on port 3000

4. Open your browser and visit: http://localhost:3000

### Option 2: Running Locally

#### Backend Setup

1. Navigate to the backend directory:

```
bash
cd backend
```

2. Install dependencies:

```
bash
npm install
```

3. Set up PostgreSQL database and run the schema:

```
bash
psql -U postgres -f src/schema.sql
```

4. Create a .env file in the backend directory:

```
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=navy_anchorage
DB_PASSWORD=postgres
DB_PORT=5432
```

5. Start the backend server:

```
bash
npm start
```

#### Frontend Setup

1. Navigate to the frontend directory:

```
bash
cd frontend
```

2. Install dependencies:

```
bash
npm install
```

3. Start the development server:

```
bash
npm run dev
```

4. Open your browser and visit: http://localhost:3000



## License

ISC
