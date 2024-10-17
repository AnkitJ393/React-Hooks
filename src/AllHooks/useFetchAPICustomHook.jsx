import React from 'react'

import useFetchAPI from './useFetchAPI'

const HookuseFetchAPICustomHook = () => {

    const { data, loading, error } = useFetchAPI(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(data);

      if (error) return <p>Error!</p>;
      if (loading) return <p>Loading...</p>;
    
  return (
    <> 
        <p>Hi</p>
       <ul>
        {data?.map((item)=>
            <li>{item.name}</li>
    )}
       </ul>

    </>
  )
}

export default HookuseFetchAPICustomHook