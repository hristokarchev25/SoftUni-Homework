function solution(array) {
    let sum=0;
    let firstElement = array[0];
    let lastElement = array.pop();
    sum = Number(firstElement)+Number(lastElement);
    console.log(sum);

}
solution (['20','30','50']);