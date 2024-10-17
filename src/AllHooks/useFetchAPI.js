import { useDebugValue, useEffect, useState } from "react";

 const useFetchAPI=(url='',options=null)=>{

    const [data, setData] = useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setLoading(true);

         fetch(url,options)
         .then((res)=>res.json())
            .then((data)=>{
                setData(data);
                setError(null);
            })
                .catch((error)=>{
                    setError(error);
                    setData(null);
                })
                .finally(()=>setLoading(false))
        },[url,options])

        useDebugValue('Api Fetcher');

        return{loading,error,data};
};

export default useFetchAPI;