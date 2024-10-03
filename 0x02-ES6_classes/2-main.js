// 2-main.js
import HolbertonCourse from './2-hbtn_course.js';

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name); // Expected output: ES6
c1.name = 'Python 101';
console.log(c1); // Expected output: updated course name

try {
  c1.name = 12; // Expected error: TypeError: Name must be a string
} catch (err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']); // Expected error: TypeError: Length must be a number
} catch (err) {
  console.log(err);
}

