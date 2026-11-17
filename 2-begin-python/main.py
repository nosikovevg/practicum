import random
import uvicorn
from fastapi import FastAPI


app = FastAPI()

@app.get("/")
def home():
    return {"data": "message"}


@app.get("/score")
def score():
    approved = random.choice([False, True])
    return {"approved": approved}


if __name__ == '__main__':
    uvicorn.run("main:app", host='0.0.0.0', port=8080, reload=True)