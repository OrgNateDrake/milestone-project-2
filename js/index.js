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
    
    var CopyMatrix = function(M) {
		return M.map(function(row) {
			return row.slice();
		});
	};
	var sumGF2 = function(a, b) {
		return (a !== b) ? one : zero;
	};
	var multGF2 = function(a, b) {
		return a * b;
	};
	var divGF2 = function(a, b) {
		if (b === zero) {
			console.log('Trying to divide by zero!');
		}
		return a;
	};
	var dotProduct = function(v1, v2) {
		return v1.map(function(e, index) {
			return multGF2(e, v2[index]);
		}).reduce(function(a, b) {
			return sumGF2(a, b);
		}, 0);
	};