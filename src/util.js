const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val) => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      (error) => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

export function fetchImage(src) {
  return makeCancelable(
    new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = resolve;
      image.onerror = image.onabort = reject;

      image.src = src;
    })
  );
}
