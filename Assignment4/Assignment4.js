
function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}
function checkAge(age){
    return (age>18)|| confirm("Родители разрешели?")
}
checkAge(15)

let pow=(x,n)=> x**n;

console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(1,100));


function ask(question,yes,no){
    if (confirm(question)) yes()
        else no();

}
ask (
    "Вы согласны?",
    ()=>alert("Вы согласились "),
    ()=>alert ("Вы отменили выполнение")

);



let arr=[5,2,1,-10,8];
arr.sort((a,b)=>b-a);
alert(arr);


// let vasya={name:"Вася", age:25};
// let petya={name:"Петя",age:30};
// let masha={name:"Маша",age:28};

// let users=[vasya,petya,masha];
// let names=users.map(user=>user.name)

// alert(names)



let vasya2={name:"Вася", surname :"Пупкин",id:1};
let petya2={name:"Петя", surname:"Иванов", id:2};
let masha2={name:"Маша", surname:"Петрова", id:3};

let users2=[vasya2,petya2,masha2];


let userMapped = users2.map(user => ({
    fullName: user.name + " " + user.surname,
    id: user.id
}));

alert(userMapped[0].id);
alert(userMapped[0].fullName)




let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr2 = [vasya, petya, masha];

function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}

console.log(getAverageAge(arr2)); // 28