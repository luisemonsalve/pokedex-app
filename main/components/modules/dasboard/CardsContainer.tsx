import PokeCard from "../../ui/PokeCard";
import styles from "./styles.module.scss";

interface CardsContainerProps {}

export default function CardsContainer({}: CardsContainerProps) {
  return (
    <div className={styles.cardsContainer}>
      <PokeCard
        data={{
          name: "Bulbasaur ",
          weigth: "6,9",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          moves: ["Movimiento 1", "Movimiento 2"],
        }}
      />{" "}
      <PokeCard
        data={{
          name: "Bulbasaur ",
          weigth: "6,9",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          moves: ["Movimiento 1", "Movimiento 2"],
        }}
      />{" "}
      <PokeCard
        data={{
          name: "Bulbasaur ",
          weigth: "6,9",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          moves: ["Movimiento 1", "Movimiento 2"],
        }}
      />
    </div>
  );
}
