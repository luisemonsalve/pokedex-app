import PokeCard from "../../ui/PokeCard";
import styles from "./styles.module.scss";

interface CardsContainerProps {
  data: {
    total?: number;
    pokemon?: {
      name: string;
      weight: string;
      image: string;
      moves: string[];
    }[];
  };
}

export default function CardsContainer({ data = {} }: CardsContainerProps) {
  const { pokemon } = data;
  return (
    <div className={styles.cardsContainer}>
      {pokemon?.map((item, i) => (
        <PokeCard key={i} data={{ ...item, name: i + 1 + " " + item.name }} />
      ))}
    </div>
  );
}
