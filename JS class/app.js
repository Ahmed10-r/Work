// let a ="13";        
// let b ="13"; 
// console.log(Number(a) + Number(b));
// console.log(String(a) + String(b));



// let rightNow = new Date();
// console.log(rightNow.getDate());
// console.log(rightNow.get());
// console.log(rightNow.getMinutes());
// console.log(rightNow.getDay());
// console.log(rightNow.getTime());


// USe of Funtion
// function calculateResult() {
// let a =6;
//     let b= 2;
//     let result =a+b
//     console.log(result)
// }
// calculateResult();

// Use of prameter and arguement
// function calculateResult(num1,num2,num3) {
//    console.log(num1,num2);
//     let result =num1 + num2 +num3;
//     console.log(result)
// }
// calculateResult(12,14,34)


// / Use Of Swich//////////
// let dayOfWK ="Sun"

// switch(dayOfWK){
// case "Sun":
//     alert("Whoo");
//     console.log('a')
//     console.log('d')
//     console.log('d')
//      break;
//     case "Mon":
//     alert("It's Weekday");
//      break;
//     case "Sat":
//     alert("Its weekend");
//      break;
//     default :
//     alert("No Match")

// }

// let number = 850;

// switch (true) {
//     case (number >= 800 && number < 850):
//         alert("Congrat's your Grade is A+")
//         break;


//     case (number <= 700 && number <= 800):
//         alert("Congrats Your grade IS A")
//         break;

//     case (number <= 600 && number <= 700):
//         alert("Congrats Your grade IS B")
//         break;

//     case (number <= 500 && number <= 600):
//         alert("Congrats Your grade IS C")
//         break;

//     case (number <= 400 && number <= 500):
//         alert("Congrats Your grade IS D")
//         break;

//     case (number <= 500):
//         alert("You are Feild")
//         break;

// }

// let userInp = +prompt("Enter Your oercentage")
//     switch(true){
//         case (userInp >=80):
//         alert("your grade is A+");
//         break;

//         default: (userInp >=40);
//         alert("You are Feild");
//         break;


//     }

// for (let i = 0; i < 20; i++) {
//     console.log(i, 'Ahmed raza')
// }

// let i = 0;
// while (i < 20) {
//     console.log('Ahmed raZa', i)
//     i++;


// }


// let j = 0;
// do {
//     console.log('Ahmed raza', j)
//     j++;

// }
// while (j < 20)






// let plan1 = {
//     name: "Basic Plan",
//     price: 230
// }
// plan1.space = 100;
// console.log(plan1);

// console.log(plan1.price);
// console.log(plan1["name"]);

// let std1 = {
//     name:"Ahmed raza",
//     seatno :"eb556778",
//     department:"ubit",
//     subjects:["pak" , "urdu" , "Eng"]


// }
//  std1.subjects.push("Computer science")
//  console.log(" std1.subjects.push");

// let stdSubjects = std1.subjects.lenght;
// for (let i =0; i < stdSubjects; i++){
// console.log(std1.subjects[1]);

// }



// let studentsInfo = [
//     {
//         name: "Ahmed raza",
//         seatno: "eb556778",
//         department: "ubit",
//         subjects: ["pak", "urdu", "Eng"]
//     },
//     {
//         name: "Ahmed raza",
//         seatno: "eb556778",
//         department: "ubit",
//         subjects: ["pak", "urdu", "Eng"]
//     }
// ]
// console.log(studentsInfo);  


// let newstudent = 
// {
//     name: "Ahmed raza",
//     seatno: "eb556778",
//     department: "ubit",
//     subjects: ["pak", "urdu", "Eng"]
// }
// studentsInfo .push(newstudent)
// console.log(studentsInfo);


// let stdinfo =
// {
//     name: "",
//     seatno: "",
//     department: "",
//     subjects: [""]
// }

// let userName = prompt("enterv yuor name ")
// stdinfo.name = userName ;
// console.log(stdInfo)




function printStudentInfo(){
    let mainDiv = document.getElementById('main');
    
    for(let i = 0; i <StudentInfo.length; i++) {
        let student = studendInfo[i];
        let h3forname = document.createElement("h3");
        h3forname.innerText = student.name;

        mainDiv.appendChild(h3ForName)
        let ul


    }


}