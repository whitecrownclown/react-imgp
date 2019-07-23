import { useState, useEffect } from 'react';

function fetchImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = resolve;
    image.onerror = image.onabort = reject;

    image.src = src;
  });
}

export function useImage({ src, fallback }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    fetchImage(src)
      .then(() => {
        setLoaded(true);
      })
      .catch(() => {
        if (fallback) {
          fetchImage(fallback).then(() => {
            setLoaded(true);
          });
        }
      });
  }, [src, fallback]);

  return { loaded };
}
