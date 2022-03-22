import React from "react";
import home from "../Iconer/home.png";
import phone from "../Iconer/phone.png";
import post from "../Iconer/post.png";
import "./Kontkat.css";
const Kontkat = () => {
  return (
    <div className="contact">
      <div className="left-contact">
        <h1>Kontakta Sjöström Skärgård</h1>
        <p>
          Vi hjälper privatpersoner, fastighetsägare, bostadsrättsföreningar och
          företag i Stockholms Skärgård med omnejd.
        </p>
        <p>Inget jobb är för litet eller stort för oss.</p>
        <p>Välkommen att kontakta oss idag</p>
        <div className="icon-div">
          <div className="icon">
            <img src={home} alt="" />
            <h2>BESÖK:</h2>
            <p>
              Karlavägen 18 <br /> 114 31 Stockholm
            </p>
          </div>
          <div className="icon">
            <img src={phone} alt="" />
            <h2>TELEFON:</h2>
            <p>072 857 90 13</p>
          </div>
          <div className="icon">
            <img src={post} alt="" />
            <h2>E-POST:</h2>
            <p>Jan.sjostrom@rewabbygg.se</p>
          </div>
        </div>
      </div>
      <div className="right-contact">
        <h1>
          BESKRIV DITT ÄRENDE SÅ ÅTERKOMMER VI <br /> MED PRISUPPGIFTER!
        </h1>
        <form action="#">
          <div className="input-wrapper">
            <label htmlFor="name">NAMN *</label>
            <div className="input-div">
              <input
                placeholder="Förnamn"
                className="input"
                type="text"
                name="name"
                id="name"
              />
              <input placeholder="Efternamn" className="input" type="text" />
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="post">E-POST *</label>
            <input className="input" type="text" name="post" id="post" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="ARENDE">ARENDE *</label>
            <input className="input" type="text" name="ARENDE" id="ARENDE" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="TELEFONNUMMER">
              TELEFONNUMMER VI KAN NA DIG PÅ *
            </label>
            <input
              className="input"
              type="text"
              name="TELEFONNUMMER"
              id="TELEFONNUMMER"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="BESKRIVNING">BESKRIVNING *</label>
            <textarea name="BESKRIVNING" id="BESKRIVNING"></textarea>
          </div>
          <button className="submit">SKICKA</button>
        </form>
      </div>
    </div>
  );
};

export default Kontkat;
