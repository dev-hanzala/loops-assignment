// Objects
// 1:
var myObject = {
    item1: "value1",
    item2: "value2",
    item3: "value3",
};
for (var item in myObject) {
    console.log("key: ".concat(item, ", value: ").concat(myObject[item]));
}
;
