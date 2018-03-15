import React from 'react';
import { Button, Icon } from 'react-materialize'

function CircleButton(props) {

    const { className, iconClassName, icon, onClick  } = props

    const handlerOnClick = () => {
        if (onClick) {
            return onClick()
        }
    }
    
    return (
        <Button
            floating large
            className={className}
            onClick={handlerOnClick}
            waves='light'>
            <Icon className={iconClassName + " main-icon"}> {icon}</Icon>
        </Button>
    )

}

export default CircleButton