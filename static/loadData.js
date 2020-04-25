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

function loadByMedia() {
    let media = $('#media').val();
    let tbody = $('#tbody-media');

    $.get('media.php', {'media': media}, data => {
        let key = JSON.stringify({'media': media});

        localStorage.setItem(key, data);

        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}

function tryLocalByMedia() {
    let key = JSON.stringify({'media': $('#media').val()});
    let data = localStorage.getItem(key);

    if (data === null) {
        alert('No stored query with this parameter!');
        return;
    }

    let tbody = $('#tbody-media-local');
    let movies = JSON.parse(data);

    insertMoviesInTbody(tbody, movies);
}

function loadByActor() {
    let actor = $('#actor').val();
    let tbody = $('#tbody-actor');

    $.get('actor.php', {'actor': actor}, data => {
        let key = JSON.stringify({'actor': actor});

        localStorage.setItem(key, data);

        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}

function tryLocalByActor() {
    let key = JSON.stringify({'actor': $('#actor').val()});
    let data = localStorage.getItem(key);

    if (data === null) {
        alert('No stored query with this parameter!');
        return;
    }

    let tbody = $('#tbody-actor-local');
    let movies = JSON.parse(data);

    insertMoviesInTbody(tbody, movies);
}

function loadByYear() {
    let year = $('#year').val();
    let tbody = $('#tbody-year');

    $.get('year.php', {'year': year}, data => {
        let key = JSON.stringify({'year': year});

        localStorage.setItem(key, data);

        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}

function tryLocalByYear() {
    let key = JSON.stringify({'year': $('#year').val()});
    let data = localStorage.getItem(key);

    if (data === null) {
        alert('No stored query with this parameter!');
        return;
    }

    let tbody = $('#tbody-year-local');
    let movies = JSON.parse(data);

    insertMoviesInTbody(tbody, movies);
}
