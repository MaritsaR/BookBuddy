/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { getBooks } from "../API";
import { useState, useEffect } from "react";
import BookCards from "./BookCards";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const results = await getBooks();
        setBooks(results.books);
        return results;
      } catch (err) {}
    }
    loadBooks();
  }, []);

  return (
    <div className="cards">
      {books.map((book) => (
        <BookCards key={book.id} book={book} />
      ))}
    </div>
  );
}
