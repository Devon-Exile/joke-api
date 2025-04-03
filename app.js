

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const joke = [
    {
        id: 1,
        joke: 'Why did the scarecrow win an award?',
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },  
    {
        id: 3,
        joke: "Who is joe?",
        punchline: "joe-mama"
    },
    {
        id: 4,
        joke: "What's a skeleton's favorite meal?",
        punchline: "Spare ribs"
    }, 
    {
        id: 5,
        joke: "What do you call a guy with no arms and no legs in a pool?",
        punchline: "Bob"
    },
    {
        id: 6,
        joke: "Why was six afraid of seven?",
        punchline: "Seven ate nine"
    }
]


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))




app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.get('/api/v1/random-joke', (request, response) => {
    const randomJoke = joke[Math.floor(Math.random() * joke.length)]
    response.json(randomJoke);
})




app.listen(port, () => console.log(`http://localhost:${port}/`))