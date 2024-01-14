import { useEffect, useState } from "react";
import { fetchUrl } from "../fetch/api";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUrl(url);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, error, isLoading };
};
