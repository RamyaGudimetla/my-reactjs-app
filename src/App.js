import { useState } from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

function App() {
  const [books, setBooks] = useState([]);
  const[selectedBook,setSelectedBook]=useState(null);

  async function handleSearch(searchTerm) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`
    );
    const data = await response.json();

    const formattedBooks = data.items?.map((item) => ({
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.join(", ") || "Unknown",
      image: item.volumeInfo.imageLinks?.thumbnail || null,
      description: item.volumeInfo.description || "No description available.",
    })) || [];

    setBooks(formattedBooks);
  }
  function handleSeeMore(book){
    setSelectedBook(book);
  }

  return (
    <div>
      
      <div className="d-flex flex-column min-vh-100">
      <NavBar onSearch={handleSearch} />
      <main className="flex-grow-1">
        <BookList books={books} onSeeMore={handleSeeMore} />
        {selectedBook && <p></p>}
      </main>
      <Footer />
    </div>

    </div>
  );
}

export default App;