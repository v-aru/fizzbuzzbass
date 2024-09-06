from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#Define the request model (required for input validation)
class NumberInput (BaseModel) :
    number: int

#Logic for the fizzbuzzbass application
def fizzbuzzbass (number: int) -> str :
    if number != 0 :
        if number % 3 == 0 and number % 5 == 0:
            return "Bass"
        elif number % 3 == 0:
            return "Fizz"
        elif number % 5 == 0:
            return "Buzz"
        else:
            return str(number)
    else :
        return "Please enter a number other than zero!"
    
@app.post("/api/fizzbuzzbass")
async def get_fizzbuzzbass(input_data: NumberInput):
    result = fizzbuzzbass(input_data.number)
    return {"result": result}