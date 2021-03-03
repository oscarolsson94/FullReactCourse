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
             <Book
                 img={firstBook.img}
                 title={firstBook.title}
                 author={firstBook.author}
             >
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eum aut quas eaque voluptatibus deserunt deleniti corrupti? Saepe cum aspernatur voluptates modi, veniam sequi iure incidunt consequuntur suscipit provident doloremque.</p>
             </Book>
             <Book
                 img={secondBook.img}
                 title={secondBook.title}
                 author={secondBook.author} />
         </section>
     );
 }

const Book = ({img, title, author, children}) => {
    // const { img, title, author } = props;
    return (
        <article className="book">
            <img src={ img } alt="" />
            <h1>{ title }</h1>
            <h4>{author}</h4>
            {children}
        </article>
    );
};

ReactDom.render(<BookList />, document.getElementById('root'));