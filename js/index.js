(function() {
	'use strict';

	var zero = 0;
	var one = 1;
	var A = [
		[ one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[ one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero,  one,  one, zero, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[ one, zero, zero, zero, zero,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero, zero,  one, zero, zero, zero,  one,  one, zero, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero, zero, zero,  one, zero, zero, zero, zero,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one, zero, zero, zero, zero,  one, zero, zero, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero, zero,  one,  one, zero, zero, zero,  one, zero, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero, zero,  one, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one, zero, zero, zero, zero,  one],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero, zero,  one,  one, zero, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one, zero],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one,  one],
		[zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,  one, zero, zero, zero,  one,  one]
	];
	var n1 = [zero,  one,  one,  one, zero,  one, zero,  one, zero,  one,  one,  one, zero,  one,  one,  one, zero,  one, zero,  one, zero,  one,  one,  one, zero];
	var n2 = [ one, zero,  one, zero,  one,  one, zero,  one, zero,  one, zero, zero, zero, zero, zero,  one, zero,  one, zero,  one,  one, zero,  one, zero,  one];
	var hide = document.getElementById('hide');
	var obj = document.querySelectorAll('.row div');
	var cells = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key) && key !== 'length') {
			cells.push(obj[key]);
		}
	}