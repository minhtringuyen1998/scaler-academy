import clsx from "clsx";
import React, {
  ReactElement,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import AcademyButton from "../academy-button/AcademyButton";
import "./Header.scss";
interface HeaderProps {
  user?: {};
}
const Header = (porps: HeaderProps): ReactElement => {
  const curriculumRef = useRef(null);
  useEffect(() => {
    let handleScroll = () => {
      let headerEle = document.querySelector("header.container-header");
      if (headerEle) {
        if (window.pageYOffset > headerEle?.scrollHeight + 20) {
          headerEle.classList.add("ticky-header");
        } else {
          headerEle.classList.remove("ticky-header");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const [openBackdrop, setOpenBackDrop] = useState(false);
  const openMenu = useCallback(() => {
    setOpenBackDrop(!openBackdrop);
  }, [openBackdrop]);
  return (
    <header className="container-header">
      <section className="header-wrapper">
        <div className="header-brand">
          <Link to="/">
            <img
              src="https://assets.scaler.com/assets/academy/svg/scaler-53f7b55b0dc3a8f18264d872fd53821b101c3bb6c5c1b282e609e41bae2641a3.svg.gz"
              alt="logo"
            />
          </Link>
        </div>
        <div
          className={clsx(
            "header-contents-res",
            "header-contents",
            openBackdrop && "res-menu"
          )}
        >
          <div className="header-nav">
            <a
              href="#curriculum"
              className="header-nav_item"
              data-action="scroll-smooth"
            >
              Curriculum
            </a>
            <a
              className="header-nav_item"
              data-action="scroll-smooth"
              href="#teaching"
            >
              Teaching
            </a>
            <a
              className="header-nav_item"
              data-action="scroll-smooth"
              href="#mentor"
            >
              Mentorship
            </a>
            <a
              className="header-nav_item"
              data-action="scroll-smooth"
              href="#review"
            >
              Reviews
            </a>
            <a className="header-nav_item" data-action="scroll-smooth" href="#">
              FAQs
            </a>
          </div>
          <div className="header-right">
            <div className="header-playstore_icon">
              <img
                alt="Scaler Academy"
                src="https://assets.scaler.com/assets/scaler/svg/playstore-icon-dark-0baf337a2303fab359b932b19497f1107ba5fa0893c4d31424cd4361669a23a9.svg.gz"
              />
              <div className="header-playstore__popup-container">
                <div className="header-playstore-popup">
                  <div className="header-playstore-popup-left">
                    <div className="header-playstore-popup-title  bold">
                      Learn Coding in Scaler App
                    </div>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.scaler.app&amp;utm_source=scaler-header-menu&amp;utm_medium=desktop-badge-cta&amp;utm_campaign=scaler-app&amp;utm_content=/academy"
                    >
                      <img
                        loading="lazy"
                        alt="Scaler Academy"
                        src="https://assets.scaler.com/assets/scaler/svg/google-play-dark-336e7d9126d77c6581661ccd3cae55485af66ed0ce3d8541ae8b0a2b6e957949.svg.gz"
                        className="header__playstore-popup-img"
                      />
                    </a>
                  </div>
                  <div className="header-playstore-popup-qr">
                    <img
                      alt="img-qr"
                      src="https://assets.scaler.com/assets/scaler/svg/playstore-qr-2dc84b1f2700fb9cfab4f2c6dfa32ffc2c95bdddce12543da850a1f44bc389c9.svg.gz"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="header-apply header-apply-button-hidden">
              <AcademyButton
                classes={["header-apply-button", "bold"]}
                content="Attend a Webinar"
                mode="solid"
                variant="secondary"
              />
            </div>
            <div className="auth-options">
              <AcademyButton
                classes={["header-auth-options", "bold"]}
                content="Sign up / Login"
                mode="outline"
                variant="primary"
              />
            </div>
          </div>
        </div>
        <div className="header-contents">
          <div className="header-nav">
            <a
              href="#curriculum"
              className="header-nav_item"
              data-action="scroll-smooth"
            >
              Curriculum
            </a>
            <a
              className="header-nav_item"
              data-action="scroll-smooth"
              href="#teaching"
            >
              Teaching
            </a>
            <a
              className="header-nav_item"
              data-action="scroll-smooth"
              href="#mentor"
            >
              Mentorship
            </a>
            <a
              className="header-nav_item"
              data-action="scroll-smooth"
              href="#review"
            >
              Reviews
            </a>
            <a className="header-nav_item" data-action="scroll-smooth" href="#">
              FAQs
            </a>
          </div>
          <div className="header-right">
            <div className="header-playstore_icon">
              <img
                alt="Scaler Academy"
                src="https://assets.scaler.com/assets/scaler/svg/playstore-icon-dark-0baf337a2303fab359b932b19497f1107ba5fa0893c4d31424cd4361669a23a9.svg.gz"
              />
              <div className="header-playstore__popup-container">
                <div className="header-playstore-popup">
                  <div className="header-playstore-popup-left">
                    <div className="header-playstore-popup-title  bold">
                      Learn Coding in Scaler App
                    </div>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.scaler.app&amp;utm_source=scaler-header-menu&amp;utm_medium=desktop-badge-cta&amp;utm_campaign=scaler-app&amp;utm_content=/academy"
                    >
                      <img
                        loading="lazy"
                        alt="Scaler Academy"
                        src="https://assets.scaler.com/assets/scaler/svg/google-play-dark-336e7d9126d77c6581661ccd3cae55485af66ed0ce3d8541ae8b0a2b6e957949.svg.gz"
                        className="header__playstore-popup-img"
                      />
                    </a>
                  </div>
                  <div className="header-playstore-popup-qr">
                    <img
                      alt="img-qr"
                      src="https://assets.scaler.com/assets/scaler/svg/playstore-qr-2dc84b1f2700fb9cfab4f2c6dfa32ffc2c95bdddce12543da850a1f44bc389c9.svg.gz"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="header-apply header-apply-button-hidden">
              <AcademyButton
                classes={["header-apply-button", "bold"]}
                content="Attend a Webinar"
                mode="solid"
                variant="secondary"
              />
            </div>
            <div className="auth-options">
              <AcademyButton
                classes={["header-auth-options", "bold"]}
                content="Sign up / Login"
                mode="outline"
                variant="primary"
              />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "header-burger-button",
            openBackdrop && "menu-animation"
          )}
          onClick={openMenu}
        >
          <div className="burger">
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>
        </div>
      </section>
      <div
        className={clsx(
          "header-backdrop-menu",
          openBackdrop && "backdrop-open"
        )}
      ></div>
    </header>
  );
};
export default Header;
