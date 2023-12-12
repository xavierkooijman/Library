modal = document.getElementById('modalBackground')
addBookButton = document.getElementById('addBookButton')
bookTitleInput = document.getElementById('bookTitle')
bookAuthorInput = document.getElementById('bookAuthor')
bookPagesInput = document.getElementById('bookPages')
bookStatusInput = document.getElementById('bookStatus')

bookColors = ['#f79533', '#f37055', '#ef4e7b', '#a166ab', '#5073b8', '#1098ad', '#07b39b', '#6fba82', '#ff6f4f', '#dac6fb', '#029c54']

addBookButton.addEventListener('click', () => {
  modal.style.display = "flex"
})

window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none"
  }
}