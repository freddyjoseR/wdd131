document.addEventListener("DOMContentLoaded", function() {
    // Current Year
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    // Last Modified Date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Wind Chill Calculation
    const tempElement = document.getElementById('temp');
    const windElement = document.getElementById('wind');
    const windChillElement = document.getElementById('windChill');

    if (tempElement && windElement && windChillElement) {
        const temp = parseFloat(tempElement.textContent.trim());
        const windSpeed = parseFloat(windElement.textContent.trim());

        function calculateWindChill(temp, windSpeed) {
            if (temp <= 10 && windSpeed > 4.8) {
                const chill = 13.12 + 0.6215 * temp - 11.37 * windSpeed ** 0.16 + 0.3965 * temp * windSpeed ** 0.16;
                return chill.toFixed(1) + " ºC";
            } else {
                return "N/A";
            }
        }

        windChillElement.textContent = calculateWindChill(temp, windSpeed);
    }
});