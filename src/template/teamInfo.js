import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
//context
import { GlobalContext } from "../context/globalContext";
//css
import "../assets/css/home.css";
//animation
// import ScrollAnimation from "react-animate-on-scroll";

import useWebAnimations, {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@wellyshen/use-web-animations";

const TeamInfo = () => {
  const { slug } = useParams();
  const { teammem } = useContext(GlobalContext);
  const teamMem = teammem.filter((team) => team.slug === slug);

  // image parent
  const { keyframes: keyimageParent, timing: timageParent } = fadeInLeft;
  const { ref: imageParent } = useWebAnimations({
    keyframes: keyimageParent,
    timing: {
      ...timageParent,
      iterations: 1,
      easing: "ease-in-out",
    },
  });
  // content parent
  const { keyframes: keycontentParent, timing: tcontentParent } = fadeInRight;
  const { ref: contentParent } = useWebAnimations({
    keyframes: keycontentParent,
    timing: {
      ...tcontentParent,
      iterations: 1,
      easing: "ease-in-out",
    },
  });
  // text1 parent
  const { keyframes: text1key, timing: text1time } = fadeInUp;
  const { ref: text1 } = useWebAnimations({
    keyframes: text1key,
    timing: {
      ...text1time,
      delay: 1000,
      iterations: 1,
      easing: "ease",
    },
  });
  // text2 parent
  const { keyframes: text2key, timing: text2time } = fadeInUp;
  const { ref: text2 } = useWebAnimations({
    keyframes: text2key,
    timing: {
      ...text2time,
      delay: 1300,
      iterations: 1,
      easing: "ease",
    },
  });
  // button parent
  const { keyframes: linkdinbtnkey, timing: linkdinbtntime } = fadeInUp;
  const { ref: linkdinbtn } = useWebAnimations({
    keyframes: linkdinbtnkey,
    timing: {
      ...linkdinbtntime,
      delay: 1700,
      iterations: 1,
      easing: "ease-in-out",
    },
  });

  return (
    <div className="relative ">
      <Link to="/">
        <h1
          className="absolute text-white m-4 text-3xl cursor-pointer "
          style={{ zIndex: 2 }}
        >
          X
        </h1>
      </Link>

      {teamMem.map((team) => (
        <div
          key={team.memId}
          className="w-full md:h-screen flex md:flex-row flex-col justify-center items-center"
        >
          <div
            className="lg:w-8/12 md:6/12 w-full md:h-full "
            id="memberImageParent"
            ref={imageParent}
          >
            <div className="w-full h-full primary-bg flex justify-center items-center">
              <img id="memberImage" src={team.image} alt="team" />
            </div>
          </div>
          <div className="lg:w-4/12 md:6/12 w-full h-full flex items-center teamMemContent">
            <div
              className="w-full h-full bg-white flex flex-col justify-center p-10 shadow-lg"
              ref={contentParent}
            >
              <div className="pt-2" ref={text1}>
                <h1 className="text-3xl font-semibold ">{team.name}</h1>
                <h1 className="text-xl primary-color">{team.depart}</h1>
                <hr className="my-5" />
              </div>

              <div ref={text2}>
                <h1 className=" text-gray-600 ">{team.description}</h1>

                <h1 className=" text-gray-600 ">{team.description}</h1>
              </div>

              <button
                className="text-lg w-32 py-2 px-4 focus:outline-none primary-bg text-white rounded-md my-8 hover:bg-orange-600"
                ref={linkdinbtn}
              >
                Linkedin
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamInfo;
