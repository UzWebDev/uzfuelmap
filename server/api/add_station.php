<?php

header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"), true);

if(!$data){
    echo json_encode([
        "success"=>false,
        "message"=>"Ma'lumot kelmadi"
    ]);
    exit;
}


$file = "../data/stations.json";


$stations = [];

if(file_exists($file)){
    $stations = json_decode(
        file_get_contents($file),
        true
    );
}


$data["id"] = count($stations)+1;


$stations[] = $data;


file_put_contents(
    $file,
    json_encode(
        $stations,
        JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE
    )
);


echo json_encode([
    "success"=>true,
    "message"=>"Zapravka qo'shildi"
]);

?>

