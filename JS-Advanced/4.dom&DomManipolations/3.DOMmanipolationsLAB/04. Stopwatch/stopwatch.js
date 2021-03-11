function stopwatch() {
    let start = document.getElementById('startBtn');
    let stop = document.getElementById('stopBtn');
    let watch = document.getElementById('time');
    let [sec, min] = [0, 0];
    let timeout;
    start.addEventListener('click', function () {
        watch.textContent = '00:00';
        start.disabled = true;
        stop.disabled = false;
        timeout = setInterval(add, 1000)
    });

    stop.addEventListener('click', function () {
        start.disabled = false;
        stop.disabled = true;
        clearInterval(timeout);
        sec = 0;
        min = 0;
    });

    function add() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        watch.textContent = (min ? (min > 9 ? min : '0' + min) : '00')
            + ':' + (sec > 9 ? sec : '0' + sec);
    }
}