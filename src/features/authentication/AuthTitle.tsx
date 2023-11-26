import React from 'react'
import { logo } from '../../assets'
import colors from '../../utils/colors'

interface IProps {
    text: string
}
const AuthTitle = ({text}: IProps) => {
  return (
    <div>
        <img src={logo} alt='logo'/>
        <div className='my-2 text-xs text-left' style={{color: colors.Gray_600}}>{text}</div>
    </div>
  )
}

export default AuthTitle