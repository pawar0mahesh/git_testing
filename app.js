// console.log("hello wolrd")
// let a=5;
// let b=10;
// console.log(a*b);


// console.log(typeof b);    
// console.log(`the total sum is ${a+b}`);

// const age=28;
// if(age>=18){
//     console.log("you can vote")
// }else{
//     console.log("you cannot vote")
// }

// let color="red";

// if(color== "red"){
//     console.log(`stop color is ${color}`);
// }
// else if(color=="yello"){
//     console.log("wait");

// }else if(color=="green"){
//     console.log("go")
// }


// let marks=70;
// if(marks>33){
//     if(marks>80){
//         console.log("A");
//     }else if(marks>60 && marks<80){
//         console.log("B");
//     }
// }
// if(true){
//     console.log("hello");
// }else{
//     console.log("byr");
// }
// console.log(!true);

// switch(color){
//     case "red":
//         console.log("red color");
//         break;
//     case "yellow":
//         console.log("yellow color");
// }

// console.error("this is a error");
// console.warn("this is a warning");

// let yourname=prompt("hello enter your name");
// console.log(yourname);


// alert(yourname);

// let str="ILoveCodding   ";
// console.log(str);
// let msg=str.trim();
// console.log(msg );

// let str1=str.toUpperCase();

// console.log(str1);
// let a=str.indexOf("Love");
// console.log(a);
// let slice =str.slice(0,5);

// let replac=str.replace("Love", "do");

// let arr=["a", "b","c"];

// for( i=0;i<3;i++){
//   console.log(arr[i]);
// }

// arr[1]="banana";
// arr.push("salman");
// arr.pop();

// let index= arr.indexOf("salman");

// arr.sort();

// let nums=[[2,3] ,[4,5], [8,9]];

// let n= prompt("eneter the number");
// for(let i=n;i<=n*10;i+n){
    
//         console.log(i);

// }

// let favmovie= "avatar";
// let guess= prompt("enter the movie name");

// while((guess!= favmovie ) && (guess!= "quit")){ 
//   guess=promt("wrong guess try again");
// }

// if(guess==favmovie){
//   console.log("right");
// }



// A TODO APP
// let todo =[];
// let req=prompt("plese enter yout request");

// while(true){
//   if(req=="quit"){
//     console.log("quitting app");
//     break;
//   }
//   else if(req=="list"){
//     console.log("___________");
//     for(let i=0;i<todo.length;i++){

//       console.log(i,todo[i]);
//     }
//    console.log("______________")
//   }
//   else if(req=="add"){
//     let task= prompt("enter the task you want to add");
//     todo.push(task);
//     console.log("task added");
   
//   }
//   else if(req=="delete"){
//     let idx=prompt("please enter the task you want to delete");
//     todo.splice(idx,1);
//     console.log("task deleted")
    
//   }
//     req = prompt("Please enter your request");

// }

// const student={
//   name: "mahesh",
//   class: 10,
//   grade:'A'
// }
//   const post={
//     username:"mahesh_pawar10",
//     content: "comedy",
//     like:1000,
//     repost:5,
//     tags:["delta", "alpha"]

//   }

// const nestedobject={
//    users:{
//   name: "mahesh",
//   class: 10,
//   grade:'A'
// },
//  employee:{
//     username:"mahesh_pawar10",
//     content: "comedy",
//     like:1000,
//     repost:5,
//     tags:["delta", "alpha"]

//   }
//   }

// let num= Math.random();
// num=num*10;
// num= Math.floor(Math.random()*10);




// guessing game
// const max= prompt("enter the max number");
// console.log(max);

// const random= Math.floor(Math.random()*max)+1;
// let guess= prompt("guess the number");

// while(true){
//   if(guess==random){
//     console.log("you guess the right number");
//     break;
//   }
//   else if(guess<random){
//     guess=prompt("you entered a smaller number try again")
//   }
//    else {
//     guess=prompt("you entered a larger number try again")
//   }
// }


// function fun(a ){
  // let ran= Math.floor(Math.random()*6)+1;
//   console.log(a+b);
// }

// fun(4,5);
// fun(5,10);
// fun(10,50);



// function sum(n){
//   let total=0;
//   for(let i=0;i<=n;i++){
//     total+=i;

//   }
//   return total;
// }

// let n=sum(10);

// console.log(n);

function str(n){
  let concat="";
    for(let i=0;i<n.length;i++){
     concat+=n[i];
    }
    return concat;
}
let fuc= str(n=["h", "e", "lll", "ooo "]);

   console.log(fuc);
 





