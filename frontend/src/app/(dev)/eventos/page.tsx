import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="flex flex-col bg-zinc-800 rounded-lg w-full overflow-hidden items-center text-center"
        >
          <div className="relative w-full h-44">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col  p-7 gap-5">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400 text-cover">
              {evento.descricao}
            </p>
            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              size={128}
            />
            <div className="flex-1 flex-col lg:flex-row lg:flex">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}