modal = document.getElementById('modalBackground')
addBookButton = document.getElementById('addBookButton')

addBookButton.addEventListener('click', () => {
  modal.style.display = "flex"
})

window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none"
  }
}