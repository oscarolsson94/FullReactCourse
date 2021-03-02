import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//setup vars
const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg",
    author: "Robert T. Kiyosaki",
    title: "Rich Dad Poor Dad: What the Rich Teach Their…"
}
const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
    author: "Dr. Seuss",
    title: "The Cat in the Hat"
}

 function BookList() {
     return (
         <section className="booklist">
             <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
             <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
         </section>
     );
 }

const Book = (props) => {
    return (
        <article className="book">
            <img src={ props.img } alt="" />
            <h1>{ props.title }</h1>
            <h4>{ props.author }</h4>
        </article>
    );
};

ReactDom.render(<BookList />, document.getElementById('root'));