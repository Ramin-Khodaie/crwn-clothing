import { useEffect } from 'react';
import {Route,Redirect} from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useSelector } from 'react-redux';
export default function PrivateRoute({children,...props}){

    const {isAuth} = useSelector(state=>state.isAuth)
    
    useEffect(()=>{

    },isAuth)
    console.log(4444,props.path, children)
    return(    
        
        <Route {...props} render={()=> isAuth ? <Layout>{children}</Layout> : <Redirect to="/signin"/>}/>
    )
}