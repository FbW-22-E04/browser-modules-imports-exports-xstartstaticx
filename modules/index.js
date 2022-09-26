// Your code goes here!
import * as allPercentage from "./percentage.js";
import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";

// modulo functionality
const m1 = document.querySelector("#modulo_1");
const m2 = document.querySelector("#modulo_2");
const mR = document.querySelector("#modulo_result");

m1.addEventListener("input", (e) => {
  const remainder = allPercentage.modulo(m1.value, m2.value);
  mR.value = fixRoundingErrors(remainder);
});
m2.addEventListener("input", (e) => {
  const remainder = allPercentage.modulo(m1.value, m2.value);
  mR.value = fixRoundingErrors(remainder);
});

// percentage functionality
const p1 = document.querySelector("#percentage_1");
const p2 = document.querySelector("#percentage_2");
const pR = document.querySelector("#percentage_result");

p1.addEventListener("input", (e) => {
  const percentage = allPercentage.percentage(p1.value, p2.value);
  pR.value = percentage;
});
p2.addEventListener("input", (e) => {
  const percentage = allPercentage.percentage(p1.value, p2.value);
  pR.value = percentage;
});

// percentageOf functionality
const pOf1 = document.querySelector("#percentageOf_1");
const pOf2 = document.querySelector("#percentageOf_2");
const pOfR = document.querySelector("#percentageOf_result");

pOf1.addEventListener("input", (e) => {
  const percentageOf = allPercentage.percentageOf(pOf1.value, pOf2.value);
  pOfR.value = fixRoundingErrors(percentageOf);
});
pOf2.addEventListener("input", (e) => {
  const percentageOf = allPercentage.percentageOf(pOf1.value, pOf2.value);
  pOfR.value = fixRoundingErrors(percentageOf);
});

// difference functionality
const d1 = document.querySelector("#difference_1");
const d2 = document.querySelector("#difference_2");
const dR = document.querySelector("#difference_result");

d1.addEventListener("input", (e) => {
  const difference = allPercentage.difference(d1.value, d2.value);
  dR.value = difference;
});
d2.addEventListener("input", (e) => {
  const difference = allPercentage.difference(d1.value, d2.value);
  dR.value = difference;
});

// aspect ratio functionality
// const r1 = document.querySelector("#ratio_1");
// const r2 = document.querySelector("#ratio_2");
// const newWidth = document.querySelector("#ratio_result-width");
// const newHeight = document.querySelector("#ratio_result-height");

// r1.addEventListener("input", (e) => {
//   const newHeightResult = calculateAspectRatio(
//     r1.value,
//     r2.value,
//     newWidth.value
//   );
//   newHeight.value = newHeightResult;
// });
// r2.addEventListener("input", (e) => {
//   const newWidthResult = calculateAspectRatio(
//     r1.value,
//     r2.value,
//     newHeight.value
//   );
//   newWidth.value = newWidthResult;
// });
