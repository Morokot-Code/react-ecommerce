import { Link } from "react-router-dom";

function Card(props) {
  const { data } = props;
  return (
    <Link to={`/product/${data.id}`} className="border border-gray-400 group">
      <figure className="overflow-hidden p-3 h-40 lg:h-65">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
          src={data.image}
          alt=""
        />
      </figure>
      <div className="px-2 py-2">
        <h3 className="line-clamp-1">{data.title}</h3>
        <p>${data.price}</p>
      </div>
    </Link>
  );
}

export default Card;
