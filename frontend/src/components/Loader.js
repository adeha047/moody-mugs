import React from 'react'

const Loader = () => {
    return (
        <Spinner
        animation='border'
        role='status'
        style={{ width: '100%', height: '100px'}}
        ></Spinner>
    )
}

export default Loader
