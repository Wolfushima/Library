const form = document.querySelector("#newBook-form");
const bookCardContainer = document.querySelector(".bookCard-container");
let myLibrary = [];

form.addEventListener("submit", submitNewBook)



console.log(myLibrary)
function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    if (this.read === "Read") { this.read = "Not Read" }
    else { this.read = "Read" }
}



addBookToLibrary("TheHobbit-JJR-book-card", "The Hobbit", "JJR", "330", "Read")
addBookToLibrary("Bravo-JJR-book-card", "Bravo", "JJR", "330", "Not Read")
console.log(myLibrary)



/*          --- FORM FUNCTIONS ---          */
function submitNewBook(event) {
    const inputTitle = document.querySelector("#title").value;
    const inputAuthor = document.querySelector("#author").value;
    const inputPages = document.querySelector("#pages").value;
    const inputRead = document.querySelector('input[name="read"]:checked').value;
    const idCard = `${inputTitle}-${inputAuthor}-book-card`.replaceAll(" ", "");

    addBookToLibrary(idCard, inputTitle, inputAuthor, inputPages, inputRead)
    
    console.log(myLibrary)
    form.reset()
    event.preventDefault()
}

function createNewBookCard(title, author, pages, read) {
    const bookCard = document.createElement("div");
    const titleCard = document.createElement("h2");
    const authorCard = document.createElement("h2");
    const pagesCard = document.createElement("h2");
    const readCard = document.createElement("h2");
    const btnCard = document.createElement("button");
    const idCard = `${title}-${author}-book-card`.replaceAll(" ", "");
    
    titleCard.textContent = title;
    authorCard.textContent = author;
    pagesCard.textContent = pages;
    readCard.textContent = read;
    btnCard.textContent = "DELETE";

    bookCard.classList.add("book-card")
    btnCard.classList.add("btnDeleteBook")
    bookCard.id = idCard;

    bookCard.appendChild(titleCard)
    bookCard.appendChild(authorCard)
    bookCard.appendChild(pagesCard)
    bookCard.appendChild(readCard)
    bookCard.appendChild(btnCard)
    bookCardContainer.appendChild(bookCard)

    readCard.addEventListener("click", changeReadStatus)
    btnCard.addEventListener("click", deleteBookFromLibrary)
}



/*          --- LIBRARY FUNCTIONS ---           */
function addBookToLibrary(id, title, author, pages, read) {
    const newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook)

    createNewBookCard(title, author, pages, read)
}

function deleteBookFromLibrary() {
    const bookIndex = myLibrary.map(bookId => bookId.id).indexOf(this.parentNode.id);
    myLibrary.splice(bookIndex, 1)
    this.parentNode.remove(); 
}

function changeReadStatus() {
    const bookIndex = myLibrary.map(bookId => bookId.id).indexOf(this.parentNode.id);
    if (this.textContent === "Read") { this.textContent = "Not Read"}
    else { this.textContent = "Read"}
    myLibrary[bookIndex].toggleReadStatus();
}

