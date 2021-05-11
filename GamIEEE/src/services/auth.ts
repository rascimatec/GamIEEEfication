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

export async function signInTest() { 
    try {
      const response = await api.get('/ranking');
      let c = 0;
      for (c = 0; c < response.data.length; c++)
      {
        console.log(response.data[c].user_name);
        console.log(response.data[c].id_nivel);
        console.log(response.data[c].score);
      }
    } catch (error) {
      console.error(error);
    }
  }


// export function signInTest():Promise<Response> {
//     return api.get("/ranking")
      

    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve({
    //             token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVcJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    //             user: {
    //                 name: 'John Doe',
    //                 email: 'john.doe@gmail.com',
    //                 admin: true
    //             }
    //         })
    //     }, 2000);
    // });
// }