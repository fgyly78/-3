function isNegativeNumber(element, resultID) {
a = parseInt(a);
    let num = '';
    let common = isCommonNumber(a);
    if(a < 0) {
        alert("Отрицательное");
    } else {
        alert("Положительное");
    }
    resultElement.textContent = num + ' / ' + common;
}
function isSimpleNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            alert("Сложное");
        } else {
            alert("Простое");
    } 
}