const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

function getRandomChar(){
  let  char =   Math.floor(Math.random() * characters.length)
    return characters[char] 
}


let pwd1 = document.getElementById("pwd1")
let pwd2 = document.getElementById("pwd2")

 function passwordGenerator(){
     let password =""
     let password2 =""
     for(let i=0;i<passwordLength;i++){
        password += getRandomChar()
        password2 += getRandomChar()
        
         }
          pwd1.textContent=  password
          pwd2.textContent=  password2
        
     }
 



