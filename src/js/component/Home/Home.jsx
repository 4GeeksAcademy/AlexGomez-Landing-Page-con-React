import React from 'react'
import {Navbar} from '../Navbar/Navbar.jsx'
import { Jumbotron } from '../Jumbotron/Jumbotron.jsx'
import Footer from '../Footer/Footer.jsx'
import Card from '../Card/Card.jsx'
export const Home = () => {
  return (
<>
    <div>
        <Navbar/>
        <Jumbotron/>
        <Card/>
        <Footer/>
    </div>
</>
  )
}
