modal = document.getElementById('modalBackground')
addBookButton = document.getElementById('addBookButton')
bookTitleInput = document.getElementById('bookTitle')
bookAuthorInput = document.getElementById('bookAuthor')
bookPagesInput = document.getElementById('bookPages')
bookStatusInput = document.getElementById('bookStatus')
addBookForm = document.getElementById('addBookForm')
booksContainer = document.getElementById('booksContainer')
searchInput = document.getElementById('searchInput')

bookColors = ['#f79533', '#f37055', '#ef4e7b', '#a166ab', '#5073b8', '#1098ad', '#07b39b', '#6fba82', '#ff6f4f', '#dac6fb', '#029c54']
let bookLibrary = []

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(){
  let title = bookTitleInput.value
  let author = bookAuthorInput.value
  let pages = bookPagesInput.value
  let read = bookStatusInput.checked
  const book = new Book(title,author,pages,read)
  bookLibrary.push(book)
  return book
}

function toogleReadButton(book,readButton){
  if(book.read === true){
    readButton.innerText = "Not read"
    book.read = false
  }
  else{
    readButton.innerText = "Read"
    book.read = true
  }
}

function removeBook(newDiv){
  let bookId = newDiv.dataset.id
  bookLibrary.splice(bookId,1)
  console.log(bookLibrary)
  newDiv.remove()
  let i = 0
  for(let child of booksContainer.children){
    child.dataset.id = i
    i++
  }
}

function displayNewBook(book){
  modal.style.display = "none"
  let randomColor = Math.floor(Math.random() * bookColors.length)
  const newDiv = document.createElement('div')
  newDiv.classList.add("book")
  newDiv.dataset.id = bookLibrary.length-1
  newDiv.style.backgroundColor = bookColors[randomColor]
  const title = document.createElement('p')
  title.innerText = `"${book.title}"`
  const author = document.createElement('p')
  author.innerText = `By ${book.author}`
  const pages = document.createElement('p')
  pages.innerText = `${book.pages} pages`
  const readButton = document.createElement('button')
  if(book.read === true){
    readButton.innerText = "Read"
  }
  else{
    readButton.innerText = "Not read"
  }
  readButton.addEventListener('click', () => {
    toogleReadButton(book,readButton)
  })
  const removeButton = document.createElement('button')
  removeButton.innerText = "Remove"
  removeButton.addEventListener('click', () => {
    removeBook(newDiv)
  })
  newDiv.append(title,author,pages,readButton,removeButton)
  booksContainer.appendChild(newDiv)
}

addBookButton.addEventListener('click', () => {
  modal.style.display = "flex"
})

window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none"
  }
}

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let book = addBookToLibrary()
  displayNewBook(book)
  addBookForm.reset()
})

searchInput.addEventListener('keyup', () => {
  const bookCards = document.querySelectorAll('[data-id]')
  let searchValue = searchInput.value
  for(let i=0; i < bookLibrary.length; i++){
    let book = bookLibrary[i]
    let title = book.title
    let bookCard = bookCards[i]
    if(title.includes(searchValue)){
      bookCard.style.display = "flex"
    }
    else{
      bookCard.style.display = "none"
    }
  }
})

