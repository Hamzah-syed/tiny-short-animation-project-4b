import React, { createContext } from "react";
import { ImagesPaths } from "./imagepath";

const { p1, p2, p3, p4, p5, p6, p7, p8, p9 } = ImagesPaths;
const intialState = {
  teamMembers: [
    {
      memId: 1,
      name: "John Smith",
      slug: "john-smith",
      depart: "Chief executive officer",
      image: p3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      memId: 2,
      name: "Jane Smith",
      slug: "jane smith",
      depart: "Chief people officer",
      image: p1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      memId: 3,
      name: "Joe Smith",
      slug: "joe-smith",
      depart: "Chief people officer",
      image: p2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      memId: 4,
      name: "Juan Carlos",
      slug: "juan-carlos",
      depart: "Chief people officer",
      image: p4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      memId: 5,
      name: "Evans Davis",
      slug: "evans-davis",
      depart: "Chief people officer",
      image: p5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      memId: 6,
      name: "Frank Louis",
      slug: "frank-louis",
      depart: "Chief people officer",
      image: p6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      memId: 7,
      name: "Irwin",
      slug: "irwin",
      depart: "Chief people officer",
      image: p9,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      memId: 8,
      name: "Mike Jones",
      slug: "mike-jones",
      depart: "Chief people officer",
      image: p8,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
    },
    {
      memId: 9,
      name: "Sarah David ",
      slug: "sarah-david",
      depart: "Chief people officer",
      image: p7,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ],
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider value={{ teammem: intialState.teamMembers }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
