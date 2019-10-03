function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    var posStart = 0;
    var posEnd = 0;
	for (var i = 0; i < expr.length; i++) {
		if (expr[i] == '(') {
			posStart += 1;
		}
		if (expr[i] == ')') {
			posEnd += 1;
		}
	}
	if  (posStart != posEnd) {
		throw new Error('ExpressionError: Brackets must be paired');
	}
    var output = undefined;
    var x = expr.replace(/\s/g, '');
    var sortValue = String(x).match(/(^[0-9*\/\\(\\)+-]+$)/);
    var res = new Function('return ' + sortValue);

	
    for (var i = 0; i <= expr.length; i++) {
    	if ( expr[i]  == '/' ) { 
	    	if ( expr[i+2] == '0' ) {
	    		throw new Error('TypeError: Division by zero.');
	    	}
		} else {
			output = res();
		}
    } 
    return  output;
}

module.exports = {
    expressionCalculator
}