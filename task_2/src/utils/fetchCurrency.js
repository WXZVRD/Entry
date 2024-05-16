import cachedFetch from "./cacheCurrency";

export default async function fetchCurrency(cur) {
    const url = `https://open.er-api.com/v6/latest/${cur}`;
    const response = await cachedFetch(url);
    if (response && response["rates"]) {
        return response["rates"];
    }
    return null;
}