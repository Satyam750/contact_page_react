import React from 'react'
import "./App.css"
import Nav from './components/Naviagtion/Nav'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'


const App = () => {
  return (
    <div>
   <Nav></Nav>

   <main className='main_container'>
   <ContactHeader></ContactHeader>
   <ContactForm></ContactForm>
   </main>

 

    </div>
  )
}

export default App
