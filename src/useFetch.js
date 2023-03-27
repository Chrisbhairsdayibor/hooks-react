import React, {useEffect, useState} from 'react';

export default function useFetch(id) {
    const [data, setdata] = useState([])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((json) => setdata(json))
       }, [])
      
  return [data]
}