import { useEffect, useState } from "react";

import { getPortfolio } from "../api/portfolioApi";

import type {
  PortfolioResponse,
} from "../types/portfolio.types";

export const usePortfolio = () => {

  const [portfolio, setPortfolio] =
    useState<PortfolioResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    const fetchPortfolio = async () => {

      try {

        const data =
          await getPortfolio();

        setPortfolio(data);

      } catch (err) {

        setError(
          err instanceof Error
            ? err.message
            : "Error desconocido"
        );

      } finally {

        setLoading(false);

      }
    };

    fetchPortfolio();

  }, []);

  return {
    portfolio,
    loading,
    error,
  };
};