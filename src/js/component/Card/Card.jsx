import React from "react"
import './Card.css'

export default function Card() {
    const cardData = [
      {
        id: 1,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ratione libero doloribus consequ fgsgd.",
        imagen:"https://picsum.photos/seed/12345/500/325",
      },
      {
        id: 2,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore.",
        imagen:"https://picsum.photos/seed/12335/500/325",
      },
      {
        id: 3,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
        imagen:"https://picsum.photos/seed/12745/500/325",
      },
      {
        id: 4,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore.",
        imagen:"https://picsum.photos/seed/16345/500/325",
      },
    ]
  
    return (
  
        <div className="row row-cols-1 mt-4 row-cols-md-2  row-cols-lg-4 g-4">
          {
          cardData.map(({id,imagen,title,content}) => (


            <div key={id} className="card text-center  mx-auto" >
                <img src={imagen} className="card-img-top" alt="imagen carta"/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{content}</p>
                  <hr/>
                  <a href="#" className="btn btn-primary card_btn">Go somewhere</a>
                </div>
            </div>
           
        
          ))}
     
      </div>
    )
  }