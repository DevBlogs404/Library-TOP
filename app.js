const addBook = document.querySelector("#addBook");
const container =  document.querySelector(".container");
const bookInfo =  document.querySelector(".bookInfoCard");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const hasRead = document.querySelector("#hasRead");
const submitBtn = document.querySelector("#submitBtn");


// books array 
let myBooks = [];

// constructor function 
function Book(bookTitle,bookAuthor,bookPages,hasRead){
    this.bookTitle = bookTitle
    this.bookAuthor = bookAuthor
    this.bookPages = bookPages
    this.hasRead = hasRead
}

// more features
// const addBookToLibrary = () => {

// }

// myBooks.find((book)=>{
//     if(book.id = 1){
//         console.log(book);
//     }
// })


// book adding ui 
addBook.addEventListener("click",()=>{
    bookInfo.classList.toggle("card");
    // console.log("clicked");
})

// new book adding and display ui 
submitBtn.addEventListener("click",(e)=>{
e.preventDefault();

const newBook = new Book(title.value,author.value,+pages.value,hasRead.value);
// console.log(newBook);
myBooks.push(newBook);
console.log(myBooks);
let bookCard = document.createElement("div");
let heading = document.createElement("h2");
let subHeading = document.createElement("h3")
let numPages = document.createElement("p");
let readOrNot = document.createElement("p");
let clearBtn = document.createElement("button")


heading.innerHTML = `Title: ${title.value}`;
subHeading.innerHTML = `Author: ${author.value}`;
numPages.innerHTML = `Pages: ${pages.value}`;
readOrNot.innerHTML = `Did your read it? : ${hasRead.value}`;
clearBtn.innerText = "X";
clearBtn.style.padding = "8px 12px";

clearBtn.addEventListener("click",()=>{
    bookCard.style.display = "none";
})

bookCard.appendChild(heading);
bookCard.appendChild(subHeading);
bookCard.appendChild(numPages);
bookCard.appendChild(readOrNot);
bookCard.appendChild(clearBtn)

bookCard.classList.add("bookCard");
container.appendChild(bookCard)
// console.log(title.value);
// console.log(author.value);
// console.log(typeof Number(pages.value));
// console.log(hasRead.value);

})