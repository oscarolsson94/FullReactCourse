const Book = ({ img, title, author }) => {
    // const { img, title, author } = props;

    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
        alert(title)
    }

    return (
        <article className="book">
            <img src={ img } alt="" />
            <h1>{ title }</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>test</button>
        </article>
    );
};

