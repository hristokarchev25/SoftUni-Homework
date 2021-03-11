vectorObj = {
    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply: ([x1, y1], scal) => [x1 * scal, y1 * scal], //vector.map(e=> e*scal)
    length: ([x, y]) => Math.sqrt(x ** 2 + y ** 2),
    dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
    cross: ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2,
};



console.log(vectorObj.add([1, 1], [1, 0]));
console.log(vectorObj.cross([3, 7], [1, 0]));