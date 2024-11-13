import React from "react";
import classNames from "classnames";
import NavigateButton from "../QuranicAbout/NavigateButton";

// styles
import scss from "./page.module.scss";
import light from "./light.module.scss";
import dark from "./dark.module.scss";
import { useGContext } from "@/app/contextApi/contextApi";

const JoinComunity: React.FC = () => {
  const { theme } = useGContext();
  const ThemeScss = theme === "light" ? light : dark;
  const NavigateButtonDataArray = [
    {
      title: "join our wide muslim community and explore collabratively.",
      text: "delve into the teachings of islam through authentic hadith and powerfull surah verses that offer guidenece and inspiration for your daily life.",
      btnText: "join now",
      btnHref: "/",
    },
  ];

  return (
    <>
      <NavigateButton dataArray={NavigateButtonDataArray} />
    </>
  );
};

export default JoinComunity;
