import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  children: ReactNode;
  to: string;
  variant?: "solid" | "outline" | "light";
  external?: boolean;
  className?: string;
}

export default function ButtonLink({
  children,
  to,
  variant = "solid",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `button button--${variant} ${className}`.trim();

  if (external) {
    return (
      <a className={classes} href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
