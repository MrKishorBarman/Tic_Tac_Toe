import React from 'react'
import "./Card.css"
import Icon from '../Icon/Icon'

const Card = ({onPlay, player, index, gameEnd}) => {

    let icon = <Icon />

    if (player === "X") {
        icon = <Icon iconName={"cross"} />
    } else if (player === "O") {
        icon = <Icon iconName={"circle"} />
    }

    return (
        <div className='card' onClick={() => !gameEnd && player == "" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card
