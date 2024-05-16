function cacheCurrencies() {
    const cache = new Map();
    return async function cachedFetch(url) {
        if (cache.has(url)) {
            return cache.get(url);
        }
        const response = await fetch(url);
        const body = await response.json();
        cache.set(url, body);
        return body;
    };
}
export default cacheCurrencies();