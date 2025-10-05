import { useState } from "react";

const useFetch = () => {
     const[isLoading,setIsloading]=useState(true)
     const[err,setErr]=useState(false)

    const postData=async(URL,payload)=>{
        setIsloading(true)
        const responce=await fetch(URL,{
          method:'POST',
          headers:{'Content-Type':'application/json'},  
          body: JSON.stringify(payload),
        }).then((res)=>res.json())
        .catch((err)=>{
            setErr(err)
        }) 
        setIsloading(false);
        return responce
    }
    const getData=async(URL)=>{
        setIsloading(true)
        const responce=await fetch(URL).then((res)=>{
            return res.json()
        }).then((data)=>{
            return data
        }).catch((err)=>{
            setErr(err)
        })
        setIsloading(false)
        return responce
     }
    return{isLoading,err,postData,getData}
}
 
export default useFetch;