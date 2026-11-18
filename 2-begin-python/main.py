import random
import uvicorn
from fastapi import FastAPI
app = FastAPI()


@app.get("/")
async def hhh():
    return {"data": "message"}

 
@app.get("/aga")
async def aaa():
    return {"data": "message"}

@app.get("/bum")
async def bbb():
    approved = random.choice([False, True])
    return {"approved": approved}

if __name__ == '__main__':
    uvicorn.run("main:app", host='0.0.0.0', port=8080, reload=True)
    