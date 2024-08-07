# Coding Test - Show/Reset Powerball Results

The project includes below features:

- Autofill the previous week’s Powerball draw numbers within a ticket layout via the purple autofill button(flash icon).
- Clear the numbers from the ticket via the grey delete button(trash icon).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vanilla CSS**: For styling the application.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **React Testing Library**: A library for testing React components.

## Setup Steps

**Make sure you have the following installed**:

Node.js (>=18.x) and npm (>=8.x)

**Clone the repository**:

```sh
git clone https://github.com/praneethwelideniya/the-lott-coding-test.git
cd the-lott-coding-test
```

**Install dependencies**:

```sh
npm install
```

**Environment Variables**:

- Create a `.env.local` file for local development:
  ```sh
  touch .env.local
  ```
- Create a `.env.production` file for production:
  ```sh
  touch .env.production
  ```
- Add the following environment variable:
  ```sh
  VITE_API_URL=https://data.api.thelott.com
  ```

**Run the application locally**:

```sh
npm run dev
```

This will run the application on `http://localhost:5173/`.

**Build the application for production**:

```sh
npm run build
```

**Run tests**:

```sh
npm run test
```

**Run tests with coverage**:

```sh
npm run test-coverage
```
