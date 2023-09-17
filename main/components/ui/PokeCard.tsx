import { Pokemon } from "@/main/types/Modal";
import Image from "next/image";

interface PokeCardProps {
  data: Pokemon;
  handleSelect: any;
}

export default function PokeCard({ data, handleSelect }: PokeCardProps) {
  const { name, weight, moves, image } = data;
  return (
    <div
      className="pokecard"
      onClick={() => {
        handleSelect(data);
      }}
    >
      <div
        className="pokecard-header"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="pokecard-header-bg"></div>
        <div className="pokecard-weigth">{weight} kg</div>
      </div>
      <div className="pokecard-body">
        <h4 className="pokecard-title">{name}</h4>
        <div className="pokecard-moves">
          {moves?.map((move, i) => (
            <span key={i}>{move}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
