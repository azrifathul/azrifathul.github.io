
let loginFlag = false;

function displayMenu(){
    if(loginFlag){
        document.getElementById("login-admin").style.display = "none"
        document.getElementById("add-catalog").style.display = ""
    }else{
        document.getElementById("login-admin").style.display = ""
    }
}
displayMenu();

function loginValidation(username, pwd){
    console.log("masuk")
    for (let i = 0; i < daftarUser.length; i++) {
        const valUsername = daftarUser[i].username;
        const valPwd = daftarUser[i].password;
        if(username === valUsername && pwd === valPwd){
            loginFlag = true
        }
    }
    displayMenu();
}

function showFormLogin(){
    let username = prompt("Input username");
    let password = prompt("Input Password");

    if(username && password){
        loginValidation(username, password)
    }
    if(!loginFlag){
        alert("username atau password salah.")
    }
}