<?php

require 'db.php';

$media = $_GET['media'];

$res = $collection->find(
    ['media' => $media],
    ['projection' =>
        ['_id' => 0, 'name' => 1, 'release_year' => 1, 'director' => 1, 'media' => 1]
    ]
)->toArray();

echo(json_encode($res));

?>
