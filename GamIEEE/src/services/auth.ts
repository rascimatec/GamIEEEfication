import { PanResponder } from 'react-native';
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

export async function signIn(username: string, password: string) { 
    try {
      const response = await 
        api.post('/login', {
        username: username,
        password: password
      })

      return response.data
    } catch (error) {
      console.error(error);
    }
  }
