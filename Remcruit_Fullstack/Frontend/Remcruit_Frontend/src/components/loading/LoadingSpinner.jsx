import React from 'react'
import "./loading.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function LoadingSpinner() {
    return (
        <div className='loadSpinner'><FontAwesomeIcon icon={faSpinner} /></div>
    )
}

export default LoadingSpinner