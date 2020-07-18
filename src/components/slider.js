import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";

//context
import { GlobalContext } from "../context/globalContext";
import "../assets/css/home.css";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  arrows: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 1700,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
};
const Carosel = () => {
  // text1
  const { ref: text1 } = useWebAnimations({ ...fadeInUp });
  //text2
  const { keyframes, timing } = fadeInUp;
  const { ref: text2 } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 300, // Delay 1s
      iterations: 1,
      easing: "ease-in-out",
    },
  });
  //carousel
  const { keyframes: carousel, timing: carouseltiming } = fadeInUp;
  const { ref: gallery } = useWebAnimations({
    keyframes: carousel,
    timing: {
      ...carouseltiming,
      delay: 500, // Delay 1s
      iterations: 1,
      easing: "ease",
    },
  });

  const { teammem } = useContext(GlobalContext);

  return (
    <div
      className=" w-full h-screen flex flex-col justify-between bg-gray-100 overflow-y-hidden "
      // style={{ overflowY: "hidden" }}
    >
      <div></div>
      <div className="container mx-auto text-center">
        <div
          className="text-md text-orange-600 font-semibold  pb-2 "
          ref={text1}
        >
          Our Team
        </div>

        <div
          className="text-4xl text-gray-700 leading-tight font-normal tracking-wide"
          ref={text2}
        >
          Meet the minds
          <br />
          shaping an inustry{" "}
        </div>
      </div>

      <div className="sldierMain w-full" ref={gallery}>
        <Slider {...settings}>
          {teammem.map((team, i) => (
            <div key={team.memId} className=" focus:outline-none  ">
              <Link to={`/${team.slug}`}>
                <img
                  id="teamImage"
                  src={team.image}
                  alt="team member "
                  style={{
                    display: "block",
                    margin: "0 auto",
                    cursor: "pointer",
                  }}

                  // height="100%"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carosel;
