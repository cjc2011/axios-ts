var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        // console.log(i)
    }, 100 * i);
}
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    return a;
}
f(false);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < 2; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
sumMatrix(matrix);
var arr = [1, 2];
function t(_a) {
    var first = _a[0], second = _a[1];
    console.log(first, 'first');
    console.log(second, 'second');
}
// t(arr)
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var newName1 = o.a, newName2 = o.b;
// console.log(newName1, newName2)
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a, b);
}
function f2(_a) {
    var a = _a.a, b = _a.b;
}
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second);
console.log(bothPlus, 'bothPlus');
var defauts = {
    foo: '',
    price: '$10',
    ambiance: 'noisy'
};
var search = __assign({}, defauts, { foo: 'rich' });
function printLabel(labelledObj) {
    console.log(labelledObj, 'labelledObj');
}
var myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);
