import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type PropiedadesBotonEnlace = Omit<ButtonProps, "variant" | "href"> & {
  children: ReactNode;
  destino: string;
  variante?: "solido" | "contorno" | "claro";
  externo?: boolean;
};

export default function ButtonLink({ children, destino, variante = "solido", externo = false, sx, ...props }: PropiedadesBotonEnlace) {
  const estilos = {
    solido: {
      bgcolor: "primary.dark",
      color: "common.white",
      boxShadow: "0 10px 24px rgba(85,39,93,.2)",
      "&:hover": { bgcolor: "#3D2043", transform: "translateY(-2px)" },
    },
    contorno: {
      border: "1px solid rgba(255,255,255,.75)",
      color: "common.white",
      bgcolor: "rgba(255,255,255,.06)",
      "&:hover": { bgcolor: "rgba(255,255,255,.14)", borderColor: "common.white", transform: "translateY(-2px)" },
    },
    claro: {
      bgcolor: "common.white",
      color: "primary.dark",
      boxShadow: "0 12px 28px rgba(58,23,64,.18)",
      "&:hover": { bgcolor: "secondary.light", transform: "translateY(-2px)" },
    },
  } as const;

  const estilosPersonalizados = Array.isArray(sx) ? sx : sx ? [sx] : [];
  const estilosComunes = [
    { transition: "transform 180ms ease, box-shadow 180ms ease, background 180ms ease", ...estilos[variante] },
    ...estilosPersonalizados,
  ];

  if (externo) {
    return <Button component="a" href={destino} target="_blank" rel="noreferrer" sx={estilosComunes} {...props}>{children}</Button>;
  }

  return <Button component={RouterLink} to={destino} sx={estilosComunes} {...props}>{children}</Button>;
}
