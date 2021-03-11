function solve(radius, h) {
    let volume = (Math.PI * (radius * radius) * h) * (1 / 3);
    let lateralArea = Math.PI * radius * Math.sqrt(radius * radius + h * h);
    let baseArea = Math.PI * radius * radius;
    let area = lateralArea + baseArea;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
solve(33, 8);