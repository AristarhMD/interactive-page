const priceSlider = document.querySelector("#price");
const pageViewersEl = document.querySelector(".page-viewers");
const pagePriceEl = document.querySelector(".page-price");

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

colorSlider();

priceSlider.addEventListener("input", () => {
  colorSlider();
  changeText();
});

// Color slide
function colorSlider() {
  let filledSlider = (priceSlider.value / priceSlider.max) * 100 - 10;

  priceSlider.style.background = `linear-gradient(to right, #A4F3EB ${filledSlider}%, #ecf0fb ${filledSlider}%)`;
}

// Change text based on the range
function changeText() {
  let value = priceSlider.value;
  switch (value) {
    case "1":
      pageViewersEl.textContent = "10K";
      pagePriceEl.textContent = "$8";
      break;
    case "2":
      pageViewersEl.textContent = "50K";
      pagePriceEl.textContent = "$12";
      break;
    case "3":
      pageViewersEl.textContent = "100K";
      pagePriceEl.textContent = "$16";
      break;
    case "4":
      pageViewersEl.textContent = "500K";
      pagePriceEl.textContent = "$24";
      break;
    case "5":
      pageViewersEl.textContent = "1M";
      pagePriceEl.textContent = "$36";
      break;
  }
}
