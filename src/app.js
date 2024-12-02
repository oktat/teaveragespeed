/*
* File: app.js
* Author: Sallai András
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-02
* Github: https://github.com/oktat/teaveragespeed
* Licenc: MIT
*/

import { calcAverageSpeed } from './utils.js'

const doc = {
  distaneceInput: document.querySelector('#distance'),
  timeInput: document.querySelector('#time'),
  calcButton: document.querySelector('#calcButton'),
  aboutButton: document.querySelector('#aboutButton'),
  averageInput: document.querySelector('#average')
}

doc.calcButton.addEventListener('click', () => {
  const distance = Number(doc.distaneceInput.value)
  const time = Number(doc.timeInput.value)
  const average = calcAverageSpeed(distance, time)
  doc.averageInput.value = average
})

doc.aboutButton.addEventListener('click', () => {
  alert('Sallai András\nLicenc: MIT')
})
