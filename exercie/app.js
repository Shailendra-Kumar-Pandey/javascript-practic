const product = {
    productName : "Parker Jotter Standard CT Ball Pen(Black)",
    rate : 285,
    discount : 5,
    color : "black",
    rating : 7002
}

const profile = {
    name : "shardhaKhapra",
    post : 195,
    followers : "569K",
    follow : 4,
    company : "Apna college"
}

console.log(product.productName);
console.log(profile.name);

let chackNumber = 10;
if(chackNumber%5===0){
    console.log("this number is multiple of 5");
}else{
    console.log("this number is not multiple of 5")
}

let studentName = "Shailendra Kumar Pandey";
let studentMarks = 65;
if(studentMarks < 100 && studentMarks >= 80 ){
    console.log(`${studentName} grade : A ${studentMarks}`)
}else if(studentMarks < 80 && studentMarks >= 70){
    console.log(`${studentName} grade : B ${studentMarks}`)
}else if(studentMarks < 70 && studentMarks >= 60){
    console.log(`${studentName} grade : C ${studentMarks}`)
}else if(studentMarks < 60 && studentMarks >= 50){
    console.log(`${studentName} grade : D ${studentMarks}`)
}else{
    console.log(`${studentName} grade : F ${studentMarks}`)
}
for (let i = 0; i<=10; i++ ){
    if( i%2 == 0){
        console.log(i);
    }
}