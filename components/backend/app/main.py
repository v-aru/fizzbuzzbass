from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, field_validator
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
    number: int = Field (..., description="A positive integer")

    @field_validator("number")
    def validate_positive_integer(cls, value):
        if value <= 0:
            raise ValueError("The number must be a positive integer")
        return value
    

#Logic for the fizzbuzzbass application
def fizzbuzzbass (number: int) -> str :
    if number > 0 :
        if number % 3 == 0 and number % 5 == 0:
            return "Bass"
        elif number % 3 == 0:
            return "Fizz"
        elif number % 5 == 0:
            return "Buzz"
        else:
            return str(number)
    else:
        return "Input should only be a positive integer!"
    
@app.post("/api/fizzbuzzbass")
async def get_fizzbuzzbass(input_data: NumberInput):
    try:
        result = fizzbuzzbass(input_data.number)
        return {"result": result}
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
