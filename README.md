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

1. **Clone the repository**:

   ```sh
   git clone https://github.com/praneethwelideniya/the-lott-coding-test.git
   cd the-lott-coding-test
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Environment Variables**:

   - Create a `.env.local` file for local development:
     ```sh
     touch .env.local
     ```
   - Create a `.env.production` file for production:
     ```sh
     touch .env.production
     ```
   - Add the following environment variable to both files:
     ```sh
     VITE_API_URL=https://data.api.thelott.com
     ```

4. **Run the application locally**:

   ```sh
   npm run dev
   ```

   This will run the application on `http://localhost:5173/`.

5. **Build the application for production**:

   ```sh
   npm run build
   ```

6. **Run tests**:

   ```sh
   npm run test
   ```

7. **Run tests with coverage**:
   ```sh
   npm run test-coverage
   ```
