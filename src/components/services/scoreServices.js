import axios from "axios"


export async function showResults(){
    const response = await axios.get('http://localhost:4000/scores')
    //console.log(response.data)
    return response.data
}
