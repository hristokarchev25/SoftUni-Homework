function attachEvents() {
    let submitBtn = document.getElementById('submit');
    let nameOfLocation = document.getElementById('location');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let forecastParentDiv = document.getElementById('forecast');

    const locationUrl = `https://judgetests.firebaseio.com/locations.json`;
    const baseUrl = `https://judgetests.firebaseio.com/forecast/`;

    const symbolsObj = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    };

    submitBtn.addEventListener('click', () => {
        fetch(locationUrl)
            .then(res => res.json())
            .then(data => {
                let { name, code } = data.find(c => c.name === nameOfLocation.value);

                let currentPromise = fetch(baseUrl + `today/${code}.json`)
                    .then(res => res.json());

                let upcomingPromise = fetch(baseUrl + `upcoming/${code}.json`)
                    .then(res => res.json());

                Promise.all([currentPromise, upcomingPromise])
                    .then(forecastShower)
                    .catch(err => console.log(err));
            });
    });

    function elementCreator(element, classes, content) {
        let ele = document.createElement(element);
        ele.className = classes;
        ele.innerHTML = content;

        return ele;
    };

    function forecastShower([currentData, upcomingData]) {
        forecastParentDiv.style.display = 'block';

        currentShower(currentData);
        upcomingShower(upcomingData);
    };

    function currentShower(currentData) {
        let forecastDiv = elementCreator('div', 'forecasts', '');
        let currentSymbol = symbolsObj[currentData.forecast.condition];
        let conditionImageSpan = elementCreator('span', 'condition symbol', currentSymbol);
        let conditionInfoSpan = elementCreator('span', 'condition', '');

        let forecastCity = elementCreator('span', 'forecast-data', currentData.name);
        let forecastCels = elementCreator('span', 'forecast-data', `${currentData.forecast.low}${symbolsObj.Degrees}/${currentData.forecast.high}${symbolsObj.Degrees}`);
        let forecastWeather = elementCreator('span', 'forecast-data', currentData.forecast.condition);


        conditionInfoSpan.appendChild(forecastCity);
        conditionInfoSpan.appendChild(forecastCels);
        conditionInfoSpan.appendChild(forecastWeather);

        forecastDiv.appendChild(conditionImageSpan);
        forecastDiv.appendChild(conditionInfoSpan);
        currentDiv.appendChild(forecastDiv);
    };

    function upcomingShower(upcomingData) {
        let forecastDiv = elementCreator('div', 'forecast-info', '');

        upcomingData.forecast.forEach(e => {
            let upcomingSpanInfo = elementCreator('span', 'upcoming', '');
            let forecastImageSpan = elementCreator('span', 'symbol', symbolsObj[e.condition]);
            let forecastCels = elementCreator('span', 'forecast-data', `${e.low}${symbolsObj.Degrees}/${e.high}${symbolsObj.Degrees}`);
            let forecastWeather = elementCreator('span', 'forecast-data', e.condition);

            upcomingSpanInfo.appendChild(forecastImageSpan);
            upcomingSpanInfo.appendChild(forecastCels);
            upcomingSpanInfo.appendChild(forecastWeather);
            forecastDiv.appendChild(upcomingSpanInfo);
        });

        upcomingDiv.appendChild(forecastDiv);
    };
}

attachEvents();