(function() {;

/* Numbers Zero and One are removed from the Finite Field. 
(See README 'JavaScript Side Notes' for full explanation.) */

    let zero = 0;
    let one = 1;
    const A = [
    [ one, one, zero, zero, zero, one, zero, zero, zero, zero, zero, zero,
    zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [ one, one, one, zero, zero, zero, one, zero, zero, zero, zero, zero,
    zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, one, one, one, zero, zero, zero, one, zero, zero, zero, zero,
    zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, one, one, one, zero, zero, zero, one, zero, zero, zero,
    zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, zero, one, one, zero, zero, zero, zero, one, zero, zero,
    zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [one, zero, zero, zero, zero, one, one, zero, zero, zero, one, zero,
    zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, one, zero, zero, zero, one, one, one, zero, zero, zero, one,
    zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, one, zero, zero, zero, one, one, one, zero, zero, zero,
    one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, zero, one, zero, zero, zero, one, one, one, zero, zero,
    zero, one, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, zero, zero, one, zero, zero, zero, one, one, zero, zero,
    zero, zero, one, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, zero, zero, zero, one, zero, zero, zero, zero, one, one,
    zero, zero, zero, one, zero, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, zero, zero, zero, zero, one, zero, zero, zero, one, one,
    one, zero, zero, zero, one, zero, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, zero, zero, zero, zero, zero, one, zero, zero, zero, one,
    one, one, zero, zero, zero, one, zero, zero, zero, zero, zero, zero,
    zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, one, zero, zero, zero,
    one, one, one, zero, zero, zero, one, zero, zero, zero, zero, zero, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, one, zero, zero,
    zero, one, one, zero, zero, zero, zero, one, zero, zero, zero, zero, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, one, zero,
    zero, zero, zero, one, one, zero, zero, zero, one, zero, zero, zero, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, one,
    zero, zero, zero, one, one, one, zero, zero, zero, one, zero, zero, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    one, zero, zero, zero, one, one, one, zero, zero, zero, one, zero, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero, one, zero, zero, zero, one, one, one, zero, zero, zero, one, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero, zero, one, zero, zero, zero, one, one, zero, zero, zero, zero, one],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero, zero, zero, one, zero, zero, zero, zero, one, one, zero, zero, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero, zero, zero, zero, one, zero, zero, zero, one, one, one, zero, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero, zero, zero, zero, zero, one, zero, zero, zero, one, one, one, zero],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero, zero, zero, zero, zero, zero, one, zero, zero, zero, one, one, one],
    [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
    zero, zero, zero, zero, zero, zero, zero, one, zero, zero, zero, one, one]
    ];
    const n1 = [zero, one, one, one, zero, one, zero, one, zero, one, one, one,
        zero, one, one, one, zero, one, zero, one, zero, one, one, one, zero];
    const n2 = [one, zero, one, zero, one, one, zero, one, zero, one, zero, zero,
        zero, zero, zero, one, zero, one, zero, one, one, zero, one, zero, one];
    const hide = document.getElementById("hide");
    const obj = document.querySelectorAll(".row div");
    let cells = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && key !== "length") {
        cells.push(obj[key]);
        }
    }

    let CopyMatrix = function(M) {
        return M.map(function(row) {
        return row.slice();
        });
    };
    let sumGF2 = function(a, b) {
        return (a !== b) ? one : zero;
    };
    let multGF2 = function(a, b) {
        return a * b;
    };
    let divGF2 = function(a, b) {
        if (b === zero) {
            console.log("Trying to divide by zero!");
        }
        return a;
    };
    let dotProduct = function(v1, v2) {
        return v1.map(function(e, index) {
            return multGF2(e, v2[index]);
        }).reduce(function(a, b) {
            return sumGF2(a, b);
        }, 0);
    };

    /* Returns the Reduced Row Echelon Form representation of the M Matrix. 
    (See README 'JavaScript Side Notes' for full explanation.) */
    let rref = function(M) {
        let N = CopyMatrix(M);
        let lead = 0;
        let rowCount = N.length;
        let columnCount = N[0].length;

        for (let r = 0; r < rowCount; r++) {
            if (lead >= columnCount) {
            return N;
            }
            i = r;
            while (N[i][lead] === zero) {
                i += 1;
                if (i === rowCount) {
                    i = r;
                    lead += 1;
                    if (columnCount === lead) {
                    return N;
                    }
                }
            }
            let aux = N[i].slice();
            N[i] = N[r].slice();
            N[r] = aux;
            let lv = N[r][lead];
            N[r] = N[r].map(function(e) {
                return divGF2(e, lv);
            });
            for (var i = 0; i < rowCount; i++) {
                if (i !== r) {
                    lv = N[i][lead];
                    N[i] = N[i].map(function(e, index) {
                return sumGF2(
                    e,
                    multGF2(lv, N[r][index]));
                    });
                }
            }
            lead += 1;
        }
        return N;
    };
    let getRandomGF2Array = function() {
    let length = A.length;
    let arr = [];
        for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 2));
        }
        return arr;
    };

    /* Check for Orthogonality (e.g. changing A does not change B). For (b, n1) and (b, n2) 
    so that b is a winnable state. (See README 'JavaScript Side Notes' for full explanation.) */
    let getRandomState = function() {
    let b = getRandomGF2Array();
        while (dotProduct(b, n1) !== zero || dotProduct(b, n2) !== zero) {
        b = getRandomGF2Array();
        }
        return b;
    };
    const youWon = function() {
        return document.querySelector(".on") === null;
    };
    let getCurrentState = function() {
    let obj = document.querySelectorAll(".on");
    let b = [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
        zero, zero, zero, zero, zero, zero, zero, zero, zero, zero, zero,
        zero, zero, zero, zero];
        for (let key in obj) {
        if (obj.hasOwnProperty(key) && key !== "length") {
            b[obj[key].id - 1] = one;
            }
        }
        return b;
    };
    let getSolution = function(b) {
    let B = CopyMatrix(A);
        for (let i = b.length - 1; i >= 0; i--) {
            B[i].push(b[i]);
        }
        B = rref(B);
        return B.map(function(row, index) {
        return row[row.length - 1];
        });
    };

    document.getElementById("shuffle")
            .addEventListener("click", function(event) {
    let b = getRandomState();
        for (let i = b.length - 1; i >= 0; i--) {
    let element = document.getElementById(i + 1);
        if (b[i] === one) {
            element.className = "on";
            }
        else {
            element.className = "";
            }
        }
        hide.className = "not-show";
    });

    document.getElementById("solve").addEventListener("click", function(event) {
    let b = getCurrentState();
    let x = getSolution(b);
        x.forEach(function(e, index) {
        if (e === one) {
    let element = document.getElementById(index + 1);
        element.classList.add("answer");
        element.classList.add("solver");
        }
    });

    hide.className = "";
    });

    hide.addEventListener("click", function(event) {
        this.className = "not-show";
        cells.forEach(function(e, i) {
            e.classList.remove("answer");
            e.classList.remove("solver");
        });
    });

    cells.forEach(function(e, i) {
        e.addEventListener("click", function(event) {
    let aux = parseInt(this.id, 10);
    let toSwitch = [aux, aux - 5, aux + 5];
        if (aux % 5 !== 0) {
            toSwitch.push(aux + 1);
        }
        if (aux % 5 !== 1) {
            toSwitch.push(aux - 1);
        }
        if (this.classList.contains("answer")) {
            this.classList.remove("answer");
        }
        else if (this.classList.contains("solver")) {
            this.classList.add("answer");
        }
        for (let i = toSwitch.length - 1; i >= 0; i--) {
        if (toSwitch[i] > 0 && toSwitch[i] <= A.length) {
        const element = document.getElementById(toSwitch[i]);
            if (element.classList.contains("on")) {
                element.classList.remove("on");
            }
            else {
                element.classList.add("on");
            }
        }
        }

        if (youWon()) {
            alert("Congratulations, You Win!!");
        }
        });
    });
})();