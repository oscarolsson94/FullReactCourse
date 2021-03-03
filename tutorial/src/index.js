import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//setup vars
const books = [
    {
        id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg",
        author: "Robert T. Kiyosaki",
        title: "Rich Dad Poor Dad: What the Rich Teach Their…"
    },
    {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
        author: "Dr. Seuss",
        title: "The Cat in the Hat"
    },
    {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg",
        author: "James Clear",
        title: "Atomic Habits: An Easy & Proven Way to Build…"
    }
];

// const names = ["john", "peter", "susan"];
// const newNames = names.map(name => {
//     return <h1>{name}</h1>;
// });


 function BookList() {
     return (
         <section className="booklist">
             {books.map((book) => {
                 return (
                     <Book key={ book.id } book={ book }/>
                 );
            })}
         </section>
     );
 }

const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <article className="book">
            <img src={ img } alt="" />
            <h1>{ title }</h1>
            <h4>{author}</h4>
        </article>
    );
};

ReactDom.render(<BookList />, document.getElementById('root'));