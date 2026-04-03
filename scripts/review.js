document.addEventListener("DOMContentLoaded", () => {
    // 1. Handle Review Counter
    let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    window.localStorage.setItem("reviewCount", reviewCount);
    
    document.getElementById("review-count").textContent = reviewCount;

    // 2. Handle Footer Dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});