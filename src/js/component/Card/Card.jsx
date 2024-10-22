import React from "react"


export default function Card() {
    const cardData = [
      {
        id: 1,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      },
      {
        id: 2,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
      },
      {
        id: 3,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      },
      {
        id: 4,
        title: "Card title",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
      },
    ]
  
    return (
      <div className="container mx-auto">
        <div className="row row-cols-1 mt-4 row-cols-md-2 row-cols-lg-4 g-4">
          {cardData.map((card) => (
            <div key={card.id} className="col">
              <div className="card h-100 border-0">
                <img 
                  src="https://picsum.photos/500/325" 
                  className="card-img-top bg-light" 
                  alt="Card image cap"
                />
                <div className="card-body px-0 d-flex flex-column justify-content-center ">
                  <h5 className="card-title text-center">{card.title}</h5>
                  <p className="card-text text-center">{card.content}</p>
                </div>
                <div className="card-footer bg-transparent border-0 px-0 mx-auto">
                  <a href="#" className="btn btn-primary ">Find Out More!</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }