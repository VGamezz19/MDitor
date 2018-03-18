import React from 'react';
import { Button } from 'react-materialize'

function CircleButton(props) {

    const { className, icon, onClick  } = props

    const handlerOnClick = () => {
        if (onClick) {
            return onClick()
        }
    }
    
    return (
        <Button
            floating large
            className={`main-icon ${className}`}
            onClick={handlerOnClick}
            icon={icon}
            waves='light'>
        </Button>
    )

}

export default CircleButton