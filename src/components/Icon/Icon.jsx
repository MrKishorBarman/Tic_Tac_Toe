import React from 'react'
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'

const Icon = ({iconName}) => {
  if (iconName === "circle") {
    return <FaRegCircle />
  } else if (iconName === "cross") {
    return <FaTimes />
  } else {
    return <FaPen />
  }
}

export default Icon
