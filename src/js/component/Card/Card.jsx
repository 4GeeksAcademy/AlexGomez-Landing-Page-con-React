import React from "react"
import './Card.css'

export default function Card({id,imagen,title,content}) {
    
  
    return (
  
    
          <>
   {
            <div className="card m-5 p-3 mx-auto my-5" style={{ width: '16rem' }}>
                <img src={imagen} className="card-img-top" alt="imagen carta"/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{content}</p>
                  <hr/>
                  <a href="#" className="btn btn-primary card_btn">Go somewhere</a>
                </div>
            </div>
}  
    </>
    )
  }