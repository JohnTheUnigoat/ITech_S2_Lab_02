var localStorage = window.localStorage;

if (localStorage.getItem('maxQueriesStored') === null) {
    localStorage.clear();
    localStorage.setItem('maxQueriesStored', 5);
}

if (localStorage.getItem('queriesMedia') === null) {
    localStorage.setItem('queriesMedia', JSON.stringify([]));
}

if (localStorage.getItem('queriesActor') === null) {
    localStorage.setItem('queriesActor', JSON.stringify([]));
}

if (localStorage.getItem('queriesYear') === null) {
    localStorage.setItem('queriesYear', JSON.stringify([]));
}

function insertMoviesInTbody(tbody, movies) {
    tbody.empty();

    movies.forEach(movie => {
        let tr = $('<tr></tr>');
        tr.append($(`<td>${movie.name}</td>`));
        tr.append($(`<td>${movie.release_year}</td>`));
        tr.append($(`<td>${movie.director}</td>`));
        tr.append($(`<td>${movie.media}</td>`));

        tbody.append(tr);
    });
}

function storeQuerry(key, query) {
    let queries = JSON.parse(localStorage.getItem(key));
    let maxSize = parseInt(localStorage.getItem('maxQueriesStored'));

    for (let i = 0; i < queries.length; i++) {
        if (queries[i].param == query.param){
            queries.splice(i, 1);
        }
    }

    queries.push(query);

    if (queries.length > maxSize) {
        queries.shift();
    }

    localStorage.setItem(key, JSON.stringify(queries));
}

function loadByMedia() {
    let media = $('#media').val();
    let tbody = $('#tbody-media');

    $.get('media.php', {'media': media}, data => {
        let query = {
            'param': media,
            'response': data
        };

        storeQuerry('queriesMedia', query);

        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}

function loadByActor() {
    let actor = $('#actor').val();
    let tbody = $('#tbody-actor');

    $.get('actor.php', {'actor': actor}, data => {
        let query = {
            'param': actor,
            'response': data
        };

        storeQuerry('queriesActor', query);
        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}

function loadByYear() {
    let year = $('#year').val();
    let tbody = $('#tbody-year');

    $.get('year.php', {'year': year}, data => {
        let query = {
            'param': year,
            'response': data
        };

        storeQuerry('queriesYear', query);
        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}
