
import React from 'react'

const Index = ({ match, location }) => {
    return (
        <>
            <p>Hello</p>
            <p>{JSON.stringify(match)}</p>
            <p>{JSON.stringify(location)}</p>
        </>
    )
}

export default Index