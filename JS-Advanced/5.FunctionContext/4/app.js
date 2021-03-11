function solve() {
   let btn = document.getElementById('dropdown');
   let dropdownUl = document.getElementById('dropdown-ul');
   let boxElement = document.getElementById('box');
   btn.addEventListener('click', () => {
      if (dropdownUl.style.display != 'block') {
         dropdownUl.style.display = 'block';
      } else {
         dropdownUl.style.display = 'none';
         if (dropdownUl.style.display == 'none') {
            boxElement.style.backgroundColor = 'black';
            boxElement.style.color = 'white';
         }
      }
   });
   dropdownUl.addEventListener('click', e => {
      boxElement.style.backgroundColor = e.target.textContent;
      boxElement.style.color = 'black';
   });
}