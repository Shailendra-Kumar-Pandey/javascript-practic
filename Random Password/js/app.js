const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*_-+:.";

// selectors
const passwordBox = document.querySelector(".password");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbole");

const getRandomData =(dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const genratePassword = (password = "")=>{
    if(upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked) {
        password += getRandomData(symbolSet);
    }
    if(password.length < totalChar.value){
        return genratePassword(password);
    }
    passwordBox.innerText= truncateString(password, totalChar.value);
}

genratePassword();

document.querySelector("#submit").addEventListener("click", function (){
    genratePassword();
})

function truncateString(str, num) {
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str;
    }    
}