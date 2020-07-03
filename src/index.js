function xmasTree(pyramidHeight, symbol) {
    let xmas = '';

    // Use variables xmas, pyramidHeight, symbol

    if (symbol.length == 1) {
    	for (i=1; i<=pyramidHeight; i++) {
	    	xmas += " ".repeat(pyramidHeight - i) + symbol.repeat(i * 2 - 1) + '\n';
	    }
   		return xmas;
    } else if (symbol.length == 0) {
    	return 'Вы не  ввели символ!'
    } else {
    	// нужно бы вернуть строку: return 'вы ввели более одного символа. Ошибка!'
    	symbol = symbol[0];
    	for (i=1; i<=pyramidHeight; i++) {
	    	xmas += " ".repeat(pyramidHeight - i) + symbol.repeat(i * 2 - 1) + '\n';
	    }
	    return 'Вы ввели более одного символа! Используем первый символ.\n' + xmas;
    }

    
}

// Check your code
console.log(xmasTree(5, '$#!'));

module.exports = { xmasTree };