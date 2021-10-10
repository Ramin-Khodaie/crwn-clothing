import axios from "axios";

const baseURL = "http://localhost:3001/user";
const loginURL = baseURL + "/login";
const logoutURL = baseURL + "/logout";
const newUserURL = baseURL + "/newuser"

export const userLogin = (data) =>{
    
    return new Promise(async (resolve,reject)=>{
        try {
            const res = await axios.post(loginURL,data)
            if(res.status === 200){
                resolve(res.data)
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const createNewUser=(user)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const res = await axios.post(newUserURL,user);
            if(res.status === 200){
                resolve(res.data)
            }            
        } catch (error) {
            reject(error)
        }
    })
}

export const userLogout =()=> {
    return new Promise(async(resolve,reject)=>{
        try {
            const res = await axios.get(logoutURL)
            if(res){
                resolve(res)
            }
        } catch (error) {
            reject(error)
        }
    })
}
