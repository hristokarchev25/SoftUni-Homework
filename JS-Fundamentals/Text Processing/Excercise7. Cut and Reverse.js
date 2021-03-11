function solve(input) {
   // let half = input.length / 2;

   /// let left = input.substr(0, half);
  ///  let right = input.substr(half, half);

  //  console.log(reverseString(left));
  //  console.log(reverseString(right));

 ///   function reverseString(str) {
  //      let newString = "";
   //     for (let i = str.length - 1; i >= 0; i--) {
   //         newString += str[i];
   //     }
  //      return newString;
  //  }
  console.log(input.substring(0,(input.length/2)).split("").reverse().join(""));
  console.log(input.substring((input.length/2)).split("").reverse().join(""));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')