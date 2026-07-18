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
).addTo(map);const map = L.map("map").setView(
    [40.3864,71.7864],
    11
);


L.tileLayer(
"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19
}
).addTo(map);


// Server API dan zapravkalarni olish

fetch("../server/api/stations.php")
.then(response => response.json())
.then(stations => {


stations.forEach(station => {


let color = station.status === "working"
? "🟢"
: "🔴";


L.marker([
station.lat,
station.lng
])
.addTo(map)
.bindPopup(`

<b>🚗 ${station.name}</b>
<br>
Holat: ${color}
<br>
Navbat: ${station.queue} daqiqa

`);


});


})
.catch(error=>{
console.log("Xatolik:",error);
});
