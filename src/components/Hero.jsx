import React, { useState } from "react";
import Button from "./Button";
import "../style/Hero.css";
import HeroImage from "../assests/img/logo/hero.jpeg";
import Modal from "react-modal";
// require('dotenv').config()

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    right: "auto",
    background:
      "linear-gradient(60deg, rgb(171 124 255), rgb(130 153 238 ), rgb(65 180 217 ))",
    "border-radius": "20px",
    bottom: "1px solid black",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Main function starts from here
const Hero = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [successmodal, successSetOpen] = React.useState(false);

  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [msg, setMsg] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    successSetOpen(false);
  };
  const successform = () => {
    successSetOpen(true);
  };
  const handleSubmit = async () => {
    console.log(email);
    console.log(profession);

    const options = {
      method: "POST",
      Headers: "Access-Control-Allow-Origin’:’*’",
      body: new URLSearchParams({
        email: email,
        proffession: profession,
      }),
    };
    await fetch("https://api.stuneckt.com/api/saveform", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.success == 1) {
          closeModal();
          successform();
        }
      })
      .catch((err) => {
        console.error(err);
      });
    if (profession == "Student") {
      setMsg("Interested to join our Valuable profile student program , ");
    } else if (profession == "Program") {
      setMsg(
        "Get more visiblity by making your students join our most valueable profile program , "
      );
    } else {
      setMsg(
        "I Know someone who can join our valueable profile program, click here to know more. "
      );
    }
  };
  // alert(state.email)

  return (
    <main>
      {/* thankyou modal form data */}

      <Modal
        isOpen={successmodal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="closebtn">
          <p onClick={closeModal}>x</p>
        </div>
        <div className="top-paragraph">
          <p className="Formparagraph">Thank you ! We will keep you posted</p>
        </div>
        <div className="always">
        {msg}
          <a
            className="linkcolor"
            href="https://docs.google.com/forms/d/1f_LDsRHmKexnPqRmqyTLuCHP4ZN7gxqEloFtntgeprE/viewform?ts=639708ae&edit_requested=true"
          >
            Click here to know more.
          </a>
        </div>
      </Modal>

      {/* form modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="closebtn">
          <p onClick={closeModal}>x</p>
        </div>
        <div className="top-paragraph">
          <div className="Formparagraph">
            We are building the best experience for you. Help us know more and
            keep you posted when we launch.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="fff" action="#">
          <div className="input-field">
            <label htmlFor="">Occupation</label>
            <select onChange={(e) => setProfession(e.target.value)}>
              <option value="">Select Occupation</option>
              <option value="Student">Student</option>
              <option value="Educator">Educator</option>
              <option value="Program">Program</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@gmail.com"
              id=""
            />
          </div>
        </form>
        <button onClick={handleSubmit} className="btn-submit" type="submit">
          Submit
        </button>
        {/* <div className="btn-submit" > */}
        {/* <Button type="submit" bgcolor="#0984E3" color="white" value={"Submit"} /> */}
        {/* </div> */}
      </Modal>
      <div className="row">
        <div className="col f1">
          <div className="title h22">
            Where 15-22 year old’s
            <div className="title-high">Network . Explore . Grow</div>
          </div>
          <div className="col mobile">
            <img
              className="immghero"
              src={HeroImage}
              alt="children with studying"
            />
          </div>
          <div className="text-about">
            Now you can explore different student profiles and their projects ,
            meet like minded people to add to your pool of knowledge and
            resources , start conversation with students sharing similar
            interests and much more !!!
          </div>

          <div onClick={openModal} className="btn btn-getin">
            <Button bgcolor="#0984E3" color="white" value="I want in" />
          </div>
        </div>
        <div className="col desktop">
          <img src={HeroImage} alt="children with studying" />
        </div>
      </div>
    </main>
  );
};
export default Hero;
