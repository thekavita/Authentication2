

function isChar(str){
    let  lettersOrDigits = /[a-zA-Z0-9]+$/
    let str2 = str
     return str2.match(lettersOrDigits)?true:false;
  }
  function isDigit(str){
      let lettersOrDigits = /[0-9]+$/
     let  str2 = str;
          return str2.match(lettersOrDigits)?true:false;
  }
  const lookup = {
      'a': 'n','b': 'o','c': 'p','d': 'q',
      'e': 'r','f': 's','g': 't','h': 'u',
      'i': 'v','j': 'w','k': 'x','l': 'y',
      'm': 'z','n': 'a','o': 'b','p': 'c',
      'q': 'd','r': 'e','s': 'f','t': 'g',
      'u': 'h','v': 'i','w': 'j','x': 'k',
      'y': 'l','z': 'm',
      'A': 'N','B': 'O','C': 'P','D': 'Q',
      'E': 'R','F': 'S','G': 'T','H': 'U',
      'I': 'V','J': 'W','K': 'X','L': 'Y',
      'M': 'Z','N': 'A','O': 'B','P': 'C',
      'Q': 'D','R': 'E','S': 'F','T': 'G',
      'U': 'H','V': 'I','W': 'J','X': 'K',
      'Y': 'L','Z': 'M','@':'#','#':'@','0':'5',
      '1':'6','2':'7','3':'8','4':'9','5':'0','6':'1','7':'2','8':'3','9':'4','0':'5'
    };

let password = document.getElementById("inputPassword")
let strength = document.getElementById("strength")
let prog1 = document.getElementById('prog1')
let prog2 = document.getElementById('prog2')
let prog3 = document.getElementById('prog3')
 function inptPassword(){
    document.getElementById("passwordSaved").style.display = 'none';
    let prog = ""
    var password_strength = document.getElementById("progressBar");
    strength.style.display = 'block'
    if(password.value.length == '0'){
         prog = ""
         strength.innerText = ''
    }
     else if(password.value.length <=5){
         strength.innerText = 'Easy'
         strength.style.color = 'red'
         
          prog = "<div class='progress-bar bg-danger' style='width: 25%'>easy</div>"
     }
     else if(password.value.length >= 6 && password.value.length < 12){
        strength.innerText = 'Moderate'
        strength.style.color = 'orange'
       
          prog = "<div class='progress-bar bg-warning' style='width: 50%'>Moderate</div>"
     }
     else{
        strength.innerText = 'Strong'
        strength.style.color = 'green'
        
         prog = "<div class='progress-bar bg-success' style='width: 100%'>Strong</div>"
     }
     password_strength.innerHTML = prog
 }

let pass = ""
let encodedStr = ""

 function signUp(){
     strength.style.display = 'none'
     pass = password.value
     if (pass.length < 20 && pass.length > 4  && (pass.includes("@") || pass.includes("#")) && isChar(pass) && isDigit(pass)){
        encodedStr = encode(pass)
        document.getElementById('access').style.display='block'
        console.log("pass = "+pass+"encodedPass = "+encodedStr)
        document.getElementById("passwordSaved").style.display = 'block';
    }
    else{
        document.getElementById("passwordSaved").style.display = 'none';
    } 
 }
 let a1 = document.getElementById('a1')
 let a2 = document.getElementById('a2')
 
 function logg(){
     document.getElementById('log').style.display = 'block'
     document.getElementById('access').style.display = 'none'
     document.getElementById('sign').style.display = 'none'
     a1.classList.remove('activee')
    a2.classList.add('activee')
 }
 function sign(){
    document.getElementById('a1').classList.add('activee')
    document.getElementById('sign').style.display = 'block'
    document.getElementById('log').style.display = 'none'
    
    a2.classList.remove('activee')
 }
 function log(){
    document.getElementById('sign').style.display = 'none'
    document.getElementById('log').style.display = 'block'
    a1.classList.remove('activee')
    a2.classList.add('activee')
 }
 let encode = (str) => {
    console.log("str = "+ str)
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = str.split("")

    let encodedArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex((element) => element === codeArrChar)
        return lookupKeys[index];
    })
    return encodedArr.join("")
}

const decode = (encoded) =>{
    console.log("decode")
    const arr = encoded.split("")
    const decodeArr = arr.map(element => {
        return lookup[element]
    })
    return decodeArr.join("")
}

function rem(){
    document.getElementById('enter').style.display = 'none'
}

function logIn(){
    let passwordd = document.getElementById("passwordd").value
    console.log("pass= "+passwordd)
    if(passwordd !=''){
      let  password2 = decode(encodedStr)
      console.log("pass = "+passwordd+"encodedPass = "+encodedStr)
      console.log("decoded str = "+decode(encodedStr))
      passwordd===password2?console.log("granted"):console.log("denied")
      if(passwordd===password2){
      document.getElementById("granted").style.display = 'block';
      document.getElementById("denied").style.display = 'none';
      }
      else{
       document.getElementById("granted").style.display = 'none';
       document.getElementById("denied").style.display = 'block';
      }
    }
    else{
      console.log("Enter a password ")
      document.getElementById('enter').style.display = 'block'
    }
}