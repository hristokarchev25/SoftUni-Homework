function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => { convert(+daysElement.value * 86400) });
    hoursBtn.addEventListener('click', () => { convert(+hoursElement.value * 3600) });
    minutesBtn.addEventListener('click', () => { convert(+minutesElement.value * 60) });
    secondsBtn.addEventListener('click', () => { convert(+secondsElement.value) });

    function convert(sec = 0) {
        let day = sec / (24 * 60 * 60);
        let hour = sec / (60 * 60);
        let min = sec / 60;


        daysElement.value = day;
        hoursElement.value = hour;
        minutesElement.value = min;
        secondsElement.value = sec;
    }
}