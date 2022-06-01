import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";
import ModalGetQuote from "../Modal/ModalGetQuote";
import ModalPersonalInsuranceQuote from "../Modal/ModalPersonalInsuranceQuote";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const citiesClickHandler = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  };

  const navigation = {
    cities: [
      {
        name: "Bonita",
        href: "/bonita-commercial-insurance/",
      },
      {
        name: "Chula Vista",
        href: "/chula-vista-commercial-insurance/",
      },
      {
        name: "Coronado",
        href: "/coronado-commercial-insurance/",
      },
      {
        name: "Escondido",
        href: "/escondido-commercial-insurance/",
      },
      {
        name: "La Mesa",
        href: "/la-mesa-commercial-insurance/",
      },
      {
        name: "National City",
        href: "/national-city-commercial-insurance/",
      },
      {
        name: "San Diego",
        href: "/san-diego-commercial-insurance",
      },
      {
        name: "Spring Valley",
        href: "/spring-valley-commercial-insurance",
      },
    ],
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      nestLogo: file(relativePath: { eq: "global/nest-logo.png" }) {
        childImageSharp {
          fixed(width: 21) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <div>
      <footer
        id="main-footer"
        className="bg-white pb-6 text-center md:text-left"
      >
        <div className="container">
          <div className="md:flex md:justify-between mb-12 md:mb-16">
            <div className="mb-10 md:mb-0">
              <Img
                className="mb-3"
                fixed={data.logo.childImageSharp.fixed}
                alt="Hoffman Hanono Logo"
              />
              <p className="mb-0">CA License #: 0424824</p>
              <div className="flex justify-center md:justify-start mt-10">
                <a
                  href="https://www.linkedin.com/company/hhinsurance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-primary_600 hover:text-primary_400 text-lg mr-6 base-animation-ease"></i>
                </a>
                <a
                  href="https://www.facebook.com/pages/category/Insurance-Broker/Hoffman-Hanono-Insurance-Services-103833187845581/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-primary_600 hover:text-primary_400 text-lg mr-6 base-animation-ease"></i>
                </a>
                <a
                  href="https://www.instagram.com/hoffman.hanono.insurance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-primary_600 hover:text-primary_400 text-lg base-animation-ease"></i>
                </a>
              </div>
            </div>
            <div className="mb-10 md:mb-0">
              <p className="font-heading text-gray-900 font-bold mb-4 md:mb-5">
                Address
              </p>
              <address className="m-0 not-italic">
                <a
                  href="https://goo.gl/maps/rpeSbdwscRabLQeQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2090 Otay Lakes Rd. Suite 102 <br /> Chula Vista, CA 91913
                </a>
              </address>
            </div>
            <div className="mb-10 md:mb-0">
              <p className="font-heading text-gray-900 font-bold mb-4 md:mb-5">
                Hours
              </p>
              <p className="m-0">
                Monday - Friday <br /> 8:00am - 5:00pm
              </p>
            </div>
            <div className="mb-10 md:mb-0">
              <p className="font-heading text-gray-900 font-bold mb-4 md:mb-5">
                Phone
              </p>
              <p className="m-0">
                <a className="gtm-phone-number" href="tel:+1-619-420-1861">
                  (619) 420-1861
                </a>{" "}
                <br /> Toll-Free:{" "}
                <a className="gtm-phone-number" href="tel:+1-877-420-1861">
                  (877) 420-1861
                </a>
              </p>
            </div>
            <div className="mb-10 md:mb-0">
              <p className="font-heading text-gray-900 font-bold mb-4 md:mb-5">
                Email & Fax
              </p>
              <p className="m-0">
                <a href="mailto:info@hhinsurance.com">info@hhinsurance.com</a>{" "}
                <br />{" "}
                <a className="gtm-phone-number" href="tel:+1-619-420-5701">
                  (619) 420-5701
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-no-wrap flex-col md:flex-row items-center justify-center md:justify-between">
            <ul className="flex items-center flex-col md:flex-row md:space-x-10">
              <li className="text-small mb-1 md:mb-0">
                © {getYear()} Hoffman Hanono
              </li>
              <div className="flex md:space-x-10">
                <li className="text-small mb-1 md:mb-0">
                  <AniLink fade to="/terms-conditions/">
                    Terms of Use
                  </AniLink>
                </li>
                <span className="mx-1 md:mx-0 md:hidden">|</span>
                <li className="text-small mb-1 md:mb-0">
                  <AniLink fade to="/privacy-policy/">
                    Privacy Policy
                  </AniLink>
                </li>
                <span className="mx-1 md:mx-0 md:hidden">|</span>
                <li className="text-small mb-1 md:mb-0">
                  <button
                    className="relative focus:outline-none font-normal hover:text-primary-900 no-underline"
                    onKeyDown={citiesClickHandler}
                    onClick={citiesClickHandler}
                  >
                    <span className="flex items-center justify-between">
                      Cities
                      <i
                        className={`far fa-chevron-down ml-2 transition-all duration-300 ease-linear transform ${
                          cityDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      ></i>
                    </span>
                    <ul
                      className={`bg-white shadow-xl text-left absolute bottom-0 right-0 p-5 flex flex-col space-y-2 max-h-32 overflow-y-scroll transform transition-all duration-300 ease-linear ${
                        cityDropdownOpen
                          ? "opacity-100 -translate-y-10 visible"
                          : "opacity-0 -translate-y-4 invisible"
                      }`}
                    >
                      {navigation.cities.map((item) => (
                        <li
                          className="text-xs whitespace-nowrap pb-1.5"
                          key={item.name}
                        >
                          <AniLink
                            fade
                            to={item.href}
                            className="text-secondary-900 hover:text-primary-900"
                          >
                            {item.name}
                          </AniLink>
                        </li>
                      ))}
                    </ul>
                  </button>
                </li>
              </div>
            </ul>
            <p className="flex items-center text-small mb-0 powered-by-nest">
              Powered by{" "}
              <a
                className="flex items-center text-black font-medium ml-1"
                href="https://www.wisedigitalpartners.com/affordable-web-design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEST
                <sup className="text-3xs" style={{ paddingLeft: "2px" }}>
                  TM
                </sup>{" "}
                <Img
                  className="ml-1"
                  fixed={data.nestLogo.childImageSharp.fixed}
                  alt="nest Logo"
                />
              </a>
            </p>
          </div>
        </div>
      </footer>

      <ModalContact />
      <ModalGetQuote />
      <ModalPersonalInsuranceQuote />
    </div>
  );
};

export default Footer;
