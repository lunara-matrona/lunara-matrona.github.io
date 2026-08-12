import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type ButtonLinkProps = Omit<ButtonProps, "variant" | "href"> & {
  children: ReactNode;
  to: string;
  variant?: "solid" | "outline" | "light";
  external?: boolean;
};

export default function ButtonLink({ children, to, variant = "solid", external = false, sx, ...props }: ButtonLinkProps) {
  const styles = {
    solid: {
      bgcolor: "primary.dark",
      color: "common.white",
      boxShadow: "0 10px 24px rgba(85,39,93,.2)",
      "&:hover": { bgcolor: "#3D2043", transform: "translateY(-2px)" },
    },
    outline: {
      border: "1px solid rgba(255,255,255,.75)",
      color: "common.white",
      bgcolor: "rgba(255,255,255,.06)",
      "&:hover": { bgcolor: "rgba(255,255,255,.14)", borderColor: "common.white", transform: "translateY(-2px)" },
    },
    light: {
      bgcolor: "common.white",
      color: "primary.dark",
      boxShadow: "0 12px 28px rgba(58,23,64,.18)",
      "&:hover": { bgcolor: "secondary.light", transform: "translateY(-2px)" },
    },
  } as const;

  const customStyles = Array.isArray(sx) ? sx : sx ? [sx] : [];
  const commonSx = [
    { transition: "transform 180ms ease, box-shadow 180ms ease, background 180ms ease", ...styles[variant] },
    ...customStyles,
  ];

  if (external) {
    return <Button component="a" href={to} target="_blank" rel="noreferrer" sx={commonSx} {...props}>{children}</Button>;
  }

  return <Button component={RouterLink} to={to} sx={commonSx} {...props}>{children}</Button>;
}
