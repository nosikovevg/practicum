const express = require('express')
const app = express()
///////////////### 1 ###//////////////////////////
app.get('/', (req, res) => {
    res.json({data: 'message'})
})

///////////////### 2 ###//////////////////////////
app.get('/aga', (req, res) => {
    res.send("Helloooooooo!!!!!!!!")
})

///////////////### 3 ###//////////////////////////
app.get('/bum', (req, res) => {
    const options = [false, true];
    var approved = options[Math.floor(Math.random() * options.length)];
        
    res.json({approved: approved})
})
////////////////////////////////////////
const posts = [
  { id: 1, title: 'News 1', body: 'Text 1' },
  { id: 2, title: 'News 2', body: 'Text 2' },
  { id: 3, title: 'News 3', body: 'Text 3' },
  { id: 4, title: 'News 4', body: 'Text 4' },
];
///////////////### 4 ###//////////////////////////
app.get('/items', (req, res) => {
    res.json(posts)
})

///////////////### 5 ###//////////////////////////
// Запрос типа: http://localhost:8080/items/3
app.get('/items/:id', (req, res) => {
  // 1. Получаем параметр из URL и переводим его в число (как id: int в FastAPI)
  const id = Number(req.params.id);

  // 2. Ищем нужный пост в массиве
  const post = posts.find(p => p.id === id);

  // 3. Если пост не найден, возвращаем статус 404 и JSON с ошибкой
  if (!post) {
    return res.status(404).json({ detail: 'Post not found' });
  }

  // 4. Если найден — возвращаем объект поста
  res.json(post);
});


///////////////### 6 ###//////////////////////////



app.listen(3000, () => {
    console.log('Express web app on http://localhost:3000')
})
