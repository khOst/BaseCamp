(function () {

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var currentHero = {};
    var index = 1;

    document.addEventListener("DOMContentLoaded", () => {

        getHero(index);

    });

    prev.addEventListener('click', e => {
        if (index <= 1) {
            prev.classList.add('disabled');

            return false;
        }
        if (index === 2) {
            prev.classList.add('disabled');
        }

        getHero(--index);

        if (index === 87) {
            next.classList.remove('disabled');
        }
    });

    next.addEventListener('click', e => {
        if (index >= 88) {
            next.classList.add('disabled');

            return false;
        }
        if (index === 87) {
            next.classList.add('disabled');
        }

        getHero(++index);

        if (index === 2) {
            prev.classList.remove('disabled');
        }
    });

    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    function json(response) {
        return response.json()
    }

    function copySomeProps(o1, o2, howMany) {
        var counter = 0;
        for (var prop in o2) {
            if (counter > howMany - 1) break;
            counter++;
            o1[prop] = o2[prop];
        }
    }

    function toNormalCase(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1).split('_').join(' ');
    }

    function renderHero(hero) {
        var heroInfo = document.getElementById('hero-info');
        var heroFilms = document.getElementById('hero-films');
        var fragment = document.createDocumentFragment();

        heroInfo.innerHTML = '';
        for (var prop in hero) {
            var li = document.createElement('li');

            li.textContent = toNormalCase(prop) + ': ' + hero[prop];
            fragment.appendChild(li);
        }

        heroInfo.appendChild(fragment);
    }

    function getHero(index) {

        fetch('http://swapi.co/api/people/' + index)
            .then(status)
            .then(json)
            .then(data => {
                copySomeProps(currentHero, data, 8);

                // fetch(data.films[0])
                //     .then(status)
                //     .then(json)
                //     .then(data => console.log(data));

                // return Promise.all( data.films.map((url) => {
                //    return fetch(url);
                // }));
            })
            // .then(status)
            // .then(json)
            // .then(films => {
            //     films.forEach((film) => {
            //         currentHero.filmTitles = [];
            //         currentHero.filmTitles.push(film);
            //     });
            // })
            .then(() => {
                document.getElementById('hero-info').innerHTML = '<h2>Loading info...</h2>';

                renderHero(currentHero);
            })
            .catch(err => console.log('Something wrong with fetch...', err));
    }

})();
