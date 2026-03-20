// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
const temp = 8; // Static value
const windSpeed = 15; // Static value

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const displayWindChill = () => {
    const wcElement = document.getElementById("windchill");
    // Conditions: Temp <= 10°C AND Wind > 4.8 km/h
    if (temp <= 10 && windSpeed > 4.8) {
        wcElement.textContent = `${calculateWindChill(temp, windSpeed)}°C`;
    } else {
        wcElement.textContent = "N/A";
    }
};

displayWindChill();