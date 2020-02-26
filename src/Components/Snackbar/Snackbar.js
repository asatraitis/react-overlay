import React, {useEffect} from 'react';
import './Snackbar.css'

const Snackbar = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.close();
        }, 3000)
    })
    return (
        <div className="Snackbar">
            {props.text}
        </div>
    )
}

export default Snackbar;