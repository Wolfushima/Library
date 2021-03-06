const htmlWindow = document.querySelector("window");
const form = document.querySelector("#newBook-form");
const formContainer = document.querySelector(".js-formPopup");
const openFormBtn = document.querySelector(".openForm-btn");
const bookCardContainer = document.querySelector(".bookCard-container");
let myLibrary = [];



form.addEventListener("submit", submitNewBook)
openFormBtn.addEventListener("click", openForm)
window.addEventListener("click", closeForm)


class Book {
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = pages;
        this.read = read;
    }

    toggleReadStatus() {
        if (this.read === "Read") { this.read = "Not Read" }
        else { this.read = "Read" }
    }
}
// function Book(id, title, author, pages, read) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.toggleReadStatus = function() {
//     if (this.read === "Read") { this.read = "Not Read" }
//     else { this.read = "Read" }
// }



addBookToLibrary("TheHobbit-JJR-book-card", "The Hobbit", "JJR", "330", "Read")
addBookToLibrary("ToKillaMockingbird-HarperLee-book-card", "To Kill a Mockingbird", "Harper Lee", "342", "Not Read")
addBookToLibrary("TheGreatGatsby-F.ScottFitzgerald-book-card", "The Great Gatsby", "F. Scott Fitzgerald", "180", "Read")




/*          --- FORM FUNCTIONS ---          */
function submitNewBook(event) {
    const inputTitle = document.querySelector("#title").value;
    const inputAuthor = document.querySelector("#author").value;
    const inputPages = document.querySelector("#pages").value;
    const inputRead = document.querySelector('input[name="read"]:checked').value;
    const idCard = `${inputTitle}-${inputAuthor}-book-card`.replaceAll(" ", "");

    addBookToLibrary(idCard, inputTitle, inputAuthor, inputPages, inputRead)

    bookCardContainer.style.filter = "none";
    formContainer.style.display = "none";

    form.reset()
    event.preventDefault()
}

function openForm() {
    bookCardContainer.style.filter = "blur(10px)";
    formContainer.style.display = "block";
}

function closeForm(e) {
    if (e.target == formContainer) {
        bookCardContainer.style.filter = "none";
        formContainer.style.display = "none";
    }
}



/*          --- BOOK CARD FUNCTIONS ---         */
function createNewBookCard(title, author, pages, read) {
    const bookCard = document.createElement("div");
    const titleCard = document.createElement("h2");
    const byCard = document.createElement("h2");
    const authorCard = document.createElement("h2");
    const pagesCard = document.createElement("h2");
    const readCard = document.createElement("button");
    const btnCard = document.createElement("button");
    const idCard = `${title}-${author}-book-card`.replaceAll(" ", "");
    
    titleCard.textContent = title;
    byCard.textContent = "by";
    authorCard.textContent = author;
    pagesCard.textContent = `${pages} pages`;
    readCard.textContent = read;
    btnCard.textContent = "x";

    bookCard.classList.add("book-card")
    titleCard.classList.add("titleBook-card")
    authorCard.classList.add("authorBook-card")
    pagesCard.classList.add("pagesBook-card")
    readCard.classList.add("readBook-card")
    btnCard.classList.add("btnDeleteBook-card")
    bookCard.id = idCard;

    bookCard.appendChild(btnCard)
    bookCard.appendChild(titleCard)
    bookCard.appendChild(byCard)
    bookCard.appendChild(authorCard)
    bookCard.appendChild(pagesCard)
    bookCard.appendChild(readCard)
    
    bookCardContainer.appendChild(bookCard)

    if (read === "Read") {
        bookCard.style.background = "linear-gradient(rgb(67 223 171), rgb(47 182 137))";
    } else { bookCard.style.background = "linear-gradient(rgb(246 86 86 / 55%), rgb(181 38 38))"; }
    
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
    if (this.textContent === "Read") {
        this.parentNode.style.background = "linear-gradient(rgb(246 86 86 / 55%), rgb(181 38 38))"
        this.textContent = "Not Read"
    }
    else if (this.textContent === "Not Read") {
        this.parentNode.style.background = "linear-gradient(rgb(67 223 171), rgb(47 182 137))"
        this.textContent = "Read"   
    }
    myLibrary[bookIndex].toggleReadStatus();
}

