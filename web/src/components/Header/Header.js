import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Burger from "../Burger/Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

// mobile submenu temporary height
let submenuTempHeight1 = null;
let submenuTempHeight2 = null;
let submenuTempHeight3 = null;

const Header = () => {
  // mobile submenu animate height variables
  const [submenuHeight1, submenuSetHeight1] = useState("initial");
  const [submenuHeight2, submenuSetHeight2] = useState("initial");
  const [submenuHeight3, submenuSetHeight3] = useState("initial");
  const [submenuPaddingTop1, submenuSetPaddingTop1] = useState("20px");
  const [submenuPaddingTop2, submenuSetPaddingTop2] = useState("20px");
  const [submenuPaddingTop3, submenuSetPaddingTop3] = useState("20px");
  const submenuRef1 = useRef(null);
  const submenuRef2 = useRef(null);
  const submenuRef3 = useRef(null);

  // calculate mobile submenu height
  useEffect(() => {
    if (submenuRef1.current && submenuTempHeight1 === null) {
      submenuTempHeight1 =
        submenuRef1.current.getBoundingClientRect().height +
        parseInt(submenuPaddingTop1);
      submenuSetHeight1(0);
      submenuSetPaddingTop1(0);
    }
    if (submenuRef2.current && submenuTempHeight2 === null) {
      submenuTempHeight2 =
        submenuRef2.current.getBoundingClientRect().height +
        parseInt(submenuPaddingTop2);
      submenuSetHeight2(0);
      submenuSetPaddingTop2(0);
    }
    if (submenuRef3.current && submenuTempHeight3 === null) {
      submenuTempHeight3 =
        submenuRef3.current.getBoundingClientRect().height +
        parseInt(submenuPaddingTop3);
      submenuSetHeight3(0);
      submenuSetPaddingTop3(0);
    }
  }, [submenuPaddingTop1, submenuPaddingTop2, submenuPaddingTop3]);

  // determine if offcanvas is open
  const [open, setOpen] = useState(false);

  // determine if submenu is open
  const [subMenuOpen1, setSubMenuOpen1] = useState(false);
  const [subMenuOpen2, setSubMenuOpen2] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(false);
  const node = useRef();

  // handle click of navigation items
  const clickHandler = () => {
    setOpen(!open);
    submenuTempHeight1 = null;
    submenuTempHeight2 = null;
    submenuTempHeight3 = null;
  };

  // close offcanvas onclick outside
  useOnClickOutside(node, () => setOpen(false));

  // determine if page has scrolled
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  // change state on scroll
  useLayoutEffect(() => {
    const siteNavigation = document.querySelector("#site-navigation"),
      promoBar = document.querySelector("#promo-bar"),
      utilityNavigation = document.querySelector("#utlity-navigation"),
      mainNavigation = document.querySelector("#main-navigation"),
      offcanvasNavigation = document.querySelector("#offcanvas-navigation"),
      bodyContent = document.querySelector("#body-content");

    if (offcanvasNavigation) {
      offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";
    }

    const handleLoad = () => {
      // calculate #offcanvas-navigation menu offset top
      if (offcanvasNavigation) {
        offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";
      }
    };

    const handleResize = () => {
      // calculate #offcanvas-navigation offset top on resize
      if (offcanvasNavigation) {
        offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";
      }
    };

    const handleScroll = () => {
      let isScrolled;

      if (utilityNavigation !== null && promoBar !== null) {
        isScrolled =
          window.scrollY >
          utilityNavigation.offsetHeight + promoBar.offsetHeight;
      } else if (promoBar !== null) {
        isScrolled = window.scrollY > promoBar.offsetHeight;
      } else if (utilityNavigation !== null) {
        isScrolled = window.scrollY > utilityNavigation.offsetHeight;
      } else {
        isScrolled = window.scrollY > 0;
      }

      if (isScrolled) {
        setScrolled(true);
        // recalculate #offcanvas-navigation offset top on scroll
        if (offcanvasNavigation) {
          offcanvasNavigation.style.top = mainNavigation.offsetHeight + "px";

          // recalculate #body-content offset top on scroll
          bodyContent.style.paddingTop = mainNavigation.offsetHeight + "px";
          bodyContent.style.marginTop = null;
        }
      } else {
        setScrolled(false);
        // calculate #offcanvas-navigation menu offset top
        if (offcanvasNavigation) {
          offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";

          // recalculate #body-content offset top on scroll
          bodyContent.style.paddingTop = null;
          bodyContent.style.marginTop = null;
        }
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleLoad, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, [scrolled]);

  const data = useStaticQuery(graphql`
    {
      desktopLogo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          fixed(width: 296) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      mobileLogo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <div id="site-navigation">
      {/* <div id="utlity-navigation"></div> */}
      <nav
        id="main-navigation"
        className="pt-3 pb-3 base-animation-ease"
        role="navigation"
        aria-label="main-navigation"
        data-fixed={scrolled}
      >
        <div className="container flex items-center">
          <div className="flex-auto flex items-center">
            <AniLink fade to="/">
              <div className="hidden md:flex">
                <Img
                  fixed={data.desktopLogo.childImageSharp.fixed}
                  alt="Hoffman Hanono Logo"
                />
              </div>
              <div className="flex md:hidden">
                <Img
                  fixed={data.mobileLogo.childImageSharp.fixed}
                  alt="Hoffman Hanono Logo"
                />
              </div>
            </AniLink>
          </div>
          <div className="flex items-center justify-end flex-auto">
            <ul
              id="navigation-desktop"
              className="hidden lg:flex lg:items-center lg:justify-end mr-8"
            >
              <li className="is-submenu-parent navigation-item">
                <AniLink fade to="/business-insurance-chula-vista/">
                  Commercial
                </AniLink>
                <ul className="submenu">
                  <li className="navigation-item">
                    <AniLink fade to="/manufacturers-insurance/">
                      Manufacturers
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/property-owners-insurance/">
                      Property Owners
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/contractors-insurance/">
                      Contractors
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/restaurant-insurance/">
                      Restaurants
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/nonprofit-insurance/">
                      Non-Profits
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/transportation-insurance/">
                      Transportation
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/health-benefits-insurance/">
                      Health Benefits
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/commercial-auto-insurance-san-diego/">
                      Auto
                    </AniLink>
                  </li>
                </ul>
              </li>
              <li className="is-submenu-parent navigation-item">
                <AniLink fade to="/personal-insurance-agency/">
                  Personal
                </AniLink>
                <ul className="submenu">
                  <li className="navigation-item">
                    <AniLink fade to="/home-insurance-chula-vista/">
                      Home
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/auto-insurance-chula-vista/">
                      Auto
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/landlord-insurance-san-diego/">
                      Landlord
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/umbrella-insurance-san-diego/">
                      Umbrella
                    </AniLink>
                  </li>
                </ul>
              </li>
              <li className="is-submenu-parent navigation-item">
                <AniLink fade to="/about-hoffman-hanono-insurance/">
                  About
                </AniLink>
                <ul className="submenu">
                  <li className="navigation-item">
                    <AniLink fade to="/about-hoffman-hanono-insurance/">
                      Our Company
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/our-team/">
                      Team
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/testimonials/">
                      Testimonials
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/carriers/">
                      Carriers
                    </AniLink>
                  </li>
                  <li className="navigation-item">
                    <AniLink fade to="/blog/">
                      Blog
                    </AniLink>
                  </li>
                </ul>
              </li>
              <li className="navigation-item">
                <a
                  href="https://hhinsurance.myhrsupportcenter.com/users/sign_in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HR Portal
                </a>
              </li>
            </ul>
            <div className="hidden lg:inline-block inline-flex items-center">
              <ButtonGhost
                className="mr-6"
                data="modal-contact"
                text="Contact"
              />
              <ButtonSolid data="modal-quote" text="Get a Quote" />
            </div>

            <div className="lg:hidden" ref={node}>
              <Burger
                open={open}
                setOpen={setOpen}
                aria-controls="offcanvas-navigation"
              />
              <OffCanvas
                open={open}
                setOpen={setOpen}
                id="offcanvas-navigation"
                className="py-10"
              >
                <ul id="navigation-mobile" className="mb-16 inline-block">
                  <li className="navigation-item is-submenu-parent">
                    <a
                      aria-expanded={subMenuOpen1 === true ? "true" : "false"}
                      onClick={() => {
                        if (submenuTempHeight1 === null) return;
                        submenuSetHeight1(
                          submenuHeight1 === 0 ? submenuTempHeight1 : 0
                        );
                        submenuSetPaddingTop1(
                          submenuPaddingTop1 === 0 ? "20px" : 0
                        );
                        setSubMenuOpen1(!subMenuOpen1);
                      }}
                    >
                      Commercial Insurance
                    </a>
                    <ul
                      className="submenu ml-6"
                      ref={submenuRef1}
                      style={{
                        maxHeight: submenuHeight1,
                        paddingTop: submenuPaddingTop1,
                      }}
                    >
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/business-insurance-chula-vista/"
                        >
                          Commercial Insurance
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/manufacturers-insurance/"
                        >
                          Manufacturers
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/property-owners-insurance/"
                        >
                          Property Owners
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/contractors-insurance/"
                        >
                          Contractors
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/restaurant-insurance/"
                        >
                          Restaurants
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/nonprofit-insurance/"
                        >
                          Non-Profits
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/transportation-insurance/"
                        >
                          Transportation
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/health-benefits-insurance/"
                        >
                          Health Benefits
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/commercial-auto-insurance-san-diego/"
                        >
                          Auto
                        </AniLink>
                      </li>
                    </ul>
                  </li>
                  <li className="navigation-item is-submenu-parent">
                    <a
                      aria-expanded={subMenuOpen2 === true ? "true" : "false"}
                      onClick={() => {
                        if (submenuTempHeight2 === null) return;
                        submenuSetHeight2(
                          submenuHeight2 === 0 ? submenuTempHeight2 : 0
                        );
                        submenuSetPaddingTop2(
                          submenuPaddingTop2 === 0 ? "20px" : 0
                        );
                        setSubMenuOpen2(!subMenuOpen2);
                      }}
                    >
                      Personal
                    </a>
                    <ul
                      className="submenu ml-6"
                      ref={submenuRef2}
                      style={{
                        maxHeight: submenuHeight2,
                        paddingTop: submenuPaddingTop2,
                      }}
                    >
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/personal-insurance-agency/"
                        >
                          Personal Insurance
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/home-insurance-chula-vista/"
                        >
                          Home
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/auto-insurance-chula-vista/"
                        >
                          Auto
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/landlord-insurance-san-diego/"
                        >
                          Landlord
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/umbrella-insurance-san-diego/"
                        >
                          Umbrella
                        </AniLink>
                      </li>
                    </ul>
                  </li>
                  <li className="navigation-item is-submenu-parent">
                    <a
                      aria-expanded={subMenuOpen3 === true ? "true" : "false"}
                      onClick={() => {
                        if (submenuTempHeight3 === null) return;
                        submenuSetHeight3(
                          submenuHeight3 === 0 ? submenuTempHeight3 : 0
                        );
                        submenuSetPaddingTop3(
                          submenuPaddingTop3 === 0 ? "20px" : 0
                        );
                        setSubMenuOpen3(!subMenuOpen3);
                      }}
                    >
                      About
                    </a>
                    <ul
                      className="submenu ml-6"
                      ref={submenuRef3}
                      style={{
                        maxHeight: submenuHeight3,
                        paddingTop: submenuPaddingTop3,
                      }}
                    >
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/about-hoffman-hanono-insurance/"
                        >
                          Our Company
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/our-team/"
                        >
                          Team
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/testimonials/"
                        >
                          Testimonials
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/carriers/"
                        >
                          Carriers
                        </AniLink>
                      </li>
                      <li className="navigation-item">
                        <AniLink
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          fade
                          to="/blog/"
                        >
                          Blog
                        </AniLink>
                      </li>
                    </ul>
                  </li>
                  <li className="navigation-item">
                    <a
                      onKeyDown={() => setOpen(!open)}
                      onClick={() => setOpen(!open)}
                      href="https://hhinsurance.myhrsupportcenter.com/users/sign_in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HR Portal
                    </a>
                  </li>
                </ul>

                <div className="grid grid-cols-2 gap-x-4">
                  <ButtonGhost
                    as="button"
                    data="modal-contact"
                    text="Contact"
                  />
                  <ButtonSolid data="modal-quote" text="Get a Quote" />
                </div>
              </OffCanvas>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
