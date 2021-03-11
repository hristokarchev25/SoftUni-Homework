function solve(array) {
    const sorted = (current, next) => current.length - next.length || current.localeCompare(next);
    array.sort(sorted);
    console.log(array.join("\n"));
}
solve(['alpha',
    'beta',
    'gamma']
)