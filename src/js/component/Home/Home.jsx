import React from 'react'
import {Navbar} from '../Navbar/Navbar.jsx'
import { Jumbotron } from '../Jumbotron/Jumbotron.jsx'
import Footer from '../Footer/Footer.jsx'
import Card from '../Card/Card.jsx'
export const Home = () => {
  const cardData = [
    {
      id: 1,
      title: "Card title",
      content: "Lorem ipsum dolor sit amet consectetur adipisi. Aut ratione libero doloribus consequ fgsgd.",
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
<>


    <div>
        <Navbar/>
        <Jumbotron/>
        <div className="container-fluid ">
            <div className="row">
              
            {
              cardData.map(({id,imagen,title,content}) => (
                <div className="col-md-3 col-sm-12 my-5">
                  <Card id={id} imagen={imagen} title={title} content={content} />
                </div>
              ))}
              </div>
          </div>
        <Footer/>
    </div>
</>
  )
}
