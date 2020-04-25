function insertMoviesInTbody(tbody, movies) {
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
