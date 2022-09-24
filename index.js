//console.log('Hello World!')


const addForm = document.querySelector('form')
addForm.addEventListener('submit', addMovie)
const asideMsg = document.querySelector('aside')



function addMovie(e) {
    e.preventDefault()
    const inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value 
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
  
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    const movieList = document.querySelector('ul')
    movieList.appendChild(movie)
}

function deleteMovie(e) {
e.target.parentNode.remove()
asideMsg.textContent = 'Movie Deleted!'

}

function crossOffMovie(e) {
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')=== true){
        message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie Added Back!'
    }

}