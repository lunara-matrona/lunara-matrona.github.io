import { useEffect, useState } from "react";

import { getPortfolio } from "../api/portfolioApi";

import type { PortfolioResponse } from "../types/portfolio.types";

export function usePortfolio() {

  const [data, setData] =
    useState<PortfolioResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    getPortfolio()
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));

  }, []);

  return {
    data,
    loading,
    error
  };
}