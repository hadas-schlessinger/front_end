import { useState, useEffect } from "react";

export default function useResponse(request, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    request()
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, dependencies);

  return [loading, data, error];
}
