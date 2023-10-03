import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import "./styles.css";

type Props = {
  movieId: string;
};

function FormCard({ movieId }: Props) {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  });

  return (
    <div className="gwmovie-form-container">
      <img
        className="gwmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="gwmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="gwmovie-form">
          <div className="form-group gwmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group gwmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="gwmovie-form-btn-container">
            <button type="submit" className="btn btn-primary gwmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary gwmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
