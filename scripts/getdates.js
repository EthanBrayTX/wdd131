// Dynamically populate the current year for the copyright
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically populate the last modified date
// Standard format: "Last Modification: MM/DD/YYYY HH:MM:SS"
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;