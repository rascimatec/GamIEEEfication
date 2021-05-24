import api from '../services/api'

interface Response {
    token: string,
    user: 
    {
        name: string,
        email: string,
        admin: boolean
    }
}

export async function signIn() { 
    try {
      const response = await 
        api.post('/user', {
        username: 'jsilva',
        password: '123456'
      })

      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }
