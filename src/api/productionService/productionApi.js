import axios from "axios"

const baseURL = "http://localhost:3001/production";
const addAll = baseURL + "/addallproducts"

export const addAllProductions = data =>{
    return new Promise(async(resolve,reject)=>{
        try {
            
            const res = await axios.post(addAll,data)
            if(res.status === 200){
                resolve(res.data);
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllProducts = () =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const res = await axios.get(baseURL)
            if(res.status === 200){
                resolve(res.data)
            }
        } catch (error) {
            reject(error)
        }
    })
}