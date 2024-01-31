import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookId, updateBookAvailability, getUser } from "../API";
//we have access to the user books in the user object

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
export default function SingleBook({ user, token, getUser }) {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  //   const userBookTitles = user?.books.map((book) => book.title);
  console.log(bookId);
  async function fetchBook() {
    try {
      const nextBook = await getBookId(bookId);
      console.log(nextBook);
      setBook(nextBook.book);
    } catch (err) {
      console.error(err);
    }
  }
  async function checkoutBook() {
    try {
      await updateBookAvailability(bookId, false, token);
      await fetchBook();
      await getUser();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    book && (
      <div className="single-book">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        {user && book.available ? (
          <button onClick={checkoutBook}>Checkout this Book!</button>
        ) : user && !book.available ? (
          <p>This book is currently unavailable.</p>
        ) : (
          <p>Please log in to see status.</p>
        )}
        <p>{book.description}</p>
        <img src={book.coverimage} />
      </div>
    )
  );
}
// user is logged in, book is available? -> checkout book button
// user is logged in, book ISN'T available? -> not available message
//usr not logged in? -> log in to see status message
