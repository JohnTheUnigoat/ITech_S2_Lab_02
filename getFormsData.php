<?php


function getMedias() {
    require 'db.php';

    return ($collection->distinct('media'));
}

function getActors() {
    require 'db.php';

    return ($collection->distinct('actors'));
}

?>
