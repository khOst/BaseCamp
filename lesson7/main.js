(function () {

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var heroInfoList = document.getElementById('hero-info');
    var heroFilmsList = document.getElementById('hero-films');
    var loadingBlock = document.getElementById('loading');
    var currentHeroInfo = {};
    var currentHeroFilms = [];
    var index = 1;

    document.addEventListener("DOMContentLoaded", () => {
        getHero(index);

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

    function renderHeroInfo(hero) {
        var fragment = document.createDocumentFragment();

        for (var prop in hero) {
            var li = document.createElement('li');
            li.textContent = toNormalCase(prop) + ': ' + hero[prop];
            fragment.appendChild(li);
        }

        heroInfoList.appendChild(fragment);
    }

    function renderHeroFilms(films) {
        var fragment = document.createDocumentFragment();
        films = films.sort((a, b) => a.id - b.id);

        films.map(film => {
            var li = document.createElement('li');
            var liContent = `Episode ${film.id}: ${film.title}`;
            li.textContent = toNormalCase(liContent);
            fragment.appendChild(li);
        });

        heroFilmsList.appendChild(fragment);
    }

    function getHero(index) {
        heroInfoList.innerHTML = '';
        heroFilmsList.innerHTML = '';
        loadingBlock.innerHTML = '<h3 class="loading-text">Loading...</h3>';
        
        fetch('http://swapi.co/api/people/' + index)
            .then(status)
            .then(json)
            .then(data => {
                copySomeProps(currentHeroInfo, data, 8);

                return Promise.all( data.films.map(url => fetch(url)));
            })
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(films => {
                currentHeroFilms.length = 0;
                films.forEach(film => {
                    currentHeroFilms.push({
                        title: film.title,
                        id: film.episode_id
                    });
                });
            })
            .then(() => {
                loadingBlock.innerHTML = '';
                renderHeroInfo(currentHeroInfo);
                renderHeroFilms(currentHeroFilms);
            })
            .catch(err => console.log('Something wrong with fetch...', err));
    }

})();
