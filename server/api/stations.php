<?php

header("Content-Type: application/json; charset=UTF-8");

$file = "../data/stations.json";

if(file_exists($file)){

    $data = file_get_contents($file);

    echo $data;

}else{

    echo json_encode([
        "error"=>"Database topilmadi"
    ]);

}

?>
