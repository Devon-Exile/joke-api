

    const jokeButton = document.querySelector('#jokesButton')
    const jokeDisplay = document.querySelector('#jokesDisplay')
    const punchlineDisplay = document.querySelector('#punchline')

    
    jokeButton.addEventListener('click', async () => {
        const response = await fetch('/api/v1/random-joke')
        const data = await response.json()
        jokeDisplay.textContent = data.joke
        punchlineDisplay.textContent = data.punchline
    })