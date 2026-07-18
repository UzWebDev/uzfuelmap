// Fargona Metan Map

const map = L.map("map").setView(
    [40.3864, 71.7864],
    11
);


// OpenStreetMap qatlam

L.tileLayer(
"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19
}
).addTo(map);


// Namuna metan zapravkalar

const stations = [

{
name:"Farg‘ona Metan 1",
lat:40.3864,
lng:71.7864,
status:"🟢 Ishlayapti",
queue:"10 daqiqa"
},

{
name:"Marg‘ilon Metan",
lat:40.4721,
lng:71.7246,
status:"🟢 Ishlayapti",
queue:"20 daqiqa"
}

];


// Markerlarni chiqarish

stations.forEach(station=>{

L.marker([
station.lat,
station.lng
])
.addTo(map)
.bindPopup(`

<b>🚗 ${station.name}</b>
<br>
Holat: ${station.status}
<br>
Navbat: ${station.queue}

`);

});

