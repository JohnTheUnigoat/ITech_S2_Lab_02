var localStorage = window.localStorage;

if (localStorage.getItem('max_queries_stored') === null) {
    localStorage.clear();
    localStorage.setItem('max_queries_stored', 5);
}

if (localStorage.getItem('queries_media') === null) {
    localStorage.setItem('queries_media', JSON.stringify([]));
}

if (localStorage.getItem('queries_actor') === null) {
    localStorage.setItem('queries_actor', JSON.stringify([]));
}

if (localStorage.getItem('queries_year') === null) {
    localStorage.setItem('queries_year', JSON.stringify([]));
}

function insertMoviesInTbody(tbody, movies) {
    tbody.empty();

    if (movies.length == 0) {
        tbody.append($('<tr><td colspan="4">No entries found!</td></tr>'));
        return;
    }

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
    let maxSize = parseInt(localStorage.getItem('max_queries_stored'));

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

function loadData(paramType) {
    let param = $('#' + paramType).val();
    let tbody = $('#tbody-' + paramType);

    $.get(paramType + '.php', {[paramType]: param}, data => {
        let query = {
            'param': param,
            'response': data
        };
        storeQuerry('queries_' + paramType, query);

        let movies = JSON.parse(data);
        insertMoviesInTbody(tbody, movies);
    });
}

function tryLocalStorage(paramType) {
    let param = $('#' + paramType).val();
    let tbody = $('#tbody-' + paramType + '-local');

    let queries = JSON.parse(localStorage.getItem('queries_' + paramType));

    for (let i = 0; i < queries.length; i++) {
        if (queries[i].param == param) {
            insertMoviesInTbody(tbody, JSON.parse(queries[i].response));
            return;
        }
    }

    alert('No stored query with this parameter found!');
}
