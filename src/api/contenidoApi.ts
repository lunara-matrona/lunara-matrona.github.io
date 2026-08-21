import type { ContenidoSitio, Testimonio } from "../types/contenido";

const urlContenido = import.meta.env.VITE_URL_CONTENIDO?.trim();

interface ErrorApi {
  error: true;
  mensaje: string;
}

interface TestimonioRemoto extends Omit<Testimonio, "mostrarTestimonio"> {
  mostrarTestimonio?: boolean;
}

interface ContenidoRemotoParcial
  extends Omit<ContenidoSitio, "testimonios" | "mostrarSeccionTestimonios"> {
  mostrarSeccionTestimonios?: boolean;
  testimonios: TestimonioRemoto[];
}

function esErrorApi(valor: unknown): valor is ErrorApi {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "error" in valor &&
    (valor as ErrorApi).error === true
  );
}

function normalizarContenido(datos: ContenidoRemotoParcial): ContenidoSitio {
  return {
    ...datos,
    mostrarSeccionTestimonios: datos.mostrarSeccionTestimonios ?? true,
    testimonios: (datos.testimonios ?? []).map((testimonio) => ({
      ...testimonio,
      mostrarTestimonio: testimonio.mostrarTestimonio ?? true,
    })),
    perfilProfesional: {
      ...datos.perfilProfesional,
      hitos: (datos.perfilProfesional.hitos ?? []).map((hito) => ({
        ...hito,
        mostrarHito: hito.mostrarHito ?? true,
      })),
    },
  };
}

export async function obtenerContenidoRemoto(): Promise<ContenidoSitio> {
  if (!urlContenido) {
    throw new Error(
      "No se configuró VITE_URL_CONTENIDO. Se utilizará el contenido local.",
    );
  }

  const respuesta = await fetch(urlContenido, {
    method: "GET",
    cache: "no-store",
  });

  if (!respuesta.ok) {
    throw new Error(`No fue posible obtener el contenido (${respuesta.status}).`);
  }

  const datos: unknown = await respuesta.json();

  if (esErrorApi(datos)) {
    throw new Error(datos.mensaje);
  }

  return normalizarContenido(datos as ContenidoRemotoParcial);
}
