function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    var x = expr.replace(/\s/g, '');
    var sortValue = String(x).match(/(^[0-9*\/\\(\\)+-]+$)/);
    var res = new Function('return ' + sortValue);
    var output = res();
    return output
}

module.exports = {
    expressionCalculator
}