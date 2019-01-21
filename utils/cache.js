const _cache = new Map();

export function getCachedValue(key) {
  return _cache.has(key) && _cache.get(key);
}

export function setCachedValue(key, value) {
  if (!getCachedValue(key)) {
    _cache.set(key, value);
  }
}
