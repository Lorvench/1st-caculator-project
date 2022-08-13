function constants(num1, num2) {
    calOutput.textContent = num1;
    resultOutput.textContent = num1;
}
let array = []

const a = 0;
b = a;

function add() {
    b = b + parseInt(inputValue.value);
    constants(b, "");

    let obj = {
        name: "ololade",
        prev: b,
        current: inputValue.value,

    }

    array.push(obj);
    console.log(array)
}

function subt() {
    b = b - +inputValue.value
    constants(b, "");
}

function div() {

    b = b / +inputValue.value
    constants(b, "")
}

function mult() {

    b = b * +inputValue.value
    constants(b, "")
}