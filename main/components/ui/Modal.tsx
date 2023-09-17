import { Pokemon } from "@/main/types/Modal";
import Image from "next/image";

interface ModalProps {
  data: Pokemon | undefined;
  showModal: boolean;
  setShowModal: any;
}

export default function Modal({ data, showModal, setShowModal }: ModalProps) {
  const { name, weight, moves, image, height, description } = data || {};

  return (
    <div className={`modal ${showModal ? "is-active" : ""}`}>
      <div className="modal-bg" onClick={() => setShowModal(false)}></div>
      <div className="modal-content pokemon">
        <div className="pokemon-image">
          <Image alt="" className="image" src={image || ""} fill />
        </div>
        <div className="pokemon-info">
          <h2 className="fs-3">{name}</h2>
          <br />
          <p className="is-size-2">{description}</p>
        </div>
        <div className="pokemon-details">
          <div>
            <span>Peso:</span> {weight}
          </div>
          <div>
            <span>Altura:</span> {height}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
