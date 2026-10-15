// ===== Constants and variables =====
const guideName = 'IG Worthy Spots';
const currentYear = new Date().getFullYear();
let placeCount = 0;

// ===== Count the place cards (they only exist on the home page) =====
const placeCards = document.querySelectorAll('.place-card');
placeCards.forEach(function () {
  placeCount++;
});

// ===== Write the guide name into the header =====
const nameEl = document.getElementById('guide-name');
if (nameEl) {
  nameEl.textContent = guideName;
}

// ===== Dynamic copyright line in the footer =====
const copyrightEl = document.getElementById('copyright');
if (copyrightEl) {
  copyrightEl.textContent = '© ' + currentYear + ' ' + guideName + '. All rights reserved.';
}

// ===== Computed value: number of places reviewed =====
const countEl = document.getElementById('place-count');
if (countEl) {
  countEl.textContent = 'Places reviewed: ' + placeCount;
}

// ===== Console logs =====
console.log('Guide name:', guideName);
console.log('Current year:', currentYear);
console.log('Places counted:', placeCount);