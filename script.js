const form = document.querySelector("#newBook-form");
let myLibrary = [];

form.addEventListener("submit", submitNewBook)



console.log(myLibrary)
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


addBookToLibrary("The Hobbit", "JJR", "330", "yes")
addBookToLibrary("Bravo", "JJR", "330", "yes")
console.log(myLibrary)



/*          --- LIBRARY FUNCTIONS ---           */
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}


/*          --- FORM FUNCTIONS ---          */
function submitNewBook(event) {
    const inputTitle = document.querySelector("#title").value;
    const inputAuthor = document.querySelector("#author").value;
    const inputPages = document.querySelector("#pages").value;
    const inputRead = document.querySelector("#read").value;

    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead);
    console.log(myLibrary)
    form.reset();
    event.preventDefault();
}





/*          --- DOM MANIPULATION PRACTICE---            */
// const booksContainer = document.querySelector(".books-container");
// document.addEventListener("click", practice)

// function practice() {
//     const div = document.createElement("div");
//     const title = document.createElement("h2");
//     const author = document.createElement("h2");
//     const pages = document.createElement("h2");
//     const read = document.createElement("h2");
    
//     title.textContent = "Ronald";
//     author.textContent = "McDonald";
//     pages.textContent = "342";
//     read.textContent = "Yes"

//     div.appendChild(title)
//     div.appendChild(author)
//     div.appendChild(pages)
//     div.appendChild(read)
//     div.classList.add("book-card")
//     booksContainer.appendChild(div)
// }



