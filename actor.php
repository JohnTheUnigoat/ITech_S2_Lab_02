<?php

require 'db.php';

$actor = $_GET['actor'];

$res = $collection->find(
    ['actors' => ['$eq' => $actor]],
    ['projection' =>
        ['_id' => 0, 'name' => 1, 'release_year' => 1, 'director' => 1, 'media' => 1]
    ]
)->toArray();

echo(json_encode($res));

?>
