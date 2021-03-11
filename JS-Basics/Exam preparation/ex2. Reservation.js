function solve(input) {
    let madeedReservationDay = Number(input.shift());
    let madeedReservationMonth = Number(input.shift());
    let comingDay = Number(input.shift());
    let comingMonth = Number(input.shift());
    let leavingDay = Number(input.shift());
    let leavingMonth = Number(input.shift());
    let sum = 0;
    let nights = Math.abs(leavingDay - comingDay);
    if (madeedReservationMonth < comingMonth) {
        nights *= 25;
        sum = nights * 0.80;
    }
    else if (Math.abs(madeedReservationDay - comingDay) >= 10) {
        sum = nights * 25;

    }
    else {
        sum = nights * 30;
    }
    console.log(`Your stay from ${comingDay}/${comingMonth} to ${leavingDay}/${leavingMonth} will cost ${sum.toFixed(2)}`);
    
}
solve([10,
    5,
    15,
    5,
    18,
    5])