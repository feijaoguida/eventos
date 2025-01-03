import { Convidado } from "core";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadoProps {
  convidados: Convidado[];
}

export default function ListaConvidados(props: ListaConvidadoProps) {
  return (
    <div>
      <ul>
        {props.convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} />
        ))}
      </ul>
    </div>
  );
}
