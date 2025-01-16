var programmingLanguages = ["Javascript", "Php", "Python","Java"];

programmingLanguages.push("C++");
// programmingLanguages.pop();

programmingLanguages.unshift("Ruby on Rails");
programmingLanguages.shift();

programmingLanguages.splice(0,2,"Ruby");

console.log(programmingLanguages);

console.log(Math.random*5);

var places = ["NYC","Paris","London","Berlin"];

var [firstplace, , secondplace] = places;

console.log(firstplace);
console.log(secondplace);

var numbers = [1,2,3,4,5,6,7,8];

var [first, second, ...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString);



