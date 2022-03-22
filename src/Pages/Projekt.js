import React from "react";
import "./Projekt.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Footer from "../Components/Footer.js";
import img1 from "./inspiration/inspiration (1).jpg";
import img2 from "./inspiration/inspiration (2).jpg";
import img3 from "./inspiration/inspiration (3).jpg";
import img4 from "./inspiration/inspiration (4).jpg";
const Projekt = () => {
  return (
    <>
      <div className="project">
        <h1>Inspiration</h1>
        <Splide
          options={{
            autoplay: "play",
            type: "loop",
            rewind: true,
            perPage: 3,
            height: "auto",
            gap: "9rem",
            width: "90%",
            arrows: true,
            pagination: false,
            perMove: 1,
            drag: true,
            breakpoints: {
              1466: {
                gap: "5rem",
              },
              1004: {
                perPage: 2,
                gap: "2rem",
              },
              500: {
                perPage: 1,
                gap: "0rem",
                width: "70%",
              },
            },
          }}
        >
          <SplideSlide>
            <img src={img1} alt="" className="img-inspire" />
          </SplideSlide>
          <SplideSlide>
            <img src={img2} alt="" className="img-inspire" />
          </SplideSlide>
          <SplideSlide>
            <img src={img3} alt="" className="img-inspire" />
          </SplideSlide>
          <SplideSlide>
            <img src={img4} alt="" className="img-inspire" />
          </SplideSlide>
        </Splide>
      </div>
      <Footer />
    </>
  );
};

export default Projekt;
