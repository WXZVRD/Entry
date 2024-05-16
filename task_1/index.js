import { encoded, translations } from './data.js';

function decode(data, translation) {
    const result = data.map(item => {
        const decodedItem = {};
        Object.keys(item).forEach(key => {
            decodedItem[key] = translation[item[key]] ?? item[key];
        });
        return decodedItem;
    });
    return result;
}

function checkUniqueId(data) {
    const uniqueIds = new Set();

    data.forEach(item => {
        Object.values(item).forEach(key => {
            uniqueIds.add(key);
        });
    });

    return Array.from(uniqueIds);
}

console.log(decode(encoded, translations));
console.log(checkUniqueId(encoded, translations));
