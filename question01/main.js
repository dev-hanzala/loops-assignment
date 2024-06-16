// Leason plan
// 1:
var myWork = [];
// 2:
for (var i = 1; i <= 10; i++) {
    var leason = {
        name: "Leason ".concat(i),
        status: (i % 2) ? true : false,
    };
    // 3:
    myWork.push(leason);
}
;
// 4:
console.log(myWork);
