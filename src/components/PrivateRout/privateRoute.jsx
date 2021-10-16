import { useEffect } from 'react';
import {Route,Redirect} from 'react-router-dom'
import Layout from '../Layout/Layout'
export default function PrivateRoute({children,...props}){

    const isAuth = sessionStorage.getItem("at");
    useEffect(()=>{

    },isAuth)
    console.log(4444,isAuth)
    return(        
        <Route {...props} render={()=> isAuth ? <Layout>{children}</Layout> : <Redirect to="/signin"/>}/>
    )
}