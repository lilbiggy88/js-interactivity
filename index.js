//console.log('Hello World!')


const addForm = document.querySelector('form')
addForm.addEventListener('submit', addMovie)


function addMovie(e) {
    e.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    const movieList = document.querySelector('ul')
    movieList.appendChild(movie)
}


