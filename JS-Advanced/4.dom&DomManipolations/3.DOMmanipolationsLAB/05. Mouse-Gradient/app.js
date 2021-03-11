function attachGradientEvents() {
    let mouseGradient = document.getElementById("gradient");

    mouseGradient.addEventListener('mousemove', function (e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    });
    mouseGradient.addEventListener('mouseout', function (e) {
        document.getElementById('result').textContent = "";
    });
}