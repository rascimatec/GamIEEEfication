
const login = async () => {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
            credentials: 'same-origin'
        });
        const exam = await response.json();
        console.log(exam);
    } catch (error) {
        console.error(error);
    }
}

const createR = async (email, senha, nome) =>
{
    try {
        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                     },
            body: JSON.stringify({
                email: email,
                senha: senha,
                nome: nome,
                xp: 0,
                membresia: '000000'
            })
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createR, login}