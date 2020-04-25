<?php

require_once "./vendor/autoload.php";

$collection = (new MongoDB\Client("mongodb://localhost:27017", [], [
    'typeMap' => [
        'array' => 'Array',
        'document' => 'object',
        'root' => 'object',
    ]
]))->itech_lab_02->movies;

?>