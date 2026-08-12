import { useContext } from "react";
import { ContenidoContext } from "../context/ContenidoContext";

export function useContenido() {
  const contexto = useContext(ContenidoContext);

  if (!contexto) {
    throw new Error("useContenido debe utilizarse dentro de ContenidoProvider.");
  }

  return contexto;
}
