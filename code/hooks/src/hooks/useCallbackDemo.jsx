import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

function UseCallbackDemo ()
{
    const [search, setSearch] = useState('')
    let count = 0;
    const handleSearch = useCallback(() =>
    {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, [search])
  return (
    <div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default UseCallbackDemo
