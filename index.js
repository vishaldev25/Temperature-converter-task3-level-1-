let inputEl = document.getElementById('input')
let fromEl = document.getElementById('from');
let toEl = document.getElementById('to');
let formEl = document.getElementById('form');
let resultEl = document.getElementById('result');

let formData = {
    fromValue: "",
    toValue: "",
    inputValue: 0
}

//let output = ((inputEl.value * 9 / 5) + 32);
//resultEl.innerHTML = output
fromEl.addEventListener("change", function (event) { 
    formData.fromValue = event.target.value
})

toEl.addEventListener("change", function(event){ 
    // console.log(event.target.value);
    formData.toValue = event.target.value;
})

inputEl.addEventListener("change", function (event) {
    formData.inputValue = event.target.value;
})


formEl.addEventListener('submit', (event) => { 
    event.preventDefault();
    if (formData.fromValue === "") {
        formData.fromValue = fromEl.options[0].text
    }
    if (formData.toValue === "") { 
        formData.toValue = toEl.options[1].text
    }
    // console.log(formData)
    if (formData.fromValue === fromEl.options[0].text && formData.toValue === toEl.options[1].text) {
        // console.log(formData.inputValue)
        let output = ((formData.inputValue * 9 / 5) + 32)
        resultEl.innerHTML = output;
    }

    if (formData.fromValue === fromEl.options[1].text && formData.toValue === toEl.options[0].text) {
        // console.log(formData.inputValue)
        let output = ((formData.inputValue - 32) * 5 / 9)
        resultEl.innerHTML = output;
    }
    

})
