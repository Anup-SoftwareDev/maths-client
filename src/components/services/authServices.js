import axios from "axios"

export async function signUp(data){
    const response = await axios.post('http://localhost:4000/auth/sign_up', data)
    //console.log(response.data)
    return response.data
}

export async function signIn(data){
    const response = await axios.post('http://localhost:4000/auth/sign_in', data)
   // console.log(response.data)
    return response.data
}

export async function showResults(){
    const response = await axios.get('http://localhost:4000/scores')
    //console.log(response.data)
    return response.data
}
export async function showUsers(){
    const response = await axios.get('http://localhost:4000/users')
    console.log(response.data)
    return response.data
}