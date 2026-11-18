import random
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from typing import Optional

app = FastAPI()


@app.get("/")
async def hhh():
    return {"data": "message"}

 
@app.get("/aga", response_class=HTMLResponse)
async def aaa():
    html ="<div style='background-color: yellow;'>" \
    "<p style='background-color: green; color: blue;font-size: 24px;background-color: yellow;'>" \
    "" \
    "Пример текста" \
    "</p></div>"
    return html

@app.get("/bum")
async def bbb():
    approved = random.choice([False, True])
    return {"approved": approved}
#*************************************************
posts = [
    {'id':1, 'title': 'News 1', 'body': 'Text 1'},
    {'id':2, 'title': 'News 2', 'body': 'Text 2'},
    {'id':3, 'title': 'News 3', 'body': 'Text 3'},
    {'id':4, 'title': 'News 4', 'body': 'Text 4'},
]
#*************************************************
# вернет все значения списка posts
@app.get("/items")
async def iii():
    return posts

# Запрос типа: http://localhost:8080/items/3 
@app.get("/items/{id}")
async def indiv (id:int) -> dict:
        for post in posts:
             if post['id']== id:
                  return post
             
        raise HTTPException(status_code=404, detail='Post not found')
#*************************************************
# Запрос типа: http://localhost:8080/search?post_id=3

@app.get("/search") # аргумент может быть или не быть (опциональный), его значение имеет тип int
async def sss (post_id: Optional[int] = None) -> dict:
    if post_id:    
        for post in posts:
             if post['id']== post_id:
                  return post
             
        raise HTTPException(status_code=404, detail='Post not found')
    else:
         return{"data": "No post id provided"}

#*************************************************

if __name__ == '__main__':
    uvicorn.run("main:app", host='0.0.0.0', port=8080, reload=True)
    