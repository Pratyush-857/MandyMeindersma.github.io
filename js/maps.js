const center = [41.615791, -116.201579]
const map = L.map("map").setView(center, 3); //[latitude, longitude], zoom

const EdmontonAmii = [53.545703, -113.496414];
const HawaiiAAAI = [21.2826687, -157.8385384];
const NewYorkCunyTechPrep = [40.743218055341, -74.009053862658];
const MontrealCANCWIC = [45.4980116, -73.5714769];
const NewOrleansAAAI = [29.9475306, -90.0635043];
const WaterlooEquithon = [43.471708, -80.543197];
const LakeLouiseNEW = [51.417708, -116.21686];

L.tileLayer("https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://carto.com/basemaps">CartoDB</a> + <a href="https://www.freepik.com/icons/microphone">Freepik</a>',
}).addTo(map);

// other styles of maps I could choose:
// https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
// https://tile.opentopomap.org/{z}/{x}/{y}.png
// https://tile.openstreetmap.org/{z}/{x}/{y}.png

var micIcon = L.icon({
  iconUrl: 'img/mic.png',
  iconSize:     [40, 40], // size of the icon
  iconAnchor:   [0, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [35, -35] // point from which the popup should open relative to the iconAnchor
});

function stylePopup(description) {
  return "<span style='font-size:20px;'>" + description + "</span>";
}


const EdmontonAmiiMarker = L.marker(EdmontonAmii, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup("Alberta Machine Intelligence Institute Panel on working in the industry"));

const HawaiiAAAIMarker = L.marker(HawaiiAAAI, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup("Association for the Advancement of Artificial Intelligence on Robotics"));

const NewYorkCunyTechPrepMarker = L.marker(NewYorkCunyTechPrep, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup("City University of New York on Open Source"));

const MontrealCANCWICMarker = L.marker(MontrealCANCWIC, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup("Canadian Celebration of Women in Computing on my research on Cardiac Imaging Software"));

const NewOrleansAAAIMarker = L.marker(NewOrleansAAAI, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup("Association for the Advancement of Artificial Intelligence on making friendly robots for Autictic Children"));

const WaterlooEquithonMarker = L.marker(WaterlooEquithon, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup("Equithon Hackathon on my winning project"));

const LakeLouiseNEWMarker = L.marker(LakeLouiseNEW, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup("Network of Empowered Women on my winning case study"));






