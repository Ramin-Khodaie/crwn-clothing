import axios from "axios"

const baseURL = "http://localhost:3001/production/";
const addAll = baseURL + "addallproducts"
const shopitemURL = baseURL + "shopitem"


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

export const getShopItems = () =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const res = await axios.get(shopitemURL);
            if(res.status === 200){
                resolve(res.data)
            }
        } catch (error) {
            reject(error)
        }
    })
}
export const getCollection = _id =>{
    return new Promise(async(resolve,reject)=>{
        
        try {
            const res = await axios.get(baseURL + _id)
            if(res.status === 200){
                resolve(res.data)
            }
        } catch (error) {
            reject(error)
        }
    })
}