import React from 'react'

const Images = ({className,imgSrc,imgAlt}) => {
  return (
   <img className={`${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Images