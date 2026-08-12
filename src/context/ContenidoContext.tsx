import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { obtenerContenidoRemoto } from "../api/contenidoApi";
import { resolverImagen } from "../api/resolverImagen";
import { contenidoLocal } from "../data/contenidoLocal";
import type { ContenidoSitio } from "../types/contenido";

export interface EstadoContenido {
  contenido: ContenidoSitio;
  cargando: boolean;
  error: string | null;
  recargar: () => Promise<void>;
}

export const ContenidoContext = createContext<EstadoContenido | null>(null);

function resolverImagenesContenido(contenido: ContenidoSitio): ContenidoSitio {
  return {
    ...contenido,
    servicios: contenido.servicios.map((servicio) => ({
      ...servicio,
      imagen: resolverImagen(servicio.imagen) ?? servicio.imagen,
      prestaciones: servicio.prestaciones.map((prestacion) => ({
        ...prestacion,
        imagen: resolverImagen(prestacion.imagen) ?? prestacion.imagen,
      })),
    })),
    perfilProfesional: {
      ...contenido.perfilProfesional,
      imagen:
        resolverImagen(contenido.perfilProfesional.imagen) ??
        contenido.perfilProfesional.imagen,
      hitos: contenido.perfilProfesional.hitos.map((hito) => ({
        ...hito,
        imagen: resolverImagen(hito.imagen),
      })),
    },
  };
}

interface ContenidoProviderProps {
  children: ReactNode;
}

export function ContenidoProvider({ children }: ContenidoProviderProps) {
  const [contenido, setContenido] = useState<ContenidoSitio>(contenidoLocal);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const recargar = useCallback(async () => {
    setCargando(true);

    try {
      const contenidoRemoto = await obtenerContenidoRemoto();
      setContenido(resolverImagenesContenido(contenidoRemoto));
      setError(null);
    } catch (errorCarga) {
      const mensaje =
        errorCarga instanceof Error
          ? errorCarga.message
          : "No fue posible cargar el contenido remoto.";

      console.warn(`[Lunara] ${mensaje}`);
      setError(mensaje);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void recargar();
  }, [recargar]);

  const valor = useMemo(
    () => ({ contenido, cargando, error, recargar }),
    [contenido, cargando, error, recargar],
  );

  return <ContenidoContext.Provider value={valor}>{children}</ContenidoContext.Provider>;
}
