const getColor = () =>{
    // Hax Code
    const randamNumber = Math.floor(Math.random()* 16777215);
    const randamCode = "#" + randamNumber.toString(16);
    document.querySelector('h3').innerText = randamCode;
    document.querySelector('body').style.backgroundColor = randamCode;
    // copy clickbord text of color code
    navigator.clipboard.writeText(randamCode);
}

document.querySelector('#nextColor').addEventListener('click', getColor);

getColor();