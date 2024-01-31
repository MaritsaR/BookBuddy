import { Link } from "react-router-dom";

export default function BookCards({ book }) {
  return (
    <div>
      <h2>{book?.title}</h2>
      <img src={book?.coverimage} alt="books"></img>
      {/* <h2>{book?.description}</h2> */}
      <h2>{book?.available}</h2>
      <div>
        <Link to={`/book/${book?.id}`} className="details-button">
          **Get Book Details**
        </Link>
      </div>
    </div>
  );
}
