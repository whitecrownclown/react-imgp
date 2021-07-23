import { useState, useEffect } from "react";
import { fetchImage } from "./util";

export function useImage({ src, fallback }) {
  const [source, setSource] = useState(src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);

    // Get image source
    let cancelable = fetchImage(src);

    cancelable.promise
      .then(() => {
        setSource(src);
        setLoaded(true);
      })
      .catch(({ isCanceled }) => {
        if (fallback && !isCanceled) {
          // Get fallback source
          cancelable = fetchImage(fallback);

          cancelable.promise.then(() => {
            setSource(fallback);
            setLoaded(true);
          });
        }
      });

    return () => {
      // Cancel any pending promises
      cancelable.cancel();
    };
  }, [src, fallback]);

  return { loaded, source };
}
