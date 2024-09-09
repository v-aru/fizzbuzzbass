# FizzBuzzBass Game

This is a simple web application for playing the FizzBuzzBass game. The frontend is built using React and styled with Tailwind CSS, while the backend is powered by FastAPI. 

The user enters a number in the field and the application will return Fizz, Buzz or Bass depending on the number's divisability. 

# Prerequisites
Before running the application locally, ensure that the following software is installed on your machine:

- Node.js (for React frontend)
- Python 3.8+ (for FastAPI backend)
- npm (comes with Node.js)
- pip (for Python dependencies)

## The requirements are as follows:
- The application has one webform in the homepage.
- The form has one text field to enter a numeric value and one submit button.
- When the user enters a number that is multiple of 3 and submits the form, the UI shows the text "Fizz"
- When the user enters a number that is multiple of 5 and submits the form, the UI shows the text "Buzz"
- When the user enters a number that is multiple of 3 and 5, and submits the form, the UI shows the text "Bass"
- When the user enters any other number and submits the form, the UI shows the number given.

Application Implementation: 
Please refer to ./assets/images/image.png

## Development

### Local Development

### Getting Started
1. Clone the Repository
First, clone the repository to your local machine: using the following command: `git clone https://github.com/your-username/fizzbuzzbass.git`

2. Setting Up the Backend (FastAPI)
- Navigate to the backend directory: `cd backend`
- Create and activate a virtual environment: `python3 -m venv venv`, `source venv/bin/activate`
- Install the required Python dependencies: `pip install -r requirements.txt`
- Run the FastAPI server: `uvicorn app.main:app --reload`

This will start the FastAPI server at http://localhost:8000.

3. Setting Up the Frontend (React)
- Navigate to the frontend directory: `cd ../frontend`
- Install the necessary dependencies: `npm install`
- Run the React development server: `npm run dev`

This will start the React frontend at http://localhost:3000.

4. To Run the Test Cases (Both Unit and Acceptance)
- Use `npm run test` to run the tests.
