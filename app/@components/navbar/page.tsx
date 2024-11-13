"use client";

import classNames from "classnames";
import Image from "next/image";
import { useGContext } from "../../contextApi/contextApi";

// styles
import scss from "./page.module.scss";
import light from "./light.module.scss";
import dark from "./dark.module.scss";

// images
import logo_green from "@/public/images/logo/logo-green.png";
import logo_white from "@/public/images/logo/logo-white.png";

const Navigation = () => {
  // theme
  const { theme, handleThemeLight, handleThemeDark } = useGContext();
  const ThemeScss = theme === "light" ? light : dark;

  return (
    <header className={classNames(ThemeScss.header, scss.header)}>
      <div className={classNames("container")}>
        <nav className={classNames(ThemeScss.nav__01, scss.nav__01)}>
          {/* Logo */}
          <div className={classNames(ThemeScss.logo, scss.logo)}>
            <a href="/">
              <Image
                src={theme === "light" ? logo_green : logo_white}
                alt="logo"
                priority
              />
            </a>
          </div>

          {/* Links */}
          <ul className={classNames(ThemeScss.nav__ul, scss.nav__ul)}>
            {[
              "home",
              "quran verses",
              "hadiths",
              "islamic guide",
              "muslim community",
            ].map((item, index) => (
              <li
                key={index}
                className={classNames(ThemeScss.nav_ul_li, scss.nav_ul_li)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          {/* nav-buttons */}
          <div
            className={classNames(ThemeScss.nav__buttons, scss.nav__buttons)}
          >
            {/* theming buttons wrap */}
            <div
              className={classNames(
                ThemeScss.ThemeChangeButton,
                scss.ThemeChangeButton
              )}
            >
              {/* anim */}
              <div
                className={classNames(
                  ThemeScss.isActive_animation,
                  scss.isActive_animation
                )}
                style={{
                  left: theme == "light" ? "31px" : "0",
                }}
              ></div>
              {[
                {
                  iconColor: theme === "light" ? "black" : "white",
                  iconText: "dark_mode",
                  clickFunc: handleThemeDark,
                },
                {
                  iconColor: theme === "light" ? "white" : "white",
                  iconText: "brightness_6",
                  clickFunc: handleThemeLight,
                },
              ].map((elem) => (
                <span
                  key={elem.iconText}
                  className={classNames(
                    ThemeScss.ThemeChangeButton_icon,
                    scss.ThemeChangeButton_icon,
                    "material-symbols-outlined"
                  )}
                  style={{
                    color: elem.iconColor,
                  }}
                  onClick={elem.clickFunc}
                >
                  {elem.iconText}
                </span>
              ))}
            </div>

            {/* explore button  */}
            <div
              className={classNames(
                ThemeScss.signupButton_Container,
                scss.signupButton_Container
              )}
            >
              <a
                href="#"
                className={classNames(
                  ThemeScss.signup__button,
                  scss.signup__button
                )}
              >
                <p className={classNames("syne")}>sign up</p>
                <span className={classNames("material-symbols-outlined")}>
                  trending_flat
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
