import { useState, useEffect } from "react";

function fetchImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = resolve;
    image.onerror = image.onabort = reject;

    image.src = src;
  });
}

export function useImage({ src, fallback }) {
  const [source, setSource] = useState(src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    fetchImage(src)
      .then(() => {
        setSource(src);
        setLoaded(true);
      })
      .catch(() => {
        if (fallback) {
          fetchImage(fallback).then(() => {
            setSource(fallback);
            setLoaded(true);
          });
        }
      });
  }, [src, fallback]);

  return { loaded, source };
}
