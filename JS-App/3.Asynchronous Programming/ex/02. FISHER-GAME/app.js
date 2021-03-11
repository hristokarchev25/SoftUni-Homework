function attachEvents() {
    let addBtn = document.querySelector('button.add');
    let loadBtn = document.querySelector('button.load');
    const catchesParentDiv = document.getElementById('catches');

    const postAndGetUrl = `https://fisher-game.firebaseio.com/catches.json`;
    const deleteAndUpdateUrl = `https://fisher-game.firebaseio.com/catches/`;

    addBtn.addEventListener('click', () => {
        let angler = document.querySelector('fieldset > input.angler');
        let weight = document.querySelector('fieldset > input.weight');
        let species = document.querySelector('fieldset > input.species');
        let location = document.querySelector('fieldset > input.location');
        let bait = document.querySelector('fieldset > input.bait');
        let captureTime = document.querySelector('fieldset > input.captureTime');

        let objWithValues = JSON.stringify({
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value
        });

        fetch(postAndGetUrl, {
            method: "POST",
            body: objWithValues
        });

        angler.value = ' ';
        weight.value = ' ';
        species.value = ' ';
        location.value = ' ';
        bait.value = ' ';
        captureTime.value = ' ';
    });

    loadBtn.addEventListener('click', () => {
        fetch(postAndGetUrl)
            .then(res => res.json())
            .then(data => {
                Object.keys(data).forEach(key => appendCatch(key, data));
            });
    });


    function appendCatch(key, data) {
        let { angler, weight, species, location, bait, captureTime } = data[key];
        let catchDiv = elementCreator('div', 'catch', '');
        catchDiv.setAttribute('data-id', key);

        let anglerLabel = elementCreator('label', '', 'Angler');
        let anglerInput = elementCreator('input', 'angler', angler, 'text');

        let weightLabel = elementCreator('label', '', 'Weight');
        let weightInput = elementCreator('input', 'weight', weight, 'number');

        let speciesLabel = elementCreator('label', '', 'Species');
        let speciesInput = elementCreator('input', 'species', species, 'text');

        let locationLabel = elementCreator('label', '', 'Location');
        let locationInput = elementCreator('input', 'location', location, 'text');

        let baitLabel = elementCreator('label', '', 'Bait');
        let baitInput = elementCreator('input', 'bait', bait, 'text');

        let captureTimeLabel = elementCreator('label', '', 'Capture Time');
        let captureTimeInput = elementCreator('input', 'captureTime', captureTime, 'number');

        let updateBtn = elementCreator('button', 'update', 'Update');
        let deleteBtn = elementCreator('button', 'delete', 'Delete');

        updateBtn.addEventListener('click', () => {
            let objWithValues = JSON.stringify({
                angler: anglerInput.value,
                weight: weightInput.value,
                species: speciesInput.value,
                location: locationInput.value,
                bait: baitInput.value,
                captureTime: captureTimeInput.value
            });
            fetch(deleteAndUpdateUrl + key + `.json`, { method: 'PUT', body: objWithValues });
        });

        deleteBtn.addEventListener('click', () => {
            fetch(deleteAndUpdateUrl + key + `.json`, { method: 'DELETE' });
        });

        catchDiv.appendChild(anglerLabel);
        catchDiv.appendChild(anglerInput);
        catchDiv.appendChild(document.createElement('hr'));

        catchDiv.appendChild(weightLabel);
        catchDiv.appendChild(weightInput);
        catchDiv.appendChild(document.createElement('hr'));

        catchDiv.appendChild(speciesLabel);
        catchDiv.appendChild(speciesInput);
        catchDiv.appendChild(document.createElement('hr'));

        catchDiv.appendChild(locationLabel);
        catchDiv.appendChild(locationInput);
        catchDiv.appendChild(document.createElement('hr'));

        catchDiv.appendChild(baitLabel);
        catchDiv.appendChild(baitInput);
        catchDiv.appendChild(document.createElement('hr'));

        catchDiv.appendChild(captureTimeLabel);
        catchDiv.appendChild(captureTimeInput);
        catchDiv.appendChild(document.createElement('hr'));

        catchDiv.appendChild(updateBtn);
        catchDiv.appendChild(deleteBtn);

        catchesParentDiv.appendChild(catchDiv);
    };

    function elementCreator(element, classes, content, type) {
        let ele = document.createElement(element);

        if (element === 'input') {
            ele.type = type;
            ele.value = content;
        } else {
            ele.innerHTML = content;
        }
        ele.className = classes;

        return ele;
    };
}
attachEvents();