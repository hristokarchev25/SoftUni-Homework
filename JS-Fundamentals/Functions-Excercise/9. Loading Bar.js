function loadingBar(number) {
    let result = printPercentage(number);
    console.log(result);
    function printPercentage(num) {
        let char = '%';
        let dots = '.';
        let percentage = '';
        let per = char.repeat(num / 10);
        let dotss = dots.repeat((100 - num) / 10)
        if (num < 100) {
            percentage = `${num}% [${per}${dotss}]` + '\n' + `Still loading...`;
        } else {
            percentage = `100% Complete!` + '\n' + `[${per}${dotss}]`;
        }
        return percentage;
    }
}
loadingBar(10);
loadingBar(20);
loadingBar(30);
loadingBar(40);
loadingBar(50);
loadingBar(60);
loadingBar(70);
loadingBar(80);
loadingBar(90);
loadingBar(100);