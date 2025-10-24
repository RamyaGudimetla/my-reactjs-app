import BookCard from "./BookCard";

function BookList({ books,onSeeMore }) {
 

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          image={book.image}
          onSeeMore={()=>("see more clicked")}
          extraContent="This book explores themes of wealth, love, and the American Dream through the eyes of Nick Carraway."


         // onSeeMore={handleSeeMore}
          //description={book.description}
        />
      ))}
    </div>
  );
}

export default BookList;