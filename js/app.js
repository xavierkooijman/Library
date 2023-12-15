modal = document.getElementById('modalBackground')
addBookButton = document.getElementById('addBookButton')
bookTitleInput = document.getElementById('bookTitle')
bookAuthorInput = document.getElementById('bookAuthor')
bookPagesInput = document.getElementById('bookPages')
bookStatusInput = document.getElementById('bookStatus')
addBookForm = document.getElementById('addBookForm')
booksContainer = document.getElementById('booksContainer')

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

function displayNewBook(book){
  modal.style.display = "none"
  const newDiv = document.createElement('div')
  newDiv.classList.add("book")
  const title = document.createElement('p')
  title.innerText = `"${book.title}"`
  const author = document.createElement('p')
  author.innerText = book.author
  const pages = document.createElement('p')
  pages.innerText = `${book.pages} pages`
  newDiv.append(title,author,pages)
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
})