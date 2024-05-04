import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-1">
      <img src={book.image} alt="" />
      <div>
        <h4>{book.title}</h4>
        <h4>{book.author}</h4>
      </div>
      <Link to={`/ürün/${book.id}`}>Detay Gör</Link>
    </div>
  );
};

export default Card;
