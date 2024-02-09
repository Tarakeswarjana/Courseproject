import React,{useState,useEffect} from 'react'
import HttpClient from '../utils/HttpClient'


export  function useFetch(url) {
    const [loading,setLoading] = useState(true)
    const [data,setData]= useState()
    const [error,setError] = useState()

    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)

      fetch(url,{signal:controller.signaly})
         .then(setData)
         .catch(setError)
         .finally(()=>setLoading(false))


        return()=>{
            controller.abort()
        }
    },[url])
  return {loading,data,error}
}
