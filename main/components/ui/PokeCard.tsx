import Image from "next/image";

interface Pokemon {
  name: string;
  weigth: string;
  moves: string[];
  image: string;
}

interface PokeCardProps {
  data: Pokemon;
}

export default function PokeCard({ data }: PokeCardProps) {
  const { name, weigth, moves, image } = data;
  return (
    <div className="pokecard">
      <div
        className="pokecard-header"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="pokecard-header-bg"></div>
        <div className="pokecard-weigth">{weigth} kg</div>
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
