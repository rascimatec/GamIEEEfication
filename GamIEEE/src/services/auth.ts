import { TabRouter } from "@react-navigation/routers";

interface Response {
    token: string,
    user: 
    {
        name: string,
        email: string,
        admin: boolean
    }
}

export function signIn():Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVcJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                user: {
                    name: 'Roberto',
                    email: 'john.doe@gmail.com',
                    admin: true,
                }
            })
        }, 2000);
    });
}