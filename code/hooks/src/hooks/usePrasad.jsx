import {useState, useEffect } from "react";

function usePrasad (url)
{
    const [data, setData] = useState([]);
    const [error,setError]= useState('')
    useEffect(() =>
    {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err)=>setError(error))
    }, [url])
    return [data,error]
}
export default usePrasad;