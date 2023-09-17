import useUser from "@/main/lib/useUser";
import PokeCard from "../../ui/PokeCard";
import styles from "./styles.module.scss";

interface CardsContainerProps {
  data: {
    total?: number;
    page?: number;
    pages?: number;
    pokemon?: {
      name: string;
      weight: string;
      image: string;
      moves: string[];
    }[];
  };
  changePage: any;
}

export default function CardsContainer({
  data = {},
  changePage,
}: CardsContainerProps) {
  const { pokemon, pages = 1, page = 1 } = data;

  return (
    <div className={styles.cardsContainer}>
      {pokemon?.map((item, i) => (
        <PokeCard key={i} data={{ ...item, name: `${item.name}` }} />
      ))}
      <div className="paginator">
        <div
          className={`page-item ${page == 0 ? "disabled" : ""}`}
          onClick={() => changePage(page - 1)}
        >
          Anterior
        </div>
        {Array(pages)
          .fill(0)
          .map((item, i) => (
            <div
              className={`page-item ${page == i ? "is-active" : ""}`}
              key={i}
              onClick={() => changePage(i)}
            >
              {i + 1}
            </div>
          ))}
        <div
          className={`page-item ${page == pages - 1 ? "disabled" : ""}`}
          onClick={() => changePage(page / 1 + 1)}
        >
          Siguiente
        </div>
      </div>
    </div>
  );
}
