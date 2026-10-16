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

// ===== Place verdict (only runs on pages that have a verdict box) =====
const verdictEl = document.getElementById('verdict');

if (verdictEl) {
  // Values come from data- attributes, so they arrive as strings
  const rating = Number(verdictEl.dataset.rating);
  const priceLevel = Number(verdictEl.dataset.priceLevel);
  const isOpenNow = verdictEl.dataset.open === 'true';
  const isWalkable = verdictEl.dataset.walkable === 'true';

  // Decision 1: rating label (if / else if / else)
  let ratingLabel;
  if (rating >= 4) {
    ratingLabel = 'Highly recommended';
  } else if (rating >= 2.5) {
    ratingLabel = 'Worth a visit';
  } else {
    ratingLabel = "Only if you're nearby";
  }

  // Decision 2: budget check (&& plus ternary)
  const goodForNow = priceLevel <= 2 && isOpenNow === true;
  const budgetNote = goodForNow ? 'Good option right now' : 'Maybe another time';

  // Decision 3: distance note (boolean plus ternary)
  const distanceNote = isWalkable === true ? 'Walking distance' : 'Better to commute';

  document.getElementById('rating-label').textContent = rating + ' / 5 — ' + ratingLabel;
  document.getElementById('budget-note').textContent = budgetNote;
  document.getElementById('distance-note').textContent = distanceNote;

  console.log('Rating label:', ratingLabel);
  console.log('Good for now:', goodForNow);
  console.log('Distance note:', distanceNote);
}