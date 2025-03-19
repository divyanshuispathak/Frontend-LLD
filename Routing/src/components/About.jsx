import React from "react";
import { LANGUAGE } from "../utils/languageConstant";

const About = ({ language }) => {
  console.log(language);

  const data = LANGUAGE[language];
  return (
    <div>
      <h1 className="font-bold text-2xl">{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default About;
