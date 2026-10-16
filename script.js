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

// ===== Decision 1: rating label (if / else if / else) =====
const rating = 4.5; // out of 5
let ratingLabel;

if (rating >= 4) {
  ratingLabel = 'Highly recommended';
} else if (rating >= 2.5) {
  ratingLabel = 'Worth a visit';
} else {
  ratingLabel = "Only if you're nearby";
}

const ratingEl = document.getElementById('rating-label');
if (ratingEl) {
  ratingEl.textContent = rating + ' / 5 — ' + ratingLabel;
}

// ===== Decision 2: budget check (&& plus ternary) =====
const priceLevel = 0;      // 0 = free, 1 = cheap, 2 = moderate, 3 = pricey
const isOpenNow = true;
const goodForNow = priceLevel <= 2 && isOpenNow === true;
const budgetNote = goodForNow ? 'Good option right now' : 'Maybe another time';

const budgetEl = document.getElementById('budget-note');
if (budgetEl) {
  budgetEl.textContent = budgetNote;
}

// ===== Decision 3: distance note (boolean plus ternary) =====
const isWalkable = true;
const distanceNote = isWalkable === true ? 'Walking distance' : 'Better to commute';

const distanceEl = document.getElementById('distance-note');
if (distanceEl) {
  distanceEl.textContent = distanceNote;
}

// ===== Console logs =====
console.log('Guide name:', guideName);
console.log('Current year:', currentYear);
console.log('Places counted:', placeCount);
console.log('Rating label:', ratingLabel);
console.log('Good for now:', goodForNow);
console.log('Distance note:', distanceNote);