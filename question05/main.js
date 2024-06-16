// Arrays
// 1:
var myArray = [];
// 2:
for (var i = 1; i <= 10; i++) {
    myArray.push("element".concat(i));
}
;
// 3:
console.log(myArray);
// 4:
for (var i = 0; i < 10; i++) {
    console.log("element: ".concat(myArray[i], ", index: ").concat(i));
}
;
// 5:
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var element = myArray_1[_i];
    console.log(element);
}
;
