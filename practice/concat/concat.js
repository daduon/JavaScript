var groupA = ['A1', 'A2', 'A3'];
var groupB = ['B1', 'B2', 'B3'];
// var groups = groupA.concat(groupB);
// console.table(groupA);
// console.table(groupB);
// console.table(groups);

var groups = [...groupA,...groupB];
// console.table(groups);

// Length
// console.table(groups.length);

//pop()
// let item = groups.pop();
// groups.pop(groups);
// console.log(groups);

//shift
// groups.shift();
// var item = groups.shift(groups);
// console.log(item);

//PUSH
// groups.push("what");
// let item = groups.push("what");
// console.log(item);

//Reverse
//  groups.reverse();
//  console.log(groups.sort());

//Slece
// console.log(groups.slice(4,6));

//indexOf
console.log(groups.indexOf("B2"));
