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
        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}

function loadByActor() {
    let actor = $('#actor').val();
    let tbody = $('#tbody-actor');

    $.get('actor.php', {'actor': actor}, data => {
        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}

function loadByYear() {
    let year = $('#year').val();
    let tbody = $('#tbody-year');

    $.get('year.php', {'year': year}, data => {
        let movies = JSON.parse(data);

        insertMoviesInTbody(tbody, movies);
    });
}
