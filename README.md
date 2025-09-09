<!-- Question no-1 -->

var = function redeclare করা যায়, আগে থেকে hoisting হয়। But we do not use It Today.

let = block reassign করা যায় কিন্তু redeclare করা যায় না।We use mostly this variable.

const =  একবার assign করলে আর change করা যায় না।sometimes we use this variable.

<!-- Question no 2 -->

map() = নতুন একটা array return করে .When need return ,we use mostly map function.

forEach() = শুধু loop করে, কিছু return করে না. when do not return ,we use forEach function

filter() = শর্ত অনুযায়ী নতুন array return করে।

<!-- Question no-3 -->

Arrow function হলো ছোট আকারে function লেখার নতুন syntax। we use shorly and quicly Arrow ES6 function than other function syntax.
Example: const add = (a, b) => a + b;

<!-- Question no 4 -->
Destructuring দিয়ে object বা array থেকে আলাদা variable বের করা যায়।
when need specific data, then we use Destructing ES6 Array
Example:let numbers = [10, 20];
let [x, y] = numbers;
console.log(x);

 <!-- Question no 5 -->
 Template literals হলো backtick (`) দিয়ে লেখা string। এর মধ্যে variable সরাসরি ${} দিয়ে বসানো যায়।
 Example:let name = "Rahim";
let msg = `Hello, my name is ${name}`;

