import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export default function EmWorkEmail()  {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_i2d13m8",
          "template_5rtvi5r",
          form.current,
          "aj5mHOLmklgwtJkGt"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            alert("message sent!!")
  
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <>
      <StyledContactForm>
        <div>
        <form ref={form} onSubmit={sendEmail} className="card p-5 mt-5">
  
        <h1 className="text-success">Email Send to the Employee Regarding Order</h1>     
  
          <label>User Name</label>
          <input type="text" name="from_name" />
          <label>Email Address</label>
          <input type="email" name="from_email" />
          <label>All the detail send in description..</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          
  
        </form>
        </div>
      </StyledContactForm>
      </>
    );
  };

  const StyledContactForm = styled.div`
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 800px;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }
    h1 {
      align-self: flex-start;
    }
    
    

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: green;
      color: white;
      border: none;
}
}
`;