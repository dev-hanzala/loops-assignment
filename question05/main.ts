// Arrays
// 1:

let myArray:string[] = [];

// 2:

for (let i = 1; i <= 10; i++){
	myArray.push(`element${i}`);
};

// 3:

console.log(myArray);

// 4:

for (let i = 0; i < 10; i++){
	console.log(`element: ${myArray[i]}, index: ${i}`);
};

// 5:

for (let element of myArray){
	console.log(element);
};