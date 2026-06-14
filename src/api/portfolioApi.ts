import type { PortfolioResponse } from "../types/portfolio.types";

export async function getPortfolio(): Promise<PortfolioResponse> {

  const response = await fetch(
    import.meta.env.VITE_API_URL
  );

  if (!response.ok) {
    throw new Error("Error obteniendo portafolio");
  }

  return response.json();
}