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

// document.body.style.background = "black";
// function mirror(str){
// const splitstring = str.split('');
// const reversesplitstring = splitstring.reverse();
// const joinreversesplitstring = reversesplitstring.join('');
// const mirrorstr = str+joinreversesplitstring;
// console.log(mirrorstr)
// }
//  mirror('racecar')

