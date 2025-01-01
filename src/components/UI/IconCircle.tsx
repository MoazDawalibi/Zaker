import { ReactElement } from 'react'

const IconCircle = ({icon,color,hoverColor}:{icon?:ReactElement,color?:string,hoverColor?:string}) => {
  return (
    <div className='icon_circle'>
        <span 
            style={{color:color,borderColor:color}}
        >
            {icon}
        </span>
    </div>
  )
}

export default IconCircle