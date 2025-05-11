const user = document.getElementById('user')
const pass = document.getElementById('senha')
const login = document.getElementsById('login')

login.addEventListener('click')

function click(){
    if (user &&  pass)
         window.location.href = "index2.html"
    else{
        alert('Preencha os campos ')
    }
}