const _cache = new Map();

export function getCachedValue(key) {
  return _cache.has(key) && _cache.get(key);
}

export function setCachedValue(key, value) {
  if (!isCached(key)) {
    _cache.set(key, value);
  }
}
