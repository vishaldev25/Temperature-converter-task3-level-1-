let inputEl = document.getElementById('input')
let fromEl = document.getElementById('from');
let toEl = document.getElementById('to');
let formEl = document.getElementById('form');
let resultEl = document.getElementById('result');
let copyrightEl = document.getElementById('copyright');
const resultDegreeEl = document.getElementById('resultDegree');

const date = new Date().getFullYear()
copyrightEl.innerHTML = `Copyright © ${date}. All rights reserved.`

let formData = {
    fromValue: fromEl.options[0].value,
    toValue: toEl.options[1].value,
    inputValue: 0
}

fromEl.addEventListener("change", function (event) { 
    formData.fromValue = event.target.value
})

toEl.addEventListener("change", function(event){ 
    formData.toValue = event.target.value;
})

inputEl.addEventListener("change", function (event) {
    formData.inputValue = Number(event.target.value);
})

function calculateDegrees(data) {

    if (data.toValue === toEl.options[0].value) {
        resultDegreeEl.innerHTML = '&deg;C'
    }
    if (data.toValue === toEl.options[1].value) {
        resultDegreeEl.innerHTML = '&deg;F'
    }
    if (data.toValue === toEl.options[2].value) {
        resultDegreeEl.innerHTML = '&deg;K'
    }
    if (data.fromValue === fromEl.options[0].value && data.toValue === toEl.options[0].value) {
        let output = (data.inputValue)
        resultEl.innerHTML = output
    }
    if (data.fromValue === fromEl.options[0].value && data.toValue === toEl.options[1].value) {
       let output = ((data.inputValue * 9 / 5) + 32)
        resultEl.innerHTML = output
    }
    
    if (data.fromValue === fromEl.options[0].value && data.toValue === toEl.options[2].value) {
        let output = (data.inputValue) + 273.15
        resultEl.innerHTML = output
    }

    if (data.fromValue === fromEl.options[1].value && data.toValue === toEl.options[0].value) {
        let output = ((formData.inputValue - 32) * 5 / 9)
        resultEl.innerHTML = output;
    }
    if (data.fromValue === fromEl.options[1].value && data.toValue === toEl.options[1].value) {
        let output = (formData.inputValue)
        resultEl.innerHTML = output;
    }
    if (data.fromValue === fromEl.options[1].value && data.toValue === toEl.options[2].value) {
        let output = ((formData.inputValue - 32) * 5 / 9) + 273.15
        resultEl.innerHTML = output;
    }

    if (data.fromValue === fromEl.options[2].value && data.toValue === toEl.options[0].value) {
        let output = (formData.inputValue - 273.15)
        resultEl.innerHTML = output;
    }
    if (data.fromValue === fromEl.options[2].value && data.toValue === toEl.options[1].value) {
        let output = ((formData.inputValue - 273.15) * 9 / 5) + 32
        resultEl.innerHTML = output;
    }
    if (data.fromValue === fromEl.options[2].value && data.toValue === toEl.options[2].value) {
        let output = formData.inputValue
        resultEl.innerHTML = output;
    }
}

formEl.addEventListener('submit', (event) => { 
    event.preventDefault();
    calculateDegrees(formData);
})
