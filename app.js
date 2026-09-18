// =========================
// Map Locations
// =========================

const USC = [34.0224, -118.2851];

const QINGDAO = [36.0671, 120.3826];



// =========================
// Create Leaflet Map
// =========================

const map = L.map("map").setView(USC, 13);


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);



// =========================
// Map Markers
// =========================

L.marker(USC)
    .addTo(map)
    .bindPopup("University of Southern California");


L.marker(QINGDAO)
    .addTo(map)
    .bindPopup("Qingdao, China");



// =========================
// Map Buttons
// =========================

const homeButton =
    document.getElementById("home-button");

const uscButton =
    document.getElementById("usc-button");

const statusText =
    document.getElementById("status");



// Go to Qingdao

homeButton.addEventListener("click", function () {

    map.flyTo(QINGDAO, 11);

    statusText.textContent =
        "The map is now showing Qingdao.";

});



// Go to USC

uscButton.addEventListener("click", function () {

    map.flyTo(USC, 13);

    statusText.textContent =
        "The map is now showing USC.";

});



// =========================
// Show / Hide Attractions
// =========================

const toggleButton =
    document.getElementById("toggle-attractions");

const attractionsTable =
    document.getElementById("attractions-table");

const toggleMessage =
    document.getElementById("toggle-message");



// Named JavaScript Function

function toggleAttractions() {

    attractionsTable.classList.toggle("hidden");


    if (attractionsTable.classList.contains("hidden")) {

        toggleButton.textContent =
            "Show Attractions";

        toggleMessage.textContent =
            "The attraction table is currently hidden.";

    } else {

        toggleButton.textContent =
            "Hide Attractions";

        toggleMessage.textContent =
            "The attraction table is currently visible.";

    }

}



// Event Listener

toggleButton.addEventListener(
    "click",
    toggleAttractions
);



// =========================
// Day.js - Current Date
// =========================

const currentDate =
    document.getElementById("current-date");



function showCurrentDate() {

    currentDate.textContent =
        "Today is " +
        dayjs().format("MMMM D, YYYY");

}



// Run the Day.js function

showCurrentDate();