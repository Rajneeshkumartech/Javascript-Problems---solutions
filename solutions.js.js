// // question 1.) The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// function sortingstudentsintohouse(StudentNames){
// const houses= {
//    Gryffindor:[],
//    Hufflepuff:[],
//    Ravenclaw:[],
//    Slytherin:[],
// }
// for (const name of StudentNames) {
//     const namelength = name.length
//     if (namelength<6){
//         houses.Gryffindor.push(name);
//     }else if (namelength<8){
// houses.Hufflepuff.push(name);
//     }else if (namelength<12){
// houses.Ravenclaw.push(name);
// }else{
// houses.Slytherin.push(name)
// }}
// return houses;
// };

// const studentList = [
//     "Harry",
//     "Hermione",
//     "Ron",
//     "Draco",
//     "Neville",
//     "Luna",
//     "Cedric Diggory",
//     "Cho Chang",
//     "Severus Snape",
//     "Albus Dumbledore",
//     "Minerva McGonagall",
//     "Rubeus Hagrid"
// ];

// const sortstudents = sortingstudentsintohouse(studentList);
// console.log(sortstudents);

// // 2.) The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// function doubleTrouble(arr){
// const resultArray=[];
// for(let i = 0;i<arr.length;i++){
// const currentelement = arr[i];
// // console.log(currentelement)
// const previouselement = arr[i-1];
// // console.log(currentelement)
// if (currentelement===previouselement){
// resultArray.push(currentelement)
// }else{
// resultArray.push(currentelement*2)
// }
// }
// console.log(resultArray)
// }
// doubleTrouble([1,1,2,3,4])

//3.) The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

document.body.style.background = "black";
document.body.style.color = "white";
// function mirror(str){
// const splitstring = str.split('');
// const reversesplitstring = splitstring.reverse();
// const joinreversesplitstring = reversesplitstring.join('');
// const mirrorstr = str+joinreversesplitstring;
// console.log(mirrorstr)
// }
//  mirror('racecar')



// //4. The Password Validator:
//   // You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function passwordvalidator(password){
// if(password.length <8){
// console.log("Password Length must be 8 Letters and not more than 12 letters");
// return false;
// }
// if (password.length>12){
//     console.log("password length not more than 12 letters");
//     return false
// }

// const hasuppercase = /[A-Z]/.test(password);
// if(!hasuppercase){
// console.log("password must contain atleast one uppercase letter");
// return false
// }
// const haslowercase = /[a-z]/.test(password);
// if(!haslowercase){
// console.log("password must contain atleast one lowercase letter");
// return false
// }
// const hasdigit = /[0-9]/.test(password)
// if(!hasdigit){
// console.log("password must contain atleast one digit ");
// return false
// };

// const hasspecialchar = /\W/.test(password)
// if(!hasspecialchar){
// console.log("password must contain atleast one special character ");
// return false
// }

// console.log('password is valid')
// return true;
// }
// passwordvalidator("RK!tech1234")

//5. The Sum Selector:
  // You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

//     function sumselector(arr){
// let total = 0;
// for (let i=0;i<arr.length;i++){
// const currentelement = arr[i];
//   if(currentelement<0){
// break

//   }
//   total += arr[i]

// }
// console.log(total)
//     }
//     sumselector([1,2,3,-4,5]);

// 6.) The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// function vowelcounter(word){
// const lowercaseword = word.toLowerCase();
// let count = 0;
// const vowels = ["a","e","i","o","u",];
// for(let i = 0;i<lowercaseword.length;i++){
// const currentelement = lowercaseword[i]
// if(vowels.includes(currentelement)){
//   count++;
// }
// }
// if (count == 0 ){
//   console.log("Bo vowels were found in the word")
// }else{
//   console.log(`The word ${word} has ${count} vowels`)
// }
// return count;
// }
// vowelcounter("RAJNeeSH")

// 7.) The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.// solution at <https://github.com/Rajneeshkumartech/Note-making-.git>

//8.) Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// function asyncMultiplyByTwo(arr){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       const newarr = arr.map(num=>num*2)
//       resolve(console.log(newarr));
//     },2000)
//   })
// }
// asyncMultiplyByTwo([1,2,3,4,5]).then

// 9.) The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

// function placeOrder(){
// return new Promise ((resolve)=>{
// const randomtime =Math.round(Math.random()*5000+1)
// console.log("you order id is ",randomtime)
// const result = `your order is confirmed with order id ${randomtime}`
// setTimeout(()=>{
//   resolve(console.log(result),)
// },randomtime)
// // console.log(randomtime)
// })
// }
// placeOrder()


//10.) The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

//  async function brewCoffee(coffee) {

//   return new Promise((resolve)=>{
//     const rendomdelay = Math.round(Math.random()*5000+2000);
//   const mindelay = Math.round(Math.random()*5+2);
//   console.log(`sir your amount is ${Math.round((rendomdelay/100)+50)} for  ${coffee} coffee and your coffee is ready with in ${mindelay} minutes ` )
//   setTimeout(()=>{
//     console.log(`☕ Your ${coffee} coffee is hot and ready! Enjoy!`);
//     resolve();
//   },rendomdelay)
//   })
  
// }
// async function confirmorder() {
//   await brewCoffee("latte")
// }

// confirmorder()


// 11.) The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// function filterProducts(search){
// const filterarr = search.filter(element=>element.includes("phone"));
// console.log(filterarr)
// }
// filterProducts(['phone','cell phone','mobile phone','buds','earbuds',])

// 12.) The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

// function setAuthToken(token){
//   const id = Date.now()
//   console.log(id)
// localStorage.setItem(id,token)
// }
// const tokennumber = Math.floor(Math.random()*5000+2000)
// setAuthToken(tokennumber)


// 13.) The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

// function calculateTotal(){
//  const product_array = [{
//   product:"potato",
//   price :20,
//   quantity:"1 kg"
// },
// {
//   product: "tomato",
//   price: 40,
//   quantity: "1 kg"
// }]
// let sum = 0;
// product_array.forEach(item=>{
//   sum+=item.price
// })
// console.log(sum)
// }
// calculateTotal()



// 12.) The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.
// function smoothScrollToTop() {
//   window.scrollTo({
//     top: 0,      
//     left: 0,      
//     behavior: 'smooth' });
//   console.log("Window is smoothly scrolling to the top!");
// }
// smoothScrollToTop();

