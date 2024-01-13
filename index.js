const lowerCase="qwertyuiopasdfghjklzxcvbnm";
const upperCase="QWERTYUIOPASDFGHJKLZXCVBNM";
const specialLetters="!@#$%^&*(+/<_>?:;";
const numbers="1234567890";
const length=12;


const pwField= document.querySelector(".inputField");
const btn= document.querySelector(".generate-button");
const allChars=lowerCase+upperCase+specialLetters+numbers;
// allCharStr=allChars.toString();
console.log(allChars);
function generate(){
    let password="";
while(password.length<length){
    password+=allChars[Math.floor(Math.random()* allChars.length)];
}
console.log(password);
pwField.value=password;
}
btn.addEventListener("click",()=>{
    generate();
})
function copyText(){
    pwField.select();
    document.execCommand("copy");
}
