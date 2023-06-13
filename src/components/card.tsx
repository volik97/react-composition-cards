import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

interface Icards {
    image?: string,
    children: React.ReactNode
}

export const Card: React.FC<Icards> = ({image, children}) => {
    return (
    <div className="card" style={{width: "18rem", margin: '10px'}}>
        {image && <img src={image} alt='card'/>}
        {children}
  </div>
  )
}
