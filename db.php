<?php

require_once "./vendor/autoload.php";

$collection = (new MongoDB\Client("mongodb://localhost:27017"))->itech_lab_02->movies;

?>
