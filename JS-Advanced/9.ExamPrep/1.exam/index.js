function solve() {

    let addButton = document.querySelector('form div button');
    addButton.addEventListener('click', addLecture);

    function addLecture(e) {
        e.preventDefault();


        let [lectureInput, dateInput] = Array.from(document.querySelectorAll('form div input'));
        let moduleInput = document.querySelector('form div select');


        if (!lectureInput.value || !dateInput.value || !moduleInput.value || (moduleInput.value == 'Select module')) {
            return;
        }



        let lectureName = lectureInput.value;
        let date = new Date(dateInput.value);
        let moduleName = moduleInput.value.toUpperCase() + '-MODULE';

        let modulesElement = document.getElementsByClassName('modules')[0];
        let modules = Array.from(modulesElement.children);

        let currentModule = modules.find(x => Array.from(x.children)[0].innerHTML == moduleName);


        if (!currentModule) {
            currentModule = document.createElement('div');
            currentModule.setAttribute('class', 'module');
            modulesElement.appendChild(currentModule);
            let h3Element = document.createElement('h3');
            h3Element.innerHTML = moduleName;
            currentModule.appendChild(h3Element);
            let ulElement = document.createElement('ul');
            currentModule.appendChild(ulElement);
        }


        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'flex');
        currentModule.children[1].appendChild(liElement);


        let h4Element = document.createElement('h4');
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let dateDate = `${date.getFullYear()}/${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}`;
        let dateTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

        h4Element.innerHTML = `${lectureName} - ${dateDate} - ${dateTime}`;
        liElement.appendChild(h4Element);

        let delButton = document.createElement('button');
        delButton.setAttribute('class', 'red');
        delButton.innerHTML = 'Del';
        delButton.addEventListener('click', (e) => {
            let parent = e.currentTarget.parentElement;
            let module = parent.parentElement.parentElement;
            console.log(module);
            parent.remove();
            if (Array.from(Array.from(module.children)[1].children).length == 0) {
                module.remove();
            }
            console.log(parent);
        });
        liElement.appendChild(delButton);


        let ulSortElement = Array.from(currentModule.children)[1];
        let childrenToSort = Array.from(ulSortElement.children);
        let sorted = childrenToSort.sort((a, b) => {
            a = Array.from(a.children)[0].innerHTML.split(' - ')[1];
            b = Array.from(b.children)[0].innerHTML.split(' - ')[1];
            return a.localeCompare(b);
        });

        sorted.forEach(x => ulSortElement.appendChild(x));


    }
};