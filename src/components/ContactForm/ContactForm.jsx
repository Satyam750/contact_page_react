import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import { useState } from 'react'


const ContactForm = () => {
  
    const [name, setName] = useState("Satyam");
    const [email, setEmail] = useState("support@dosomecoding.com");
    const [text, setText] = useState("Subscribe to this channel");


 const onSubmit = (event) =>{
  event.preventDefault()
  

  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);

 }





  return (
    <section className={styles.container}>
       <div className={styles.contact_form}>
       <div className={styles.top_btn}>
       <Button text=" VIA SUPPORT CHAT" icon={<MdMessage fontSize={"24px"}/>}></Button>
      <Button text=" VIA CALL" icon={<FaPhoneAlt fontSize={"24px"}/>}></Button>
 </div>
        <Button isOutline ={true} text="VIA EMAIL FROM" icon={<HiMail fontSize={"24px"}/>} ></Button>
          
          <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
            <input type="email" name='email' />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
           <textarea name="text" rows="8"></textarea>
          </div>
             <div style={{display:"flex", justifyContent:"end"}}>
             <Button text="Submit"  ></Button>
             </div>
              <div>{name + " "+ email + " " + text }</div>
          </form>

       </div>
       <div style={{height:"500px", width:"300px", marginBottom:"200px", marginLeft:"20px"}} className={styles.contact_image}>
         <img src="./public/images/contact.svg" alt="contact " />
       </div>
    </section>
  )
}

export default ContactForm
