// Leason plan

// 1:

let myWork: any = [];

// 2:

for (let i = 1; i <= 10; i++) {
  let leason = {
    name: `Leason ${i}`,
    status: i % 2 ? true : false,
  };

  // 3:

  myWork.push(leason);
}

// 4:

console.log(myWork);
