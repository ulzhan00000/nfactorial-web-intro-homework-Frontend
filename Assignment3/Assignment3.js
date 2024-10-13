//Работа с операторами
let number=prompt("Введите число")
alert(number)



//Работа с условями
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break
    case 2 :
    case 3:
        alert("2,3");
        break;    
}



//Работа с циклами
let amount=0;
for (let i=1;i<100;i++){
    if (i%2==0)
        amount+=i
}
console.log(amount)


let i=0
while(i<3){
    alert(`number ${i}!`)
    i++
}