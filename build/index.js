function isIsogram(str) {
    let result = true;
    const length = str.length;
    for (let i = 1; i < length; i++) {
        if (str.slice(i).toLowerCase().search(str[i - 1]) >= 0)
            return false;
    }
    return result;
}
//# sourceMappingURL=index.js.map