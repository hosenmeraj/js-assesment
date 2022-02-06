/*১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল
 লিখো। সেটা কি তুমি লিখতে পারবে ? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।*/
// var name = 'meraj'; //string variable
// console.log(typeof name);
// var age = 23 // number variable
// console.log(typeof age);
// var havePhoneNumber = true; //boolean variable
// console.log(typeof havePhoneNumber);


/*২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়।
যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়।
তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও ।
অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে।
এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না।
 সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।  */


// let penPrize = 100;
// const age = 20;
// penPrize += 10;
// age += 2;
// console.log(penPrize);
//console.log(age); its give an error bcz its assign at one time
// let x = 1;
// if (x == 1) {
//     x = 3;
//     console.log(x);
// }
// console.log(x);

// const y = 1;
// if (y == 1) {
//     y = 2;
//     console.log(y);
// }
// console.log(y);

/*৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো।
 অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে
  সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।
  */

// let x = 11;
// let y = 5;
// let sum = x + y; //adding
// console.log(sum);
// let substrac = x - y; //substc
// console.log(substrac);
// let multiplication = x * y; //multiplication
// console.log(multiplication);
// let dividor = x / y;
// console.log(dividor);
// let reminder = x % 2 == 0;
// console.log(reminder);

/*
৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো।
যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান।
এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো।
তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।
*/

// let hanifBus = 129;
// let sohagBus = 130;
// if (hanifBus > sohagBus) {
//     console.log('hanif bus sohag bus er beshi ache');
// }
// else if (hanifBus < sohagBus) {
//     console.log('sohag bus beshi ache');
// }
// else if (hanifBus == sohagBus) {
//     console.log('tader soman songkhok bus ache');
// }
// else if (hanifBus != sohagBus) {
//     console.log('tara osoman noy');
// }
// else if (hanifBus >= sohagBus) {
//     console.log('sohag bus theke hanif bus soman o boro');
// }
// else if (hanifBus <= sohagBus) {
//     console.log('hanif bus sohag bus theke kom o soman');
// }
// else {
//     console.log('tar dhare kacheo nai');
// }

/*
৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে।
তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে।
অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।
*/
// let forntendDeveloper = true;
// let backendDeveloper = false;
// if (forntendDeveloper == true && backendDeveloper == true) {
//     console.log('Fullstack Developer');
// }
// else (forntendDeveloper == true || backendDeveloper == false) {
//     console.log('web designer');
// }
/**
 ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে।
 অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো
 */
// let budget = 15000;
// let phone = 15000;
// let iphone = 50000;
// if (budget >= phone) {
//     console.log('tmi android phone kinte parba jdi budget thake');
// }
// else if (budget >= iphone) {
//     console.log('tmi iphone kinte parba jdi budget thake');
// }
// else {
//     console.log('budget nai ei phone kinte aisos lojja kore na');
// }

/*
৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে।
 তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।
// */
// let i = 7;
// while (i <= 19) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++;
// }
// while (i <= 19) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

/*
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
 সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে।
 এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
*/
// let numbers = [3, 2, 5, 77, 34, 78, 45, 14, 35];
// console.log(numbers.length);
// numbers[3] = 50;
// numbers.push(41);
// numbers.push(57);
// numbers.pop();
// console.log(numbers);

/*
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে।
 সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
*/
// let books = ['bangla', 'english', 'math', 'economic', 'accounting', 'ICT'];
// for (const bookName of books) {
//     console.log(bookName);
// }
// for (let i = 0; i < books.length; i++) {
//     let bookName = books[i];
//     console.log(bookName);
// }
/*
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে?
 তাহলে তুমি সেই কোড করে ফেলো 
*/


// let arrayNumber = [20, 11, 13, 90, 88, 99, 55, 120, 81, 70, 101, 34, 80, 83, 150];
// let largestNumber = arrayNumber[0];
// for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] > 80) {
//         console.log(arrayNumber[i]);
//     }
// }

/*
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। 
তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
*/

// function multiplication(num1, num2, num3) {
//     let result = num1 * num2 * num3;
//     return result;
// }
// let multiply = multiplication(5, 6, 5,);
// console.log(multiply);

/*১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */

const laptop = {
    brand: 'Hp',
    model: 'Hp 840 g3',
    genaration: '6th genaration',
    processor: 'intel i5',
    price: 60000
}
console.log(laptop);
laptop.price = 50000;
laptop.genaration = '7th genaration';
console.log(laptop);