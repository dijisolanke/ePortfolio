import cache from 'memory-cache';

export async function cached(key, timeout_in_seconds, func) {
  return cache.get(key) || cache.put(key, await func(), timeout_in_seconds * 1000);
}
