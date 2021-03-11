function solve() {
   let tr = document.getElementsByTagName('tr');
   let lastClikced;
   [...tr].slice(1).forEach(row => {
      row.addEventListener('click', (event) => {
         let element = event.target.parentNode.style;
         if (element.backgroundColor == '' || element.backgroundColor == undefined) {
            element.backgroundColor = "#413f5e";
            if (lastClikced) {
               lastClikced.backgroundColor = '';
            }
         } else {
            element.backgroundColor = '';
         }

         lastClikced = element;
      });
   });
}
