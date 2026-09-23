function sorting(arr) {
    return arr
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join("\n");
}

sorting(["alpha", "beta", "gamma"]);
