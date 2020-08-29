const create = function ()
{
//   console.log("Retornando usuário...")
//   fetch('https://randomuser.me/api/')
//     .then(response => response.json())
//     .then(users => console.log(users.results[0]))
//     .catch() 
}

const forgot = function()
{
    alert("Esqueceu sua senha?")
}

const login = function()
{
    alert("Login")
}

const profile = function()
{
    console.log("Nenhum usuário logado!")
}

module.exports = {forgot, create, login, profile}