//let logger = (function () {
    let message = `Hello from console`;

    function printMessage(addMes) {
        console.log(message, addMes);
    }

    //scope.printMessage = printMessage;
   // return {
   //     printMessage,
  //  }
//})(window);

export default{
    print: printMessage,
    name: "Pesho",
} 