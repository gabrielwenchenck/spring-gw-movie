import { ReactComponent as Arrow } from "assets/img/arrow.svg";

import "./styles.css";
import { MoviePage } from "types/movie";

type Props = {
  page: MoviePage;
  onChange: Function;
};

function Pagination({ page, onChange }: Props) {
  return (
    <div className="gwmovie-pagination-container">
      <div className="gwmovie-pagination-box">
        <button
          className="gwmovie-pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="gwmovie-pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow className="gwmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
