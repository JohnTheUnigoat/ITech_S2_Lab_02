<?php

require 'db.php';

$year = $_GET['year'];

$res = $collection->find(
    ['release_year' => $year],
    ['projection' =>
        ['_id' => 0, 'name' => 1, 'release_year' => 1, 'director' => 1, 'media' => 1]
    ]
)->toArray();

echo(json_encode($res));

?>
