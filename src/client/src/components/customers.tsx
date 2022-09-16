import React, {useState, useEffect} from 'react'

export const Names = () => {

    const [allNames, setAllNames] = useState([])
    
    async function getNames () {
        const res = await fetch('http://localhost:8000/display')
        const data = await res.json()
        setAllNames(data)
    }

    useEffect(() => {
        getNames()
    }, [])

    return (
        <div>
            {allNames}
        </div>
    )
}

